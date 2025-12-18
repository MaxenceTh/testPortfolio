import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { items } from "../constants";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

export default function HorizontalScrollCards() {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="relative w-full py-10">
      {/* NAV BUTTONS */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10
                   bg-orange shadow-xl border border-gray-300 rounded-full p-3
                   hover:scale-110 transition text-white"
      >
        <ChevronLeft size={26} />
      </button>

      <button
        onClick={scrollRight}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10
                   bg-orange shadow-xl border border-gray-300 rounded-full p-3
                   hover:scale-110 transition text-white"
      >
        <ChevronRight size={26} />
      </button>

      {/* SCROLL WRAPPER */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-4 py-6"
      >
        {items.map((item, index) => (
          <ProjectCard
            key={index}
            item={item}
            openModal={() => setSelectedProject(item)}
          />
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <ProjectDetails
          {...selectedProject}
          closeModal={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
