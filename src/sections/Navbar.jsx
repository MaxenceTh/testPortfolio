import { useState, useEffect } from "react";
import { motion } from "motion/react";

function Navigation({ onLinkClick }) {
  return (
    <ul className="flex flex-col justify-center items-center gap-8">
      <li>
        <a href="#home" className="text-2xl font-semibold hover:text-white" onClick={onLinkClick}>Home</a>
      </li>
      <li>
        <a href="#about" className="text-2xl font-semibold hover:text-white" onClick={onLinkClick}>About</a>
      </li>
      <li>
        <a href="#work" className="text-2xl font-semibold hover:text-white" onClick={onLinkClick}>Work</a>
      </li>
      <li>
        <a href="#contact" className="text-2xl font-semibold hover:text-white" onClick={onLinkClick}>Contact</a>
      </li>
    </ul>
  );
}

const Navbar = ({ setCamTarget, defaultCam, menuCam }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkZone, setIsDarkZone] = useState(false);

  // Effet pour gérer le changement de style en fonction de la position de défilement
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const isDark = entry.target.classList.contains("bg-orange-50");
            setIsDarkZone(isDark);
          }
        });
      },
      { threshold: 0.4 } // ajuste la sensibilité
    );

    // Observer chaque section
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    if (!isOpen) {
      setCamTarget(menuCam);
    } else {
      setCamTarget(defaultCam);
    }
    setIsOpen(!isOpen);
  };

  // Fonction pour fermer le menu quand on clique sur un lien
  const closeMenu = () => {
    setCamTarget(defaultCam);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full z-20">
      {/* BOUTON BURGER */}
      <button
        onClick={toggleMenu}
        className={`fixed top-4 right-4 z-50 flex cursor-pointer
              rounded-full p-2 transition-all duration-300
              border-2
               ${isDarkZone || isOpen
            ? "bg-orange border-orange text-white hover:bg-orange/90"
            : "bg-orange-50 border-orange-50 text-orange hover:bg-orange-100"
          }`}
      >
        <img
          src={
            isDarkZone
              ? (isOpen ? "assets/close.svg" : "assets/menu.svg")
              : (isOpen ? "assets/close.svg" : "assets/menuOrange.svg")
          }
          className="w-10 h-10"
          alt="toggle"
        />
      </button>

      {/* SIDEBAR */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 right-0 h-full bg-orange backdrop-blur-lg
                     shadow-xl w-1/3 sm:w-1/3 w-2/3
                     flex justify-center items-center z-40"
        >
          <nav className="text-center">
            <Navigation onLinkClick={closeMenu} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

