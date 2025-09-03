const About = () => {
  return (
    <section id="about" className="container-resume section-spacing">
      <h2 className="text-section-title"># ABOUT ME</h2>
      
      <div className="space-y-6">
        <div className="text-body">
          <p className="mb-4">
            I'm a passionate Full Stack Software Engineer with over 2 years of experience building scalable web applications and backend systems. I specialize in Python, React, and cloud architecture, with a strong focus on creating efficient, maintainable solutions.
          </p>
          
          <p className="mb-4">
            My journey in software development has taken me through various domains, from Web Scrapping and Saas to AI-powered chatbots and data analytics platforms. I enjoy tackling complex technical challenges and have a particular interest in microservices architecture, API design, and performance optimization.
          </p>
          
          <p>
            When I'm not coding, you'll find me exploring the latest technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in writing clean, well-documented code and following best practices to deliver robust software solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <div>
            <h3 className="text-job-title mb-3">What I Do</h3>
            <ul className="space-y-2">
              <li className="text-body flex">
                <span className="text-muted-foreground mr-3 flex-shrink-0">•</span>
                <span>Full-stack web application development</span>
              </li>
              <li className="text-body flex">
                <span className="text-muted-foreground mr-3 flex-shrink-0">•</span>
                <span>Backend API design and microservices</span>
              </li>
              <li className="text-body flex">
                <span className="text-muted-foreground mr-3 flex-shrink-0">•</span>
                <span>Cloud infrastructure and DevOps</span>
              </li>
              <li className="text-body flex">
                <span className="text-muted-foreground mr-3 flex-shrink-0">•</span>
                <span>Database design and optimization</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-job-title mb-3">Interests</h3>
            <ul className="space-y-2">
              <li className="text-body flex">
                <span className="text-muted-foreground mr-3 flex-shrink-0">•</span>
                <span>Artificial Intelligence & Machine Learning</span>
              </li>
              <li className="text-body flex">
                <span className="text-muted-foreground mr-3 flex-shrink-0">•</span>
                <span>Open-source contributions</span>
              </li>
              <li className="text-body flex">
                <span className="text-muted-foreground mr-3 flex-shrink-0">•</span>
                <span>System architecture & scalability</span>
              </li>
              <li className="text-body flex">
                <span className="text-muted-foreground mr-3 flex-shrink-0">•</span>
                <span>Developer tools & productivity</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;