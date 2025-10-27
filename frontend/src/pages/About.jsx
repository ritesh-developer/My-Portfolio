function About() {
  return (
    <div className="about-container">
      <section className="about-header fade-in">
        <h1>About Me</h1>
        <p className="about-intro">
          Software Engineer & DevOps Enthusiast | AI Integration Specialist
        </p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Objective</h2>
          <p>
            Passionate software engineer and DevOps enthusiast with experience in web development 
            using JavaScript, HTML, CSS, React, Python, and React-fast APIs for IoT at NIET College. 
            Skilled in cloud computing, FastAPI, AI integration, and security with a strong interest 
            in Zero Trust Cloud Security and scalable backend development.
          </p>
          
          <h2>Professional Experience</h2>
          <div className="experience-detail">
            <h3>FLAUNCH EMERGING TECH INTERNSHIP (GEN AI)</h3>
            <p className="duration">October 2024 - November 2024</p>
            <ul>
              <li>Gained practical experience with pre-trained models using Hugging Face and Google Colab</li>
              <li>Explored RAG (Retrieval-Augmented Generation) pipelines through API integration and model fine-tuning</li>
              <li>Developed hands-on knowledge of Generative AI concepts and real-world applications</li>
              <li>Worked with cutting-edge AI technologies and machine learning frameworks</li>
            </ul>
          </div>

          <h2>Technical Expertise</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Languages</h3>
              <p>C, C++, Python, Java, JavaScript</p>
            </div>
            
            <div className="tech-category">
              <h3>Frameworks</h3>
              <p>Node.js, Express.js, React.js, Mongoose, Tailwind CSS, Django, FastAPI</p>
            </div>
            
            <div className="tech-category">
              <h3>Cloud Technologies</h3>
              <p>Google Cloud Platform (GCP), Microsoft Azure, AWS</p>
            </div>
            
            <div className="tech-category">
              <h3>DevOps Tools</h3>
              <p>Git, Docker, CI/CD (GitHub Actions), Linux</p>
            </div>
            
            <div className="tech-category">
              <h3>AI & ML Tools</h3>
              <p>Google Vertex AI, NLP, Standard ML Algorithms, Hugging Face, Google Colab</p>
            </div>
            
            <div className="tech-category">
              <h3>APIs & Microservices</h3>
              <p>RESTful API design, Postman, Insomnia</p>
            </div>
            
            <div className="tech-category">
              <h3>Databases</h3>
              <p>MongoDB, SQL, PostgreSQL, SQLAlchemy for Python, Prisma</p>
            </div>
            
            <div className="tech-category">
              <h3>Mobile & Android Development</h3>
              <p>Android Studio, Gradle (Build Automation for Android)</p>
            </div>
          </div>

          <h2>Education</h2>
          <div className="education-detail">
            <h3>Bachelor of Technology in Computer Science and Engineering</h3>
            <p className="institution">Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow</p>
            <p className="location"></p>
            <p className="duration">2023 - 2026</p>
          </div>
          
          <div className="education-detail">
            <h3>Diploma in Computer Science</h3>
            <p className="duration">2019 - 2022</p>
          </div>

          <h2>Relevant Coursework</h2>
          <p>
            Data Structures & Algorithms, Operating Systems, Machine Learning, Software Engineering, 
            Cloud & Edge Computing, Database Management Systems, Web Engineering and Object-Oriented Programming
          </p>

          <h2>Certifications</h2>
          <ul className="certifications-list">
            <li>
              <strong>Python for Data Science, AI & Development</strong> - IBM
            </li>
            <li>
              <strong>Zero Trust Certified Associate (ZTCA)</strong> - Zscaler
            </li>
          </ul>

          <h2>Let's Connect</h2>
          <p>
            I'm always interested in hearing about new projects and opportunities, 
            especially in cloud computing, AI integration, and full-stack development.
            Feel free to reach out through my contact form!
          </p>
          
          <div className="contact-links">
            <a href="mailto:riteshraj.developer@gmail.com" className="contact-btn">
              📧 Email Me
            </a>
            <a href="https://www.linkedin.com/in/ritesh8/" target="_blank" rel="noopener noreferrer" className="contact-btn">
              💼 LinkedIn
            </a>
            <a href="https://github.com/ritesh-developer" target="_blank" rel="noopener noreferrer" className="contact-btn">
              💻 GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
