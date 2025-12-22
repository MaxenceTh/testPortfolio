import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "motion/react";
import HorizontalScrollCards from "../components/HorizontalScrollCards";
import { useTranslation } from "react-i18next";


const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,  // délai entre éléments
        delayChildren: 0.2,     // commence un peu après
      },
    },
  };

  const { t } = useTranslation();

  return (
    <section
      className=" section-spacing bg-orange-50"
      id="work"
    >



      <div className="container mx-auto max-w-7xl c-space">
        <motion.div
          ref={ref}
          variants={parentVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-heading text-black  ">
            {t("selectedProjets")} <span className="text-orange">{t("experience")}</span>
          </motion.h2>


        </motion.div>
      </div>


      <HorizontalScrollCards />


    </section >
  );
};

export default Projects;
