import { Prompt } from "../types";

export const MOTD = `mahdinoorzadeh.github.io!

GitHub:  &nbsp;&nbsp;<a href="https://github.com/MahdiNoorzadeh" target="_blank" rel="noopener noreferrer">Click here To Visit My GitHub Profile</a>
LinkedIn: <a href="#" target="_blank" rel="noopener noreferrer">Not Available For now.</a>

Greetings, I'm <b>Mahdi Noorzadeh</b>. A <b>Back-end</b> Engineer with a specialization in Back-end development.
My expertise encompasses the creation of <b> scalable backend solutions</b> tailored for businesses worldwide./b>. 🥇

Type 'help' to see the available commands.`.replace(/\n/g, "<br/>");



  const TECH_STACK = `
<div class="tech-stack">

  <div class="tech-stack-category">
    <div class="tech-stack-title">LANGUAGES</div>

    <div class="tech-stack-items">
      <span class="tech-stack-item">
        <img
          src="https://www.readmecodegen.com/api/social-icon?name=java&size=40"
          alt="Java"
          class="tech-stack-icon"
        />
        <span class="tech-stack-name">Java</span>
      </span>

      <span class="tech-stack-item">
        <img
          src="https://www.readmecodegen.com/api/social-icon?name=kotlin&size=40"
          alt="Kotlin"
          class="tech-stack-icon"
        />
        <span class="tech-stack-name">Kotlin</span>
      </span>

      <span class="tech-stack-item">
        <img
          src="https://www.readmecodegen.com/api/social-icon?name=typescript&size=40"
          alt="TypeScript"
          class="tech-stack-icon"
        />
        <span class="tech-stack-name">TypeScript</span>
      </span>

      <span class="tech-stack-item">
        <img
          src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/csharp.svg"
          alt="Csharp"
          class="tech-stack-icon"
        />
        <span class="tech-stack-name">C#</span>
      </span>
    </div>
  </div>

  <div class="tech-stack-category">
  <div class="tech-stack-title">BACKEND</div>

  <div class="tech-stack-items">
    <span class="tech-stack-item">
      <img
        src="https://www.readmecodegen.com/api/social-icon?name=spring&size=40"
        alt="Spring Boot"
        class="tech-stack-icon"
      />
      <span class="tech-stack-name">Spring Boot</span>
    </span>

    <span class="tech-stack-item">
      <img
        src="https://www.readmecodegen.com/api/social-icon?name=nodejs&size=40"
        alt="Node.js"
        class="tech-stack-icon"
      />
      <span class="tech-stack-name">Node.js</span>
    </span>

    <span class="tech-stack-item">
      <img
        src="https://www.readmecodegen.com/api/social-icon?name=express&size=40"
        alt="Express.js"
        class="tech-stack-icon"
      />
      <span class="tech-stack-name">Express.js</span>
    </span>

    <span class="tech-stack-item">
      <img
        src="https://www.readmecodegen.com/api/social-icon?name=dotnet&size=40"
        alt=".NET"
        class="tech-stack-icon"
      />
      <span class="tech-stack-name">DotNet</span>
    </span>
  </div>
</div>

<div class="tech-stack-category">
  <div class="tech-stack-title">DATABASES</div>

  <div class="tech-stack-items">
    <span class="tech-stack-item">
      <img
        src="https://www.readmecodegen.com/api/social-icon?name=postgresql&size=40"
        alt="PostgreSQL"
        class="tech-stack-icon"
      />
      <span class="tech-stack-name">PostgreSQL</span>
    </span>

    <span class="tech-stack-item">
      <img
        src="https://www.readmecodegen.com/api/social-icon?name=mongodb&size=40"
        alt="MongoDB"
        class="tech-stack-icon"
      />
      <span class="tech-stack-name">MongoDB</span>
    </span>

    <span class="tech-stack-item">
      <img
        src="https://www.readmecodegen.com/api/social-icon?name=redis&size=40"
        alt="Redis"
        class="tech-stack-icon"
      />
      <span class="tech-stack-name">Redis</span>
    </span>
  </div>
</div>

<div class="tech-stack-category">
  <div class="tech-stack-title">INFRASTRUCTURE</div>

  <div class="tech-stack-items">
    <span class="tech-stack-item">
      <img
        src="https://www.readmecodegen.com/api/social-icon?name=docker&size=40"
        alt="Docker"
        class="tech-stack-icon"
      />
      <span class="tech-stack-name">Docker</span>
    </span>

    <span class="tech-stack-item">
      <img
        src="https://www.readmecodegen.com/api/social-icon?name=kubernetes&size=40"
        alt="Kubernetes"
        class="tech-stack-icon"
      />
      <span class="tech-stack-name">Kubernetes</span>
    </span>

    <span class="tech-stack-item">
      <img
        src="https://www.readmecodegen.com/api/social-icon?name=rabbitmq&size=40"
        alt="RabbitMQ"
        class="tech-stack-icon"
      />
      <span class="tech-stack-name">RabbitMQ</span>
    </span>

    <span class="tech-stack-item">
      <img
        src="https://www.readmecodegen.com/api/social-icon?name=git&size=40"
        alt="Git"
        class="tech-stack-icon"
      />
      <span class="tech-stack-name">Git</span>
    </span>
  </div>
</div>

</div>
`;

