import Link from "next/link";
import { ContactBadge } from "@/components/layout/footer/contact-badge";
import { ContactCompanyInfo } from "@/components/layout/footer/contact-company-info";
import { contactContent } from "@/data/contact";

export function SiteFooter() {
  const mailHref = `mailto:${contactContent.email}`;
  const phoneHref = `tel:${contactContent.phone.replaceAll("-", "")}`;

  return (
    <footer className="contact" id="contact">
      <div className="contact-inner">
        <div className="contact-shell">
          <div className="contact-top">
            <div className="contact-copy">
              <p className="section-label">{contactContent.eyebrow}</p>
              <h2>{contactContent.title}</h2>
              <p className="contact-description">{contactContent.description}</p>
              <a className="contact-button" href={mailHref}>
                문의하기
              </a>
            </div>
            <ContactBadge email={contactContent.email} />
          </div>

          <ContactCompanyInfo />

          <div className="contact-legal">
            <span>Copyright © OCUBE Co., Ltd. All rights reserved.</span>
            <span>
              대표이사 {contactContent.representative} · 사업자등록번호{" "}
              {contactContent.businessNumber}
            </span>
            <a href={phoneHref}>{contactContent.phone}</a>
            <a href={mailHref}>{contactContent.email}</a>
            <Link href="/privacy.html">개인정보처리방침</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
