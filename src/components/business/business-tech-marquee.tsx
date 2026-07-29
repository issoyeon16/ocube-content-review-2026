const technologies = ["Qt", "Telit Cinterion", "Toradex", "VisualOn", "Tuxera", "ProtoPie"];

export function BusinessTechMarquee() {
  return (
    <section className="embedded-tech">
      <div className="business-wrap">
        <p>Global Tech</p>
        <div className="embedded-tech-window">
          <div>
            {[...technologies, ...technologies].map((technology, index) => (
              <span
                key={`${technology}-${index}`}
                aria-hidden={index >= technologies.length || undefined}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
        <small>
          글로벌 기술을 프로젝트에 맞게 선정하고, 국내 공급·통합·엔지니어링 지원까지 수행합니다.
        </small>
      </div>
    </section>
  );
}
