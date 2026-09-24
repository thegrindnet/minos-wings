import "./FoodPhoto.css";
import promotion from "../../assets/images/promotion.webp";
const crops = {
  platter: "0 837 1122 450",
  wings: "0 850 570 435",
  shrimp: "545 850 577 435",
  homemade: "360 835 570 355",
};
const descriptions = {
  platter:
    "Saucy traditional wings, seasoned shrimp, golden fries and ranch from Minos Wings promotional artwork",
  wings: "Glazed traditional chicken wings",
  shrimp: "Seasoned saucy shrimp",
  homemade: "Golden French fries and creamy ranch dressing",
};
export default function FoodPhoto({ variant = "platter", className = "" }) {
  return (
    <svg
      className={`food-photo ${className}`}
      viewBox={crops[variant]}
      role="img"
      aria-label={descriptions[variant]}
      preserveAspectRatio="xMidYMid slice"
    >
      <image href={promotion} width="1122" height="1402" />
    </svg>
  );
}
