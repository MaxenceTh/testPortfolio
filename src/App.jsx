import { useState } from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projets from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";

function App() {
  const defaultCam = [-2, 0, 10]; // vue d'origine
  const menuCam = [6, 0, 10];     // vue lorsque le menu est ouvert
  const [camTarget, setCamTarget] = useState(defaultCam);

  return (
    <>
      <div className="">
        <Navbar
          setCamTarget={setCamTarget}
          defaultCam={defaultCam}
          menuCam={menuCam}
        />
        <Hero camTarget={camTarget} />
        <About />
        <Projets />
        <Contact />
      </div>
    </>
  );
}

export default App;
