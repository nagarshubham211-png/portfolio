import Navbar from "./componants/layout/Navbar";
import Hero from "./componants/sections/hero";
import About from "./componants/sections/About";
import SKILLS from "./componants/sections/Skills";
import Project from "./componants/sections/Projects"
import  EXPERIENCES  from "./componants/sections/Experience";
import  Contact  from "./componants/sections/Contact";
import Footer from "./componants/layout/Footer";

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