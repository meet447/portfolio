import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, User, FolderKanban, FileText } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "/#about", icon: User, match: ["/"] },
  { label: "Projects", href: "/projects", icon: FolderKanban, match: ["/projects"] },
  { label: "Notes", href: "/blog", icon: FileText, match: ["/blog"] },
];

const NavBar = () => {
  const location = useLocation();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isActive = (item: typeof navItems[0]) => {
    if (item.match.some((m) => location.pathname.startsWith(m) && m !== "/")) {
      return true;
    }
    if (item.label === "About" && location.pathname === "/") {
      return !location.hash || location.hash === "#about";
    }
    return false;
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#") && location.pathname === "/") {
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="nav-pill">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item);
          const isAnchor = item.href.startsWith("/#");

          if (isAnchor && location.pathname === "/") {
            return (
              <a
                key={item.label}
                href={item.href.replace("/", "")}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`nav-link ${active ? "nav-link-active" : ""}`}
              >
                <Icon size={13} />
                {item.label}
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              to={isAnchor ? "/" : item.href}
              onClick={() => {
                if (isAnchor) {
                  setTimeout(() => handleNavClick(item.href), 100);
                }
              }}
              className={`nav-link ${active ? "nav-link-active" : ""}`}
            >
              <Icon size={13} />
              {item.label}
            </Link>
          );
        })}

        <div className="ml-1 pl-1 border-l border-border/60">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="nav-link p-2"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
