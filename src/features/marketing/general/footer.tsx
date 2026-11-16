import { useTranslator } from "@/lib/i18n/react";
import LegalLinks from "../legal-links";
import Icon from "@/components/icon";
import Brand from "@/components/brand";
export default function GeneralFooter() {
  const i18n = useTranslator();

  return (
    <footer className="party-footer party-shell">
      <Brand />
      <span>
        {i18n("Una buena historia siempre empieza con una invitación.")}
      </span>
      <a href="https://save.thedate.now">
        {i18n("Bodas en Save the Date")} <Icon name="external" />
      </a>
      <LegalLinks />
    </footer>
  );
}
