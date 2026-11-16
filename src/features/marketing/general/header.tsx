import { useTranslator } from "@/lib/i18n/react";
import Icon from "@/components/icon";
import Brand from "@/components/brand";
export default function GeneralHeader() {
  const i18n = useTranslator();

  return (
    <header className="party-header party-shell">
      <a href="https://thedate.now" aria-label={i18n("The Date, inicio")}>
        <Brand />
      </a>
      <nav>
        <a href="#ideas">{i18n("Para cada ocasión")}</a>
        <a href="#como-funciona">{i18n("Cómo funciona")}</a>
        <a href="https://save.thedate.now">{i18n("¿Una boda?")}</a>
        <a className="party-nav-action" href="https://crea.thedate.now">
          {i18n("Mi espacio")} <Icon name="external" />
        </a>
      </nav>
    </header>
  );
}
