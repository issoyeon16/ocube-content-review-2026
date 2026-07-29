import Image from "next/image";
import Link from "next/link";
import type { BusinessCard } from "@/types/business";

const categories = ["ROBOT MANUFACTURING", "PROCESS OPTIMIZATION", "AUTONOMOUS OPERATION"];

export function AxCases({ cases }: { cases: readonly BusinessCard[] }) {
  return (
    <section className="ax-cases" id="projects">
      <div className="ax-cases-head">
        <span>BUILD CASES</span>
        <h2>대표 프로젝트</h2>
        <p>데이터를 어떤 판단과 운영 개선으로 연결했는지 대표 프로젝트로 확인할 수 있습니다.</p>
      </div>
      <div className="business-wrap">
        <div className="ax-case-grid">
          {cases.map((item, index) => (
            <article className="ax-case-card" key={item.title}>
              {item.image && (
                <div className="ax-case-image">
                  <Image
                    src={item.image}
                    alt={`${item.title} 화면 예시`}
                    fill
                    sizes="(max-width: 1000px) 88vw, 30vw"
                  />
                </div>
              )}
              <span>{categories[index]}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.meta && (
                <ul>
                  {item.meta.map((value) => (
                    <li key={value}>
                      <i aria-hidden="true">✓</i>
                      {value}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
      <Link className="ax-cases-more" href="/#business">
        전체 구축 사례 보기 <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
