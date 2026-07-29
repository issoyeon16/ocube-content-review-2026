import Image from "next/image";
import Link from "next/link";
import { contactNavigation, officeAddresses } from "@/data/contact";

export function ContactCompanyInfo() {
  return (
    <div className="contact-info">
      <div className="contact-company">
        <Image
          className="contact-company-logo-default"
          src="/ocube-content-review-2026/assets/images/brand/ocube-logo-korean.png"
          alt="오큐브(주) | OCUBE CO., LTD."
          width={672}
          height={70}
        />
        <div className="contact-company-brand-home" aria-label="OCUBE CO., LTD.">
          <Image src="/ocube-content-review-2026/assets/icons/ocube-logo.svg" alt="OCUBE" width={120} height={40} />
          <span>OCUBE CO.,LTD.</span>
        </div>
        <dl>
          {officeAddresses.map((office) => (
            <div key={office.label}>
              <dt>{office.label}</dt>
              <dd>{office.address}</dd>
            </div>
          ))}
        </dl>
      </div>

      <nav className="contact-links" aria-label="하단 메뉴">
        {contactNavigation.map((group) => (
          <div key={group.title}>
            <p>{group.title}</p>
            {group.links.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
}
