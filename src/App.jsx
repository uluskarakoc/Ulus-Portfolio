import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <section id="Homepage">  <Navbar />  <Hero /> </section>
      <section id="About"><About/></section>
      <section>    <Parallax type="skills" /> </section>
      <section id="Skills"><Skills/></section>
      <section>    <Parallax type="portfolio" /> </section>
      <section id="Portfolio">Portfolio</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
