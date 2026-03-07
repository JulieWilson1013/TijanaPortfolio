"use client";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <h2 className="section-title">Resume</h2>
        <div className="underline"></div>

        <p className="resume-desc">
          Senior Full-Stack Engineer with 5+ years of experience building scalable
          web applications and SaaS platforms using modern technologies.
        </p>

        <div className="resume-grid">

          {/* LEFT COLUMN */}
          <div className="resume-left">
            <h2 className="resume-subtitle">Summary</h2>

            <div className="resume-item">
              <h3>Tijana Petrovic</h3>
              <p style = {{marginTop: '7px'}}>
                Designing and scaling SaaS applications using
                React, Node.js, and AWS. Strong focus on backend architecture, API design, and performance
                optimization, improving system efficiency by 35–40% across production environments. Experienced in
                AI-powered workflow automation, delivering reliable systems that scale.
              </p>
              <ul>
                <li>Lazarevac 11550 Belgrade, Serbia</li>
                <li>t.petrovic99595@gmail.com</li>
              </ul>
            </div>


            <h2 className="resume-subtitle">Education</h2>

            <div className="resume-item">
              <h3>BSc Computer Science</h3>
              <span className="resume-date">Alfa BK University | 2017</span>
              <p>
                Strong foundation in algorithms, data structures, software architecture,
                and database systems.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="resume-right">

            <h2 className="resume-subtitle">Professional Experience</h2>

            <div className="resume-item">
              <h3>Full Stack Engineer – Independent Contractor</h3>
              <span className="resume-date">Remote · 2022 - Present</span>
              <ul>
                <li>Designed and scaled SaaS platforms serving 10K+ active users</li>
                <li>Owned backend architecture and REST API design</li>
                <li>Reduced API response times by 35–40% through database indexing and backend refactoring</li>
                <li>Built services handling 50K+ monthly requests</li>
                <li>Integrated OpenAI APIs to automate support workflows and chatbot functionality</li>
                <li>Managed AWS infrastructure with 99%+ uptime</li>
                <li>Implemented Docker-based deployments and CI/CD pipelines</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3>Full Stack Developer – Software Development Projects</h3>
              <span className="resume-date">2019 - 2022</span>
              <ul>
                <li>Delivered 8+ full-stack web applications including dashboards and SaaS platforms</li>
                <li>Designed scalable MongoDB schemas for high-volume systems</li>
                <li>Improved frontend performance and reduced unnecessary re-renders</li>
                <li>Contributed to Agile sprint planning and code reviewe</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3>Junior Frontend Developer – Web Applications Team</h3>
              <span className="resume-date">2018 - 2019</span>
              <ul>
                <li>Built responsive React components for production web applications</li>
                <li>Translated UI/UX designs into functional interfaces</li>
                <li>Resolved UI bugs and improved cross-browser compatibility</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}