interface ContactBadgeProps {
  email: string;
}

export function ContactBadge({ email }: ContactBadgeProps) {
  return (
    <div className="contact-badge">
      <svg className="contact-badge-ring" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path id="contactBadgePath" d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0" />
        </defs>
        <text fontSize="14" fontWeight="700" letterSpacing="2.4">
          <textPath href="#contactBadgePath">
            OCUBE · PROJECT INQUIRY · OCUBE · PROJECT INQUIRY ·
          </textPath>
        </text>
      </svg>

      <a href={`mailto:${email}`} className="contact-badge-core" aria-label="문의하기">
        <svg viewBox="0 0 19 17" width="19" height="17" aria-hidden="true">
          <path
            d="M10.7 1 17.7 8.3 10.7 15.6M17.7 8.3H1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