const PROJECTS = `
<div class="portfolio-section">

  <div class="portfolio-item">
    <div class="portfolio-title"> URL Shortener </div>
    <div class="portfolio-description">
      A REST API for managing short URLs with features like shortening, HTTP 302 redirects, expiration, click tracking, and analytics. 
      It uses Redis caching with the Cache-Aside pattern and PostgreSQL for reliable persistence and better performance.
    </div>
    <div class="portfolio-description-">
      Project Link : <a href="https://github.com/MahdiNoorzadeh/url-shortener"
      target="_blank"
      rel="noopener noreferrer"
        >github.com/MahdiNoorzadeh/url-shortener</a>
    </div>
    <div class="portfolio-tech">
      Java 25 · Spring Boot · PostgreSQL · Redis · Docker
    </div>
  </div>

  <div class="portfolio-item">
    <div class="portfolio-title">CipherVault</div>
    <div class="portfolio-description">
      A secure desktop application for managing API tokens across projects and environments, 
      protected by AES-256-GCM encryption with the key stored in the operating system's keyring.
    </div>
     <div class="portfolio-description-">
      Project Link : <a href="https://github.com/MahdiNoorzadeh/CipherVault"
      target="_blank"
      rel="noopener noreferrer"
      >github.com/MahdiNoorzadeh/CipherVault</a>
    </div>
    <div class="portfolio-tech">
      Electron · Vue.js 3 · JavaScript · Realm · AES-256-GCM
    </div>
  </div>

</div>
`;

const EXPERIENCE = `
<div class="portfolio-section">

  <div class="portfolio-item">
    <div class="portfolio-title">Back-end Intern — BaShomal</div>
    <div class="portfolio-meta">03/2025 — 06/2025 · Remote</div>
    <div class="portfolio-description">
      Developed REST APIs using Spring Boot and worked with PostgreSQL
      and Git in a backend development environment.
    </div>
  </div>

  <div class="portfolio-item">
    <div class="portfolio-title">Technical Support — Paybar</div>
    <div class="portfolio-meta">10/2024 — 01/2025 · Remote</div>
  </div>

  <div class="portfolio-item">
    <div class="portfolio-title">Product Support Specialist — Digikala</div>
    <div class="portfolio-meta">10/2025 — 11/2025 · Remote</div>
  </div>

</div>
`;

const EDUCATION = `
<div class="portfolio-section">

  <div class="portfolio-item">
    <div class="portfolio-title">
      Associate Degree in Computer Engineering — Software
    </div>
    <div class="portfolio-meta">
      Imam Khomeini Technical and Vocational College
    </div>
  </div>

</div>
`;

const NEOFETCH = `
<div class="neofetch">

  <div class="neofetch-logo">
    <img src="/Berserk-Logo-Photoroom.png" alt="Berserk Mark">
  </div>

  <div class="neofetch-info">
    <div><b>Name:</b> Mahdi Noorzadeh</div>
    <div><b>Role:</b> Backend Engineer</div>
    <div><b>OS:</b> Windows</div>
    <div><b>Location:</b> Earth - Iran (Change is absolute)</div>
    <div><b>Languages:</b> Persian, English, German</div>
  </div>

</div>
`;

