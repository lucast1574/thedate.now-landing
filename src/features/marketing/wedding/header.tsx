import { useTranslator } from "@/lib/i18n/react";
import Icon from "@/components/icon";
import Brand from "@/components/brand";
export default function WeddingHeader() {
  const i18n = useTranslator();

  return (
    <header className="topbar shell">
      <a href="https://save.thedate.now">
        <Brand wedding />
      </a>
      <nav>
        <a href="#como-funciona">{i18n("Cómo funciona")}</a>
        <a href="https://thedate.now">{i18n("Otros eventos")}</a>
        <a className="mobile-app-nav" href="#app">
          {i18n("La app")}
        </a>
        <a className="nav-action" href="https://studio.save.thedate.now">
          {i18n("Estudio")} <Icon name="external" />
        </a>
      </nav>
    </header>
  );
}
