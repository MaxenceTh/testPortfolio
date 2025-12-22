import { motion } from "motion/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function ProjectDetails({
  titleKey,
  companyKey,
  statusKey,
  link,
  img,
  stack,
  descriptionKeys,
  closeModal,
}) {
  const { t } = useTranslation();

  // Bloquer le scroll du body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={closeModal}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-[90%] max-w-2xl
          max-h-[85vh] sm:max-h-[90vh]
          rounded-2xl
          bg-gradient-to-br from-orange-100 to-orange-50
          border-2 border-orange
          shadow-2xl
          overflow-hidden
        "
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-orange-200 hover:bg-orange transition"
        >
          <img src="assets/close.svg" alt={t(titleKey)} className="w-4 h-4" />
        </button>

        {/* IMAGE */}
        <div className="relative">
          <img
            src={img}
            alt={t(titleKey)}
            className="w-full h-40 sm:h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-100/80 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-10rem)] sm:max-h-none">
          <h5 className="mb-3 text-3xl font-semibold text-zinc-900 text-center">
            {t(titleKey)}
          </h5>

          <h6 className="mb-4 text-sm uppercase tracking-wider text-orange underline">
            {t("whatIdid")}
          </h6>

          <ul className="space-y-3 text-zinc-700">
            {descriptionKeys.map((key, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange shrink-0" />
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
