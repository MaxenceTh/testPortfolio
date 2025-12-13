import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { div } from "motion/react-client";
import { items } from "../constants"

export default function HorizontalScrollCards() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="relative w-full py-10">
      {/* NAV BUTTONS – hidden on mobile */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10
                 bg-orange shadow-xl border border-gray-300 
                 rounded-full p-3 hover:scale-110 transition"
      >
        <ChevronLeft size={26} />
      </button>

      <button
        onClick={scrollRight}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10
                   bg-orange shadow-xl border border-gray-300 
                   rounded-full p-3 hover:scale-110 transition"
      >
        <ChevronRight size={26} />
      </button>

      {/* SCROLL WRAPPER */}
      <div
        ref={scrollRef}
        className="
          flex gap-6 overflow-x-auto scrollbar-hide
          scroll-smooth snap-x snap-mandatory px-4 py-6
        "
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="
              snap-center flex-shrink-0
  rounded-3xl shadow-2xl border-4 border-orange bg-orange-50
  overflow-hidden transition-transform hover:scale-105

  /* MOBILE */
  w-[85vw] min-h-[550px] h-auto

  /* TABLETTES (iPad, 768–1023px) */
  md:w-[60vw] md:min-h-[650px]

  /* LAPTOP + DESKTOP */
  lg:w-[10vw] lg:min-h-[500px]
  xl:w-[35vw] xl:min-h-[380px]
            "
          >
            {/* IMAGE */}
            <div className="w-full h-[45%] sm:h-[55%] md:h-[60%]">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover border-b-4 border-orange"
              />
            </div>

            {/* BADGES + STACK */}
            <div className="flex flex-col items-center px-3 mt-2 text-black gap-2 text-center">

              {/* STATUS */}
              <p className="px-3 py-1 bg-orange-100 text-black font-semibold rounded-full border border-black-300">
                {item.status}
              </p>

              {/* STACK */}
              <div className="flex flex-wrap gap-2 justify-center max-w-full">
                {item.stack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-orange-200 px-2 py-1 rounded border border-orange-300 text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>

            </div>

            {/* TEXT */}
            <div className="p-4 text-center flex flex-col justify-center flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-950 mb-4 text-sm sm:text-base">
                {item.text}
              </p>

              <a href={item.lien} target="blank">
                <button
                  className="
                    bg-orange-100 text-orange-700 font-bold rounded-full 
                    px-4 py-2 shadow-[0_4px_0_#ea580c] border-2 border-orange-300
                    hover:bg-orange-200 hover:shadow-[0_6px_0_#d9460f]
                    active:translate-y-1 active:shadow-[0_2px_0_#ea580c]
                  "
                >
                  Discover
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
