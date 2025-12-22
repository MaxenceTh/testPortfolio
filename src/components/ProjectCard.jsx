import { useTranslation } from "react-i18next";
export default function ProjectCard({ item, openModal }) {
  const { t } = useTranslation();
  return (
    <div
      className="
        snap-center flex-shrink-0 rounded-3xl shadow-2xl border-4 border-orange
        bg-orange-50 overflow-hidden transition-transform hover:scale-105
        w-[85vw] min-h-[550px] h-auto
        md:w-[60vw] md:min-h-[650px]
        lg:w-[10vw] lg:min-h-[500px]
        xl:w-[35vw] xl:min-h-[380px]
      "
    >
      {/* IMAGE */}
      <div className="w-full h-[45%] sm:h-[55%] md:h-[60%]">
        <img
          src={item.img}
          alt={t(item.titleKey)}
          className="w-full h-full object-cover border-b-4 border-orange"
        />
      </div>

      {/* BADGES + STACK */}
      <div className="flex flex-col items-center px-3 mt-2 text-black gap-2 text-center">
        <p className="px-3 py-1 bg-orange-100 text-black font-semibold rounded-full border border-black-300">
          {t(item.statusKey)}
        </p>
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
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{t(item.titleKey)}</h3>
        <p className="text-gray-950 mb-4 text-sm sm:text-base">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${t(item.titleKey)} website`}
            className="inline-flex items-center gap-2 ml-3 text-sm text-black bg-orange-50 px-2 py-1 rounded border border-orange-200 hover:bg-orange-100 transition-colors cursor-pointer"
          >
            <span className="text-sm">{t(item.companyKey)}</span>
            <span
              className="inline-flex items-center justify-center w-5 h-5 border border-orange text-orange-700 rounded-sm text-xs"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </p>

        <div>
          <button
            className="
              cursor-pointer bg-orange-100 text-orange-700 font-bold rounded-full 
              px-4 py-2 shadow-[0_4px_0_#ea580c] border-2 border-orange-300
              hover:bg-orange-200 hover:shadow-[0_6px_0_#d9460f]
              active:translate-y-1 active:shadow-[0_2px_0_#ea580c]
            "
            onClick={openModal}
          >
            {t("discover")}
          </button>
        </div>
      </div>
    </div>
  );
}
