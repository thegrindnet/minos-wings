import "./Logo.css";
import menu from "../../assets/images/menu.webp";
export default function Logo() {
  return (
    <svg
      className="logo"
      viewBox="75 45 315 375"
      role="img"
      aria-label="Minos Wings"
    >
      <image href={menu} width="1102" height="1427" />
    </svg>
  );
}
