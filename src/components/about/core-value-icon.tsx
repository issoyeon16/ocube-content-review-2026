type CoreValueIconProps = {
  type: "challenge" | "passion" | "customer";
};

export function CoreValueIcon({ type }: CoreValueIconProps) {
  if (type === "challenge") {
    return (
      <svg viewBox="0 0 96 96" fill="none" aria-hidden="true">
        <path d="M48 14v34" stroke="#0075de" strokeWidth="3" strokeLinecap="round" />
        <path d="M48 15h19l-5 7 5 7H48z" fill="#0075de" />
        <circle cx="23" cy="45" r="7" stroke="#141414" strokeWidth="3" />
        <circle cx="73" cy="45" r="7" stroke="#141414" strokeWidth="3" />
        <path
          d="M12 84V68a11 11 0 0 1 11-11 11 11 0 0 1 11 11v16M62 84V68a11 11 0 0 1 11-11 11 11 0 0 1 11 11v16"
          stroke="#141414"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M34 60l14-8 14 8"
          stroke="#141414"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48 62v9"
          stroke="#0075de"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="2 6"
        />
      </svg>
    );
  }

  if (type === "passion") {
    return (
      <svg viewBox="0 0 96 96" fill="none" aria-hidden="true">
        <path
          d="M48 8c9 12 14 20 14 28a14 14 0 0 1-28 0c0-4 1.5-7.5 4-11 1 4 3.5 6 6.5 6.5C42 26 44 16 48 8Z"
          stroke="#0075de"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M30 58h26a6 6 0 0 1 0 12H40"
          stroke="#141414"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 52h22a6 6 0 0 1 0 12H30"
          stroke="#141414"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 64h20a6 6 0 0 1 0 12H26a10 10 0 0 1-10-10V54"
          stroke="#141414"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true">
      <circle cx="48" cy="30" r="9" stroke="#0075de" strokeWidth="3" />
      <circle cx="31" cy="36" r="7" stroke="#0075de" strokeWidth="3" />
      <circle cx="65" cy="36" r="7" stroke="#0075de" strokeWidth="3" />
      <path d="M34 55a14 14 0 0 1 28 0" stroke="#0075de" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M14 84V64a7 7 0 0 1 12-5l10 10"
        stroke="#141414"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M82 84V64a7 7 0 0 0-12-5l-10 10"
        stroke="#141414"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
