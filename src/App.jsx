import "./App.css";

function App() {
  const skills = [
    "Splunk",
    "Wazuh",
    "Wireshark",
    "Nmap",
    "Nessus",
    "MITRE ATT&CK",
    "SIEM",
    "Incident Response",
    "Threat Intelligence",
    "Python",
    "SQL",
    "Linux",
  ];

  const projects = [
    {
      icon: "🌐",
      title: "Network Security Monitoring",
      description:
        "Performed network reconnaissance and traffic analysis using Nmap and Wireshark to identify open ports, services, and suspicious network activity.",
      tools: ["Nmap", "Wireshark", "TCP/IP"],
    },
    {
      icon: "🛡️",
      title: "SOC Home Lab",
      description:
        "Built a security monitoring lab to analyze logs, investigate alerts, and understand real-world SOC workflows.",
      tools: ["Wazuh", "Splunk", "Sysmon"],
    },
    {
      icon: "🔒",
      title: "Vulnerability Assessment",
      description:
        "Performed vulnerability scanning and risk assessment to identify security weaknesses and recommend remediation.",
      tools: ["Nessus", "OpenVAS", "CVSS"],
    },
    {
      icon: "💻",
      title: "PulseBoard-RAG",
      description:
        "Developed an AI-powered system that collects data from multiple APIs, classifies urgency, and generates intelligent insights using RAG.",
      tools: ["Python", "APIs", "ChromaDB"],
    },
  ];

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          AVNI<span>.SEC</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-content">

          <p className="intro">HELLO, I'M</p>

          <h1>
            Avni <span>Gupta</span>
          </h1>

          <h2>SOC Analyst | Cybersecurity Enthusiast</h2>

          <p className="hero-description">
            Passionate about cybersecurity, threat detection, security
            monitoring, and incident response. I enjoy analyzing security
            events and building practical security solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work →
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Avni260504"
              target="_blank"
              rel="noreferrer"
            >
              💻 GitHub
            </a>

            <a href="#">
              💼 LinkedIn
            </a>

            <a href="mailto:your-email@example.com">
              ✉ Email
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="security-card">

            <div className="big-icon">🛡️</div>

            <p>Security Operations Center</p>

            <div className="terminal">
              <span>$ monitoring_security...</span>
              <span>✓ Logs Analyzed</span>
              <span>✓ Threats Detected</span>
              <span>✓ Systems Secured</span>
            </div>

          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">

        <div className="section-title">
          <span>01.</span>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-icon">
            🛡️
          </div>

          <div>
            <p>
              I am a cybersecurity enthusiast and SOC Analyst with an academic
              background in Artificial Intelligence and Machine Learning.
            </p>

            <p>
              My interests include security monitoring, log analysis, threat
              detection, vulnerability assessment, and incident response. I am
              continuously developing practical skills through hands-on labs
              and cybersecurity projects.
            </p>

            <div className="stats">

              <div>
                <strong>SIEM</strong>
                <span>Monitoring</span>
              </div>

              <div>
                <strong>SOC</strong>
                <span>Analysis</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Learning</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section dark-section">

        <div className="section-title">
          <span>02.</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="section-title">
          <span>03.</span>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-icon">
                {project.icon}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tools">
                {project.tools.map((tool, i) => (
                  <span key={i}>{tool}</span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section dark-section">

        <div className="section-title">
          <span>04.</span>
          <h2>Experience</h2>
        </div>

        <div className="experience-card">

          <div className="experience-icon">💼</div>

          <div>
            <h3>SOC Analyst</h3>

            <h4>Seccure Operations & AI Pvt. Ltd.</h4>

            <p className="date">
              June 2026 – Present | Greater Noida
            </p>

            <ul>
              <li>
                Monitored and analyzed security alerts and logs using SIEM platforms.
              </li>

              <li>
                Investigated suspicious activities using threat intelligence and endpoint telemetry.
              </li>

              <li>
                Performed alert triage, log analysis, and incident documentation.
              </li>

              <li>
                Supported security monitoring and incident response operations.
              </li>
            </ul>

          </div>
        </div>

      </section>

      {/* EDUCATION */}
      <section className="section">

        <div className="section-title">
          <span>05.</span>
          <h2>Education</h2>
        </div>

        <div className="education-card">

          <div className="education-icon">🎓</div>

          <div>
            <h3>
              B.Tech in Artificial Intelligence & Machine Learning
            </h3>

            <p>
              Lloyd Institute of Engineering & Technology, Greater Noida
            </p>

            <span>2022 – 2026</span>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <p>06. WHAT'S NEXT?</p>

        <h2>Let's Connect</h2>

        <p>
          I'm always open to discussing cybersecurity, SOC opportunities,
          security projects, and collaborations.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="primary-btn"
        >
          Say Hello ✉
        </a>

      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Avni Gupta | Built with React</p>
      </footer>

    </div>
  );
}

export default App;