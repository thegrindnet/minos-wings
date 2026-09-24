import "./Navigation.css";
import { useRef, useState } from "react";
import { business, navigationLinks } from "../../utils/constants.js";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  function closeWithEscape(event) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      toggleRef.current?.focus();
    }
  }
  return (
    <nav
      className="navigation"
      aria-label="Main navigation"
      onKeyDown={closeWithEscape}
    >
      <button
        ref={toggleRef}
        className="navigation__toggle"
        aria-expanded={open}
        aria-controls="navigation-links"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close ✕" : "Menu ☰"}
      </button>
      <div
        id="navigation-links"
        className={`navigation__links ${open ? "navigation__links--open" : ""}`}
      >
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="button navigation__call" href={business.phoneHref}>
          Call to Order <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
}
