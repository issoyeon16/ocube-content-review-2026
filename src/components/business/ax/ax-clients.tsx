"use client";

import Image from "next/image";
import { useState } from "react";
import type { BusinessClient } from "@/types/business";

export function AxClients({ clients }: { clients: readonly BusinessClient[] }) {
  const [paused, setPaused] = useState(false);
  return (
    <section
      className={`ax-clients${paused ? " is-paused" : ""}`}
      aria-label="AI 전환 파트너 및 고객사"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="business-wrap ax-clients-head">
        <span>PARTNERS &amp; CLIENTS</span>
        <p>산업 파트너와 함께 데이터 진단·모델 검증·현장 적용 프로젝트를 수행해왔습니다.</p>
      </div>
      <div className="ax-clients-marquee">
        <div className="ax-clients-track">
          {Array.from({ length: 4 }, (_, group) =>
            clients.map((client) => (
              <div
                className="ax-client-logo"
                key={`${group}-${client.name}`}
                aria-hidden={group > 0 || undefined}
              >
                <Image
                  src={client.logo}
                  alt={group === 0 ? client.name : ""}
                  width={280}
                  height={90}
                />
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
