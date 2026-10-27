import Icon from "@/components/icon";
import Brand from "@/components/brand";
export default function GeneralFooter() {
  return (
    <footer className="party-footer party-shell">
      <Brand />
      <span>Una buena historia siempre empieza con una invitación.</span>
      <a href="https://save.thedate.now">
        Bodas en Save the Date <Icon name="external" />
      </a>
    </footer>
  );
}
