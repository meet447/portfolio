import { Trophy } from "lucide-react";

const Achievements = () => {
    const achievements = [
        {
            title: "Smart India Hackathon Winner",
            organization: "Govt of India",
            date: "Dec 2024",
            description: [
                "Devloped a software for madhyapradesh police for identifying the actual host of a website or domain",
                "Created and implented an solution for detcting the true host ip even if the site is protected by CDNs or security services.",
                "Our software stood out for its ability to uncover the true origin host, showcasing technical sophistication and real-world applications in cybersecurity"
            ]
        }
    ];

    return (
        <section className="container-resume section-spacing">
            <h2 className="text-section-title"># ACHIEVEMENTS & AWARDS</h2>

            <div className="grid gap-6">
                {achievements.map((item, index) => (
                    <div key={index} className="group border border-border rounded-lg p-6 hover:bg-muted/30 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 p-2 bg-accent/10 rounded-full text-accent">
                                    <Trophy size={20} />
                                </div>
                                <div>
                                    <h3 className="text-job-title">{item.title}</h3>
                                    <p className="text-company">{item.organization}</p>
                                </div>
                            </div>
                            <div className="text-date mt-2 sm:mt-0 pl-11 sm:pl-0">
                                {item.date}
                            </div>
                        </div>

                        <ul className="space-y-2 pl-11">
                            {item.description.map((desc, idx) => (
                                <li key={idx} className="text-body flex">
                                    <span className="text-muted-foreground mr-3 flex-shrink-0">•</span>
                                    <span>{desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
