import "./App.css";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import Flavors from "../Flavors/Flavors.jsx";
import Menu from "../Menu/Menu.jsx";
import Combos from "../Combos/Combos.jsx";
import About from "../About/About.jsx";
import Catering from "../Catering/Catering.jsx";
import Faq from "../Faq/Faq.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
export default function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Flavors />
        <Menu />
        <Combos />
        <About />
        <Catering />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
