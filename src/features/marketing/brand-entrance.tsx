"use client";
import Brand from "@/components/brand";
import Icon from "@/components/icon";
export default function BrandEntrance({
  wedding = false,
}: {
  wedding?: boolean;
}) {
  return (
    <div
      className={`brand-entrance ${wedding ? "entrance-wedding" : "entrance-event"}`}
    >
      <div className="brand-entrance-art" aria-hidden="true">
        <span className="entrance-frame entrance-frame-one" />
        <span className="entrance-frame entrance-frame-two" />
        <div className="brand-entrance-logo">
          <Brand wedding={wedding} />
        </div>
        <p className="brand-entrance-caption">
          {wedding
            ? "El comienzo de su gran historia."
            : "Una invitación. Mil posibilidades."}
        </p>
        <span className="brand-entrance-line" />
      </div>
      <button
        type="button"
        className="brand-entrance-skip"
        onClick={() =>
          document.documentElement.removeAttribute("data-brand-arrival")
        }
      >
        Entrar al sitio <Icon name="arrow" />
      </button>
    </div>
  );
}
