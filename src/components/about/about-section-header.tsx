type AboutSectionHeaderProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

export function AboutSectionHeader({
  eyebrow,
  title,
  align = "left",
  className,
}: AboutSectionHeaderProps) {
  const classes = ["about-section-head", align === "center" ? "is-centered" : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
