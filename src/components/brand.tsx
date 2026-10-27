export function WeddingMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path d="M32 10c-3 8-3 12 0 17 3-5 3-9 0-17Z" fill="currentColor" />
      <path
        d="M54 32c-8-3-12-3-17 0 5 3 9 3 17 0ZM32 54c3-8 3-12 0-17-3 5-3 9 0 17ZM10 32c8 3 12 3 17 0-5-3-9-3-17 0Z"
        fill="currentColor"
      />
      <path
        d="M47.6 16.4c-7.8 2.3-11 4.8-12.5 10.5 5.7-1.5 8.2-4.7 12.5-10.5ZM47.6 47.6c-2.3-7.8-4.8-11-10.5-12.5 1.5 5.7 4.7 8.2 10.5 12.5ZM16.4 47.6c7.8-2.3 11-4.8 12.5-10.5-5.7 1.5-8.2 4.7-12.5 10.5ZM16.4 16.4c2.3 7.8 4.8 11 10.5 12.5-1.5-5.7-4.7-8.2-10.5-12.5Z"
        fill="currentColor"
      />
      <circle cx="32" cy="32" r="3.5" fill="currentColor" />
    </svg>
  );
}

export default function Brand({ wedding = false }: { wedding?: boolean }) {
  if (wedding)
    return (
      <span className="brand brand-wedding">
        <WeddingMark className="wedding-mark" />
        <span className="brand-wedding-type">
          <span className="brand-wedding-title">SAVE THE DATE</span>
          <span className="brand-wedding-subtitle">INVITACIONES DE BODA</span>
        </span>
      </span>
    );

  return (
    <span className="brand brand-general">
      <svg
        className="brand-mark"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path className="party-cone" d="M7 40 17 17l14 14L7 40Z" />
        <path className="party-stripe" d="m12 29 7 7m2-16 7 8" />
        <path
          className="party-burst"
          d="M27 10V5m-2.5 2.5h5M38 16l3-3m-2 16 4 2M13 9l-2-4"
        />
        <circle className="party-dot party-dot-pink" cx="34" cy="8" r="2.5" />
        <circle className="party-dot party-dot-gold" cx="39" cy="23" r="2.5" />
        <circle className="party-dot party-dot-purple" cx="18" cy="9" r="1.8" />
      </svg>
      <span className="brand-wordmark">
        the date<span className="dot">.</span>
      </span>
    </span>
  );
}
