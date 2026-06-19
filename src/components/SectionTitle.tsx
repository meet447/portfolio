interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className = "" }: SectionTitleProps) => (
  <div className={`mb-8 sm:mb-10 ${className}`}>
    <h2 className="text-section-pixel">{title}</h2>
    {subtitle && <p className="text-section-sub">{subtitle}</p>}
  </div>
);

export default SectionTitle;
