import Icon from "@/components/icon";
import Brand from "@/components/brand";
export default function WeddingHeader() {
  return (
    <header className="topbar shell">
      <a href="https://save.thedate.now">
        <Brand wedding />
      </a>
      <nav>
        <a href="#como-funciona">Cómo funciona</a>
        <a href="https://thedate.now">Otros eventos</a>
        <a className="nav-action" href="https://studio.save.thedate.now">
          Estudio <Icon name="external" />
        </a>
      </nav>
    </header>
  );
}
