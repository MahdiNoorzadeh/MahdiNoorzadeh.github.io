import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.env.GITHUB_WORKSPACE || process.cwd();
const INPUT = path.join(ROOT, 'data', 'linkedin-source.json');
const OUTPUT = path.join(ROOT, 'data', 'profile.json');

const sanitize = text =>
  (text || '')
    .replace(/\r/g, '')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

const ensureArray = value => Array.isArray(value) ? value : [];

async function normalize() {
  const raw = JSON.parse(await readFile(INPUT, 'utf8'));

  const profile = raw.profile || {};
  const positions = ensureArray(raw.positions);
  const education = ensureArray(raw.education);
  const skills = ensureArray(raw.skills).map(skill => skill.name).filter(Boolean);
  const languages = ensureArray(raw.languages).map(lang => ({
    language: lang.name,
    level: lang.proficiency || 'Not specified'
  }));

  const normalized = {
    name: `${profile.firstName || ''} ${profile.lastName || ''}`.trim(),
    summary: profile.summary || '',
    contacts: [
      profile.emailAddress && { label: 'Email', url: `mailto:${profile.emailAddress}` },
      profile.publicProfileUrl && { label: 'LinkedIn', url: profile.publicProfileUrl }
    ].filter(Boolean),
    experience: positions.slice(0, 8).map(position => ({
      role: position.title || 'Role not specified',
      company: position.companyName || 'Company',
      period: `${position.startDate || 'Unknown'} – ${position.endDate || 'Present'}`,
      highlights: sanitize(position.description || '')
    })),
    education: education.map(entry => ({
      school: entry.schoolName || 'School',
      degree: entry.degreeName || entry.fieldOfStudy || 'Program',
      period: `${entry.startDate || ''} – ${entry.endDate || ''}`.trim(),
      details: entry.notes || ''
    })),
    skills,
    languages
  };

  await writeFile(OUTPUT, JSON.stringify(normalized, null, 2));
  console.log('profile.json updated from linkedin-source.json');
}

normalize().catch(error => {
  console.error('Failed to normalize LinkedIn export:', error);
  process.exit(1);
});

