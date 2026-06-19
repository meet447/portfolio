import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { name: "Github", href: "https://github.com/meet447", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/meet-sonawane/", icon: Linkedin },
  { name: "Email", href: "mailto:meetsonawane3@gmail.com", icon: Mail },
];

const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap gap-3 ${className}`}>
    {socials.map(({ name, href, icon: Icon }) => (
      <a
        key={name}
        href={href}
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className="social-btn"
      >
        <Icon size={16} />
        {name}
      </a>
    ))}
  </div>
);

export default SocialLinks;
