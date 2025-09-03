const Education = () => {
  return (
    <section className="container-resume section-spacing">
      <h2 className="text-section-title"># EDUCATION</h2>
      
      <div className="job-spacing">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-job-title">Bachelor of Engineering in Electronics & Telecommunication</h3>
            <p className="text-company">
              Bharati Vidyapeeth College of Engineering <span className="text-muted-foreground">(Navi Mumbai, Maharashtra)</span>
            </p>
          </div>
          <div className="text-date mt-1 sm:mt-0">
            2023 - 2027
          </div>
        </div>

        <ul className="space-y-2">
          <li className="text-body flex">
            <span className="text-muted-foreground mr-3 flex-shrink-0">•</span>
            <span>Relevant Coursework: Data Structures & Algorithms, Database Management Sysytem, Microcontrollers, Digital System Design, Linux, Digital Cryptography</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;