import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
// import { Astronaut } from "../components/Astronaut";

import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

import SocialMedia from "../components/SocialMedia";

import { Desktop } from "../components/Desktop"
import Toto from "../components/toto"

const Hero = ({ camTarget }) => {
  const isMobile = useMediaQuery({ maxWidth: 853 });


  console.log("hero", camTarget)

  return (
    <section className="bg-orange-50 w-screen h-screen overflow-hidden" id="home">
      <div className="w-full h-full flex items-start justify-center 
    overflow-hidden md:items-start md:justify-start relative c-space">
        <HeroText />
        {/* <ParallaxBackground /> */}
        <figure
          className="absolute inset-0"
          style={{ width: "100%", height: "100%" }}
        >
          <Canvas >
            <ambientLight intensity={1.5} />
            <directionalLight position={[3, 10, 7]} intensity={1.5} castShadow />
            <Suspense fallback={<Loader />}>
              {/* Render Queen without Float so it stays static */}
              {/* <Queen position={isMobile ? [2.4, 1.8, 0] : [5.1, 1.9, 1.1]} isMobile={isMobile} /> */}
              <Desktop position={isMobile ? [-1.2, -1.2, 1.6] : [1, -1.7, 6]} isMobile={isMobile} />
              {/* <Rig isMobile={isMobile} /> */}
              {/* <Toto camTarget={camTarget} /> */}
              <Toto camTarget={[-2, 0, 10]} camTargetMobile={[-3, 0, 4]} />
            </Suspense>
          </Canvas>
        </figure>

        <SocialMedia />
      </div>
    </section>
  );
};

function Rig({ isMobile }) {
  return useFrame((state, delta) => {
    if (isMobile) {
      // Sur mobile, garder la caméra fixe au centre
      easing.damp3(state.camera.position, [0, 3, 5], 0.5, delta);
    } else {
      // Désactiver le mouvement latéral pour éviter l'effet d'orbite autour des objets
      // Garder uniquement un léger mouvement vertical (parallax Y) et distance Z fixe
      const targetX = 0; // aucun décalage latéral
      const targetY = 3 + state.mouse.y / 50; // très faible influence verticale
      const targetZ = 7; // distance caméra fixe
      easing.damp3(state.camera.position, [targetX, targetY, targetZ], 0.5, delta);
    }
  });
}

export default Hero;
