import "./app.scss"
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Parallax from "./components/parallax/Parallax";
import Contact from "./components/contact/Contact"

const App = () => {
  return (
   <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Portfolio">
      <Parallax />
    </section>
    <section id="Services"><Services /></section>
    <section id="Contact"><Contact/></section>
  </div>
  );
};

export default App;
