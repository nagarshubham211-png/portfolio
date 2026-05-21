import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/hero";
import About from "./components/sections/About";
import SKILLS from "./components/sections/Skills";
import Project from "./components/sections/Projects"
import  EXPERIENCES  from "./components/sections/Experience";
import  Contact  from "./components/sections/Contact";
import Footer from "./components/layout/FooterTemp";

const App = () => {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <SKILLS/>
      <Project/>
      <EXPERIENCES/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;