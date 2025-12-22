import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import GridPattern from "../components/GridPattern";

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.7,
        duration: 0.8,
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vqujx0a", // ton service EmailJS
        "template_gxqnf11", // ton template EmailJS
        formRef.current,
        "HN924O7uVNytm7KFY" // ta clé publique EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          setError(false);
          e.target.reset();
        },
        (err) => {
          console.error(err.text);
          setError(true);
        }
      );
  };

  return (
    <section className="section-spacing relative" id="contact">
      <GridPattern squares={[
        // H 
        [1, 1], [1, 2], [1, 3], [1, 4], [1, 5],
        [3, 1], [3, 2], [3, 3], [3, 4], [3, 5],
        [2, 3],
        // I 
        [5, 1], [5, 2], [5, 3], [5, 4], [5, 5],
        // R 
        [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [8, 1], [9, 1], [9, 2], [9, 3], [8, 3], [9, 4], [8, 5],
        // E 
        [11, 1], [11, 2], [11, 3], [11, 4], [11, 5], [12, 1], [13, 1], [12, 3], [13, 3], [12, 5], [13, 5],
        // M
        [11, 7], [11, 8], [11, 9], [11, 10], [11, 11], [12, 8], [13, 9], [14, 8], [15, 7], [15, 8], [15, 9], [15, 10], [15, 11],
        // E 
        [17, 7], [17, 8], [17, 9], [17, 10], [17, 11], [18, 7], [19, 7], [18, 9], [19, 9], [18, 11], [19, 11],
      ]}
        width={80}
        height={80} x={-40} y={-40}
        strokeDasharray="6 6"
        className="absolute inset-0 h-full w-full opacity-60 -z-10 stroke-orange-400 fill-orange-400"
      />

      <div className="container mx-auto max-w-7xl c-space">
        <motion.div
          ref={ref}
          variants={parentVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-heading mb-12 text-white">Contact</motion.h2>

          <div className="w-full min-h-[70vh] flex justify-center items-center">
            <div className="w-full max-w-2xl p-8 rounded-2xl backdrop-blur-sm bg-white/5 
                    border border-white/20 shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)]">
              <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <motion.label className="text-sm text-white" variants={parentVariant}>
                    {t("contactName")}
                  </motion.label>
                  <motion.input
                    variants={childVariant}
                    type="text"
                    name="user_name"
                    className="px-4 py-3 rounded-lg bg-white text-black border border-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <motion.label className="text-sm text-white" variants={parentVariant}>
                    {t("contactLastname")}
                  </motion.label>
                  <motion.input
                    variants={childVariant}
                    type="text"
                    name="user_lastname"
                    className="px-4 py-3 rounded-lg bg-white text-black border border-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <motion.label className="text-sm text-white" variants={parentVariant}>
                    {t("contactEmail")}
                  </motion.label>
                  <motion.input
                    variants={childVariant}
                    type="email"
                    name="user_email"
                    className="px-4 py-3 rounded-lg bg-white text-black border border-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <motion.label className="text-sm text-white" variants={parentVariant}>
                    {t("contactMessage")}
                  </motion.label>
                  <motion.textarea
                    variants={childVariant}
                    rows="5"
                    name="message"
                    className="px-4 py-3 rounded-lg bg-white text-black border border-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                  ></motion.textarea>
                </div>

                <div className="flex justify-center">
                  <motion.button variants={parentVariant} type="submit" className="w-1/3 cursor-pointer bg-orange-100 text-orange-700 font-bold rounded-full 
                    px-4 py-2 shadow-[0_4px_0_#ea580c] border-2 border-orange-300
                    hover:bg-orange-200 hover:shadow-[0_6px_0_#d9460f]
                    active:translate-y-1 active:shadow-[0_2px_0_#ea580c]" >
                    {t("contactSend")}
                  </motion.button>

                  {messageSent && (
                    <p className="text-green-500 mt-2">{t("contactSuccess")}</p>
                  )}
                  {error && (
                    <p className="text-red-500 mt-2">{t("contactError")}</p>
                  )}
                </div>
              </form>
            </div>
          </div>

        </motion.div>
        <footer className="text-xs text-zinc-400 text-center py-4">
          Flag icons by{" "}
          <a
            href="https://www.flaticon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Flaticon
          </a>{" "}
          (France & UK)
        </footer>
      </div>
    </section>
  );
};

export default Contact;
