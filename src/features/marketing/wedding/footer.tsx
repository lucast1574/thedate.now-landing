import { useTranslator } from "@/lib/i18n/react";
import LegalLinks from "../legal-links";
import Icon from "@/components/icon";
import Brand from "@/components/brand";
export default function WeddingFooter() {
  const i18n = useTranslator();

  return (
    <footer className="footer shell">
      <Brand wedding />
      <span>{i18n("Hecho para los momentos que se quedan.")}</span>
      <a href="https://studio.save.thedate.now">
        {i18n("Abrir estudio")} <Icon name="external" />
      </a>
      <LegalLinks />
    </footer>
  );
}
