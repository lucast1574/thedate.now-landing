import Icon from "@/components/icon";
import Brand from "@/components/brand";
export default function GeneralHeader() {
  return (
    <header className="party-header party-shell">
      <a href="https://thedate.now" aria-label="The Date, inicio">
        <Brand />
      </a>
      <nav>
        <a href="#ideas">Para cada ocasión</a>
        <a href="#como-funciona">Cómo funciona</a>
        <a href="https://save.thedate.now">¿Una boda?</a>
        <a className="party-nav-action" href="https://crea.thedate.now">
          Mi espacio <Icon name="external" />
        </a>
      </nav>
    </header>
  );
}
