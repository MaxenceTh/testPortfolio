import { useFrame, useThree } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";

const CameraMovement = ({ camTarget, camTargetMobile }) => {
  const { camera } = useThree();
  const isMobile = useMediaQuery({ maxWidth: 853 });

  // Utiliser camTargetMobile sur petit écran, camTarget sur grand écran
  const target = isMobile && camTargetMobile ? camTargetMobile : camTarget;

  useFrame(() => {
    // lerp pour une transition fluide
    camera.position.lerp(new THREE.Vector3(...target), 0.1);
    // regarder vers le centre ou un autre point
    camera.lookAt(0, 0, 0);
  });

  return null; // ce composant ne rend rien
};

export default CameraMovement;
