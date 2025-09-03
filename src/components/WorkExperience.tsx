const WorkExperience = () => {
  const experiences = [
    {
      title: "Smart India Hackathon Winner",
      company: "",
      location: "Madhyapradesh, India",
      period: "Jul 2021 - Dec 2021",
      duration: "6 months",
      progress: 70,
      responsibilities: [
        "Devloped a software for madhyapradesh police for identifying the actual host of a website or domain",
        "Created and implented an solution for detcting the true host ip even if the site is protected by CDNs or security services.",
        "Our software stood out for its ability to uncover the true origin host, showcasing technical sophistication and real-world applications in cybersecurity"
      ]
    },
    {
      title: "Techinical Head",
      company: "E-CELL BVCOE",
      location: "Bharati Vidya College of Engineering",
      period: "Sept 2024 - Jan 2025",
      duration: "5 months",
      progress: 100,
      responsibilities: [
        "Lead and manage the technical team for the entrepreneurship cell, ensuring smooth execution of technical operations.",
        "Organized multiple events, workshops and initiatives to foster skills and innovation among students."
      ]
    }
  ];

  return (
    <section className="container-resume section-spacing">
      <h2 className="text-section-title"># WORK EXPERIENCE</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="job-spacing border-l-2 border-accent/20 pl-6 relative">
            {/* Progress indicator */}
            <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full border-2 border-background"></div>
            
            {/* Job Header */}
            <div className="flex flex-col mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-job-title">{exp.title}</h3>
                  <p className="text-company">
                    {exp.company} <span className="text-muted-foreground">({exp.location})</span>
                  </p>
                </div>
                <div className="text-date mt-2 sm:mt-0">
                  {exp.period}
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-3">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="text-body flex">
                  <span className="text-muted-foreground mr-3 flex-shrink-0">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;