import { useTranslator } from "@/lib/i18n/react";
import Icon from "@/components/icon";
export default function GeneralMarquee() {
  const i18n = useTranslator();

  return (
    <div className="party-marquee" aria-hidden="true">
      <div className="party-marquee-track">
        {[0, 1].map((copy) => (
          <span key={copy}>
            {Array.from({ length: 5 }, (_, n) => (
              <span className="ribbon-words" key={n}>
                {i18n("INVITA")} <Icon name="sparkle" /> {i18n("CELEBRA")}{" "}
                <Icon name="sparkle" /> {i18n("REÚNE")} <Icon name="sparkle" />{" "}
                {i18n("REPITE")} <Icon name="sparkle" />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
