import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import HeroText from "../components/HeroText";
import SocialMedia from "../components/SocialMedia";
import { Desktop } from "../components/Desktop";
import CameraMovement from "../components/CameraMovement";


import Loader from "../components/Loader";
import OverlayLoader from "../components/OverlayLoader"; 7

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [showScene, setShowScene] = useState(false);

  // ⏱️ Loader minimum 5s
  useEffect(() => {
    const timer = setTimeout(() => setShowScene(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showScene) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showScene]);

  return (
    <section
      className="bg-orange-50 w-screen h-screen overflow-hidden relative"
      id="home"
    >
     <div className="w-full h-full flex items-start justify-center overflow-hidden md:items-start md:justify-start relative c-space">
        <HeroText />

        {/* CANVAS (always mounted) */}
      <figure className="absolute inset-0" style={{ width: "100%", height: "100%" }} >
          <Canvas
            className={`transition-opacity duration-700 ${showScene ? "opacity-100" : "opacity-0"
              }`}
          >
            <ambientLight intensity={1.5} />
            <directionalLight position={[3, 10, 7]} intensity={1.5} />

            <Suspense fallback={<Loader />}>
              <Desktop
                position={isMobile ? [-1.2, -1.2, 1.6] : [1, -1.7, 6]}
                isMobile={isMobile}
              />
              <CameraMovement
                camTarget={[-2, 0, 10]}
                camTargetMobile={[-3, 0, 4]}
              />
            </Suspense>
          </Canvas>
        </figure>

        

        {/* OVERLAY LOADER (HTML ONLY) */}
        {!showScene && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center 
               bg-orange-50 pointer-events-auto"
          >
            <OverlayLoader />
          </div>
        )}

         <SocialMedia />

       
      </div>
    </section>
  );
};

export default Hero;