const CONTACT = `
<div class="portfolio-section">
  <div class="portfolio-title">CONTACT</div>

  <div>
    GitHub:
    <a href="https://github.com/MahdiNoorzadeh"
       target="_blank"
       rel="noreferrer noopener">
      github.com/MahdiNoorzadeh
    </a>
  </div>

  <div>
    LinkedIn:
    <a href="#"
       target="_blank"
       rel="noreferrer noopener">
      Not Available For now.
    </a>
  </div>

  <div>
    Email:
    <a href="mailto:mahdinoorzadeh1@gmail.com">
      mahdinoorzadeh1@gmail.com
    </a>
  </div>
</div>
`;

const RESUME = `
<div class="portfolio-section">

  <div class="portfolio-item">
    <div class="portfolio-title">Resume</div>

    <div class="portfolio-description">
      Download my latest resume.
    </div>

    <div class="portfolio-description">
      <a
        href="/Mahdi-Noorzadeh-Resume.pdf"
        download="Mahdi-Noorzadeh-Resume.pdf"
      >
        Download Resume
      </a>
    </div>
  </div>

</div>
`;

const COMMANDS: Record<
  string,
  (username: string, args: string[], history: string[]) => string
> = {
  su: () => "",
  whoami: (username) => username,
  motd: () => MOTD,
  pwd: () => "/",
  date: () => new Date().toLocaleDateString(),
  github: () => openLink("https://github.com/MahdiNoorzadeh"),
  linkedin: () => "My LinkedIn is currently unavailable.",
  repo: () => openLink("https://github.com/MahdiNoorzadeh/MahdiNoorzadeh.github.io"),
  email: () => `Here's my email address.<br/><br/>${openLink("mailto:mahdinoorzadeh1@gmail.com")}`,
  resume: () => {
  downloadResume();
  return RESUME;
  },
  cat: () =>
    `Here's a cute cat for you! 🐱<br/><br/>${openLink("https://cataas.com/cat/cute")}`,
  techstack: () => TECH_STACK,
  projects: () => PROJECTS,
  experience: () => EXPERIENCE,
  education: () => EDUCATION,
  neofetch: () => NEOFETCH,
  contact: () => CONTACT,
  about: (username) => `Hello, ${username}!

    My name is Mahdi, and I am a <b>Back-end engineer</b> specializing in <b>Developing low-cost, high-performance backend solutions</b>. In addition to coding, I have a passion for the gaming industry and was a story writer at one point, a role I hope to return to someday.
    <br/><br/>
    I value teamwork and the importance of working effectively along side my colleagues, especially when it comes to <b>knowledge sharing and knowledge transfer</b>.
    <br/><br/>
    In my free time, I enjoy outdoor activities, spending time with loved ones, and sharing stories.`,
  echo: (_, args) => args.join("&nbsp;"),
  history: (_, __, history) => history.join("<br/>"),
};

export const COMMAND_NAMES = [...Object.keys(COMMANDS), "clear", "help"].sort(
  (a, z) => a.localeCompare(z)
);

export function getCommandResponse(
  { command, sudo, args }: Prompt,
  username: string,
  history: string[]
) {
  if (sudo && !command) return "Usage: sudo [command] [args]";
  if (!command) return "";

  if (command in COMMANDS) {
    let result = COMMANDS[command](username, args, history);
    if (command !== "terminal" && command !== "techstack") {
  result = result.replace(/\n/g, "");
}

    return result;
  }

  if (command === "help") {
    return `Usage: [command] [options] 
    
      ${COMMAND_NAMES.join(", ")}`.replace(/\n/g, "<br/>");
  }

  return `${command}: command not found`;
}

function openLink(url: string) {
  setTimeout(() => window.open(url, "_blank")?.focus(), 1000);

  return `Redirecting to <a href="${url}" target="_blank" rel="noreferrer noopener">${url}</a>...`;
}

function downloadResume() {
  const link = document.createElement("a");

  link.href = "/Mahdi-Noorzadeh-Resume.pdf";
  link.download = "Mahdi-Noorzadeh-Resume.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}