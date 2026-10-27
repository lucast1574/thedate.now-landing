import Icon from "@/components/icon";
export default function GeneralMarquee() {
  return (
    <div className="party-marquee" aria-hidden="true">
      <div className="party-marquee-track">
        {[0, 1].map((copy) => (
          <span key={copy}>
            {Array.from({ length: 5 }, (_, n) => (
              <span className="ribbon-words" key={n}>
                INVITA <Icon name="sparkle" /> CELEBRA <Icon name="sparkle" />{" "}
                REÚNE <Icon name="sparkle" /> REPITE <Icon name="sparkle" />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
