"use client";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="underline"></div>

        <p className="skills-desc">
          Full-Stack Engineer with 5+ years experience building scalable SaaS
          applications using modern web technologies.
        </p>

        <div className="skills-grid">
          {/* LEFT */}
          <div className="skill-item">
            <div className="skill-header">
              <span>React / Next.js</span>
              <span>95%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>TypeScript</span>
              <span>97%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "97%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>Node.js / Express</span>
              <span>95%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>REST APIs</span>
              <span>95%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>Java/Spring Boot</span>
              <span>85%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>Tailwind / UI Design</span>
              <span>90%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>MySQL / MongoDB</span>
              <span>95%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>MSSQL / PostgreSQL</span>
              <span>82%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "82%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>Docker</span>
              <span>90%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>CI/CD</span>
              <span>90%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>GitHub Actions</span>
              <span>95%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>OpenAI API</span>
              <span>88%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "88%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>Prompt Engineering</span>
              <span>98%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "98%" }}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}