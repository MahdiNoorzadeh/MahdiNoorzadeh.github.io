const DATA_URL = 'data/profile.json';

const elements = {
  folderList: document.getElementById('folder-list'),
  viewerTitle: document.getElementById('viewer-title'),
  viewerLines: document.getElementById('viewer-lines'),
  download: document.getElementById('download-pdf'),
  toggleAudio: document.getElementById('toggle-audio')
};

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let ambientNodes = null;
let activeIndex = 0;
let sections = [];
let soundEnabled = true;
let typingTimer = null;

const ensureAudio = () => {
  if (!soundEnabled) return;
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  if (ambientNodes) return;

  const gain = audioCtx.createGain();
  gain.gain.value = 0.025;

  const noiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 2, audioCtx.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);
  for (let i = 0; i < noiseData.length; i++) {
    noiseData[i] = (Math.random() * 2 - 1) * 0.3;
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = noiseBuffer;
  noise.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 180;
  filter.Q.value = 2;

  noise.connect(filter);

  const sine = audioCtx.createOscillator();
  sine.type = 'sine';
  sine.frequency.value = 48;
  sine.detune.value = -70;

  filter.connect(gain);
  sine.connect(gain);
  gain.connect(audioCtx.destination);

  noise.start();
  sine.start();
  ambientNodes = { noise, sine, gain };
};

const stopAmbient = () => {
  if (!ambientNodes) return;
  ambientNodes.noise.stop();
  ambientNodes.sine.stop();
  ambientNodes = null;
};

const beep = (freq = 620, duration = 0.08) => {
  if (!soundEnabled) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'square';
  osc.frequency.value = freq;
  gain.gain.value = 0.04;
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
};

const fetchProfile = async () => {
  const res = await fetch(`${DATA_URL}?t=${Date.now()}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load profile data');
  return res.json();
};

const formatExperience = experience =>
  experience
    .map(item => {
      const bullets = (item.highlights || [])
        .map(point => ` • ${point}`)
        .join('\n');
      return `${item.role} / ${item.company}\n${item.period}\n${bullets}`;
    })
    .join('\n\n––––––––––––––––––––––\n\n');

const formatEducation = education =>
  education
    .map(item => `${item.school}\n${item.degree} (${item.period})\n${item.details || ''}`)
    .join('\n\n');

const formatSkills = skills =>
  skills.map(skill => ` • ${skill}`).join('\n');

const formatLanguages = languages =>
  languages.map(lang => `${lang.language}: ${lang.level}`).join('\n');

const formatContacts = contacts =>
  contacts.map(contact => `${contact.label}: ${contact.url}`).join('\n');

const renderFolderList = () => {
  elements.folderList.innerHTML = sections
    .map(
      (section, index) => `
        <li>
          <button data-index="${index}" class="${index === activeIndex ? 'active' : ''}">
            ${section.label}
          </button>
        </li>`
    )
    .join('');
};

const renderViewer = () => {
  const current = sections[activeIndex];
  elements.viewerTitle.textContent = current.title;
  typeText(current.content);
};

const setActiveIndex = index => {
  if (index < 0) activeIndex = sections.length - 1;
  else if (index >= sections.length) activeIndex = 0;
  else activeIndex = index;
  renderFolderList();
  renderViewer();
  ensureAudio();
  beep();
};

const handleKey = event => {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    setActiveIndex(activeIndex + 1);
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    setActiveIndex(activeIndex - 1);
  } else if (event.key === 'q' || event.key === 'Q') {
    elements.viewerLines.textContent = 'SESSION TERMINATED';
  }
};

const initPdfButton = () => {
  elements.download.addEventListener('click', () => {
    ensureAudio();
    beep(820, 0.12);
    html2pdf()
      .set({
        margin: 0.2,
        filename: 'Mahdi-Noorzadeh-Terminal.pdf',
        html2canvas: { scale: Math.min(2, window.devicePixelRatio || 2) },
        jsPDF: { orientation: 'portrait', unit: 'in', format: 'letter' }
      })
      .from(document.querySelector('.terminal-frame'))
      .save();
  });
};

const initAudioToggle = () => {
  elements.toggleAudio.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    elements.toggleAudio.textContent = soundEnabled ? 'SOUND: ON' : 'SOUND: OFF';
    if (soundEnabled) {
      ensureAudio();
      beep(700, 0.1);
    } else {
      stopAmbient();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'square';
      osc.frequency.value = 320;
      gain.gain.value = 0.04;
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.07);
    }
  });
};

const initFolders = () => {
  elements.folderList.addEventListener('click', event => {
    const button = event.target.closest('button[data-index]');
    if (!button) return;
    setActiveIndex(Number(button.dataset.index));
  });
};

const bootstrap = async () => {
  const profile = await fetchProfile();
  sections = [
    {
      label: 'PERSONAL',
      title: 'PERSONAL DOSSIER',
      content: `${profile.name.toUpperCase()}\n\n${profile.summary}`
    },
    {
      label: 'SHARED',
      title: 'EXPERIENCE LOG',
      content: formatExperience(profile.experience)
    },
    {
      label: 'UTILITY',
      title: 'EDUCATION + SKILLS',
      content: `${formatEducation(profile.education)}\n\nSkills:\n${formatSkills(profile.skills)}`
    },
    {
      label: 'LANG',
      title: 'LANGUAGE INDEX',
      content: formatLanguages(profile.languages)
    },
    {
      label: 'CONTACT',
      title: 'COMM CHANNELS',
      content: formatContacts(profile.contacts)
    }
  ];

  renderFolderList();
  renderViewer();
  initFolders();
  initPdfButton();

  document.addEventListener('keydown', handleKey);
  ['pointerdown', 'keydown'].forEach(eventName => {
    document.body.addEventListener(eventName, ensureAudio, { once: true });
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  initAudioToggle();
  elements.toggleAudio.textContent = 'SOUND: ON';
};

bootstrap().catch(error => {
  console.error(error);
  elements.viewerTitle.textContent = 'ERROR';
  elements.viewerLines.textContent = 'Unable to retrieve profile data.';
});

function typeText(text) {
  if (typingTimer) {
    clearTimeout(typingTimer);
    typingTimer = null;
  }
  const chars = text.split('');
  let index = 0;
  const renderNext = () => {
    elements.viewerLines.textContent = chars.slice(0, index).join('');
    if (index < chars.length) {
      const delay = chars[index] === '\n' ? 60 : 18;
      index++;
      typingTimer = setTimeout(renderNext, delay);
    }
  };
  renderNext();
}

