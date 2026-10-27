import Icon from "@/components/icon";
import Brand from "@/components/brand";
export default function WeddingFooter() {
  return (
    <footer className="footer shell">
      <Brand wedding />
      <span>Hecho para los momentos que se quedan.</span>
      <a href="https://studio.save.thedate.now">
        Abrir estudio <Icon name="external" />
      </a>
    </footer>
  );
}
