import { OrbitingCircles } from "./OrbitingCircles";



/* téléchargement des icônes 
https://www.svgrepo.com/
*/

export function Frameworks( {etat} ) {
  const skills = [
    "java",
    "javascript",
    "postgresql",
    "react",
    "typescript",
    "vue",
    "wordpress",
    "html",
    "git",
    "docker",
    "css",
    "spring",
    "tailwind",
  ];
  
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2} duration={0} isRotating={etat}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);

export default Frameworks;