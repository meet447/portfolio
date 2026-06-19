import SectionTitle from "./SectionTitle";

const Education = () => {
  return (
    <section className="container-site section-spacing">
      <div className="content-column">
        <SectionTitle title="Education" />

        <div className="relative pl-7">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-border" aria-hidden />
          <div className="absolute left-[4px] top-1.5 h-2.5 w-2.5 rounded-full bg-muted-foreground ring-4 ring-background" aria-hidden />

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-display text-base font-semibold">
                Bachelor of Engineering in Electronics & Telecommunication
              </h3>
              <p className="text-sm font-mono text-muted-foreground mt-1">
                Bharati Vidyapeeth College of Engineering
              </p>
              <p className="text-xs font-mono text-muted-foreground/70 mt-0.5">
                Navi Mumbai, Maharashtra
              </p>
            </div>
            <p className="text-xs font-mono text-muted-foreground shrink-0">2023 - 2027</p>
          </div>

          <p className="text-body-prose">
            Relevant Coursework: Data Structures & Algorithms, Database Management System, Microcontrollers, Digital System Design, Linux, Digital Cryptography
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
