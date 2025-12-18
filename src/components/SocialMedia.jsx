import { motion } from "motion/react";
import { useRef } from "react";


const SocialMedia = () => {
    const ref = useRef();

    const childVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3, ease: "easeOut", staggerChildren: 0.12,  // délai entre éléments
                delayChildren: 0.2,
            },
        },
    };
    return (
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-10">
            <div className="flex gap-2 sm:gap-3 justify-center">
                { /* Email */}
                <motion.a

                    initial="hidden"
                    animate={"visible"}
                    variants={childVariant}
                    href="mailto:thomas.maxence141v2@gmail.com"
                    className="w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-orange border border-white/20 flex items-center justify-center hover:bg-orange transition-all hover:scale-110"
                >
                    <motion.svg className="w-8 sm:w-12 h-8 sm:h-12 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" variants={childVariant}>
                        <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16l-8 5L4 6zm0 12V8l7.555 4.722a1 1 0 0 0 1.11 0L20 8v10H4z" />
                    </motion.svg>
                </motion.a>
                {/* LinkedIn */}
                <motion.a
                    initial="hidden"
                    animate={"visible"}
                    variants={childVariant}
                    href="https://www.linkedin.com/in/maxence-thomas-a03b57298/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-orange border border-white/20 flex items-center justify-center hover:bg-orange transition-all hover:scale-110"
                >
                    <motion.svg className="w-8 sm:w-12 h-8 sm:h-12 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" variants={childVariant}>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.249-.129.597-.129.946v5.422h-3.554s.051-8.795 0-9.704h3.554v1.373c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.733 1.398 3.733 4.408v5.533zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.956.77-1.704 1.963-1.704 1.192 0 1.915.748 1.937 1.704 0 .946-.745 1.704-1.985 1.704zm1.582 11.597H3.715V9.542h3.204v10.91zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </motion.svg>
                </motion.a>

                {/* GitHub */}
                <motion.a
                    initial="hidden"
                    animate={"visible"}
                    variants={childVariant}
                    href="https://github.com/MaxenceTh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-orange border border-white/20 flex items-center justify-center hover:bg-orange transition-all hover:scale-110"
                >
                    <motion.svg className="w-8 sm:w-12 h-8 sm:h-12 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" variants={childVariant}>
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </motion.svg>
                </motion.a>
                {/* Resume */}
                <motion.a
                    initial="hidden"
                    animate={"visible"}
                    variants={childVariant}
                    href={`${import.meta.env.BASE_URL}assets/cv.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-orange border border-white/20 flex items-center justify-center hover:bg-orange transition-all hover:scale-110"
                >

                    <motion.svg className="w-8 sm:w-12 h-8 sm:h-12 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" variants={childVariant}>
                        <path d="M14 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V8l-6-6zM13 3.414L18.586 9H14c-.552 0-1-.448-1-1V3.414zM18 20H6V4h7v5c0 1.654 1.346 3 3 3h5v8zM8 12h8v2H8v-2zm0 4h8v2H8v-2z" />
                    </motion.svg>
                </motion.a>

            </div>
        </div>
    );
};

export default SocialMedia;