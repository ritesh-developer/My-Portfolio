import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Ritesh Kumar  ';
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const skills = [
    { category: 'Languages', items: ['C', 'C++', 'python', 'Java', 'JavaScript'] },
    { category: 'Frontend', items: ['React.js', 'Tailwind CSS', 'Django', 'FastAPI'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'RESTful APIs'] },
    { category: 'Databases', items: ['MongoDB', 'SQL', 'PostgreSQL', 'SQLAlchemy'] },
    { category: 'Cloud & DevOps', items: ['GCP', 'Azure', 'AWS', 'Docker', 'CI/CD'] },
    { category: 'AI & ML', items: ['Google Vertex AI', 'NLP', 'ML Algorithms', 'Hugging Face'] },
  ];

  return (
    <div className="home-container">
      <section className={`hero ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-content">
          <div className="greeting">Hello, I'm</div>
          <h1 className="hero-title">
            <span className="highlight typing-animation">{displayText}</span>
          </h1>
          <p className="hero-subtitle">
            Software Engineer & DevOps Enthusiast
          </p>
          <p className="hero-description">
            Passionate about building modern web applications using JavaScript, HTML, CSS, 
            React, Python, and React-fast APIs. Skilled in cloud computing, FastAPI, AI integration, 
            and security with expertise in IoT and scalable backend development.
          </p>
          
          <div className="contact-info">
            <a href="mailto:riteshraj.developer@gmail.com" className="contact-link">
              <span className="icon">✉</span> riteshraj.developer@gmail.com
            </a>
            <a href="tel:+919060025222" className="contact-link">
              <span className="icon">📞</span> +91 9060025222
            </a>
            <a href="https://www.linkedin.com/in/ritesh8/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">💼</span> LinkedIn
            </a>
            <a href="https://github.com/ritesh-developer" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="icon">💻</span> GitHub
            </a>
          </div>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary pulse-animation">
              View My Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-card slide-in">
          <div className="experience-header">
            <div>
              <h3>FLAUNCH EMERGING TECH INTERNSHIP (GEN AI)</h3>
              <p className="company">AI & Machine Learning Internship</p>
            </div>
            <div className="experience-date">10/2024 - 11/2024</div>
          </div>
          <ul className="experience-details">
            <li>Gained practical experience with pre-trained models using Hugging Face and Google Colab</li>
            <li>Explored RAG pipelines through API integration and model fine-tuning</li>
            <li>Developed hands-on knowledge of Generative AI concepts and real-world applications</li>
          </ul>
        </div>
      </section>

      <section className="skills">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-item slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3>{skill.category}</h3>
              <div className="skill-tags">
                {skill.items.map((item, i) => (
                  <span key={i} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          <div className="education-card slide-in">
            <h3>Bachelor of Technology in Computer Science and Engineering</h3>
            <p className="institution">Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow</p>
            <p className="location"></p>
            <p className="date">2023 - 2026</p>
          </div>
          <div className="education-card slide-in" style={{ animationDelay: '0.5s' }}>
            <h3>Diploma in Computer Science</h3>
            <p className="date">2019 - 2022</p>
          </div>
        </div>
      </section>

      <section className="certificates-section">
        <h2 className="section-title">Certifications</h2>
        <div className="certificates-grid">
          <div className="certificate-card">
            <h3>Python for Data Science, AI & Development</h3>
            <p className="issuer">IBM</p>
          </div>
          <div className="certificate-card">
            <h3>Zero Trust Certified Associate (ZTCA)</h3>
            <p className="issuer">Zscaler</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
