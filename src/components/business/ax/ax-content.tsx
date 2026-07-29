import { BusinessApplications } from "@/components/business/business-applications";
import { BusinessProcess } from "@/components/business/business-process";
import { AxCases } from "@/components/business/ax/ax-cases";
import { AxClients } from "@/components/business/ax/ax-clients";
import type { BusinessPageData } from "@/types/business";

export function AxContent({ data }: { data: BusinessPageData }) {
  return (
    <div className="business-content">
      {data.clients && <AxClients clients={data.clients} />}
      {data.steps && <BusinessProcess steps={data.steps} />}
      {data.areas && <BusinessApplications areas={data.areas} />}
      {data.cases && <AxCases cases={data.cases} />}
    </div>
  );
}
