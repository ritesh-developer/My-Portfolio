function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SmartNotes - AI Summarizer',
      subtitle: 'AI-Powered Note-Taking Application',
      duration: '2024',
      description: 'Engineered an AI-powered note-taking application using React, TypeScript, and Google Cloud Vertex AI for intelligent text summarization. Built a modern, responsive UI with Tailwind CSS and Framer Motion, integrated with Supabase backend for seamless data management.',
      tech: ['Tailwind CSS', 'React', 'TypeScript', 'Google Vertex AI', 'Framer Motion', 'Supabase'],
      link: '',
      githubLink: '',
      highlights: [
        'AI-powered text summarization using Google Vertex AI',
        'Modern UI with Tailwind CSS and Framer Motion animations',
        'Real-time data synchronization with Supabase',
        'Responsive design for all device sizes',
        'TypeScript for type-safe development'
      ]
    },
    {
      id: 2,
      title: 'EtchASketch',
      subtitle: 'Interactive Drawing Application',
      duration: '2024',
      description: 'Implemented dynamic drawing features with color picker, size customization, and real-time user interactions using modern JavaScript. Created a responsive, cross-browser compatible drawing application with intuitive UI/UX design and smooth animations.',
      tech: ['HTML5', 'CSS3', 'Flexbox', 'JavaScript', 'Canvas API'],
      link: '',
      githubLink: '',
      highlights: [
        'Dynamic drawing with HTML5 Canvas API',
        'Color picker and brush size customization',
        'Real-time user interactions',
        'Responsive and cross-browser compatible',
        'Smooth animations and intuitive UI/UX'
      ]
    }
  ];

  return (
    <div className="projects-container">
      <section className="projects-header fade-in">
        <h1>My Projects</h1>
        <p className="projects-intro">
          A showcase of my technical projects and development work
        </p>
      </section>

      <section className="projects-content">
        {projects.map((project) => (
          <div key={project.id} className="project-detail">
            <h2>
              {project.title}
              <span className="project-duration">{project.duration}</span>
            </h2>
            
            {project.subtitle && (
              <p className="project-subtitle">{project.subtitle}</p>
            )}
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-highlights">
              <h3>Key Features</h3>
              <ul>
                {project.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="project-tech">
              <h3>Technologies Used</h3>
              <div className="tech-tags">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            {(project.link || project.githubLink) && (
              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                    🌐 Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn">
                    💻 View Code
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;
