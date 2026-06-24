import { motion } from "framer-motion";
import { styles } from "../styles";
import shravaniPhoto from "../assets/shravani_photo.jpeg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-5`}
      >
        {/* LEFT: vertical line + text */}
        <div className="flex flex-row items-start gap-5 flex-1 min-w-0">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="min-w-0">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Shravani</span>
            </h1>

            <p
              className={`${styles.heroSubText} mt-2 text-white-50 max-w-[650px]`}
            >
              A third-year Electronics & Computer Engineering student at PICT,
              Pune
              <br />I build full-stack web applications using the MERN stack,
              with a focus on clean UI and scalable backend systems.
            </p>
          </div>
        </div>

        {/* RIGHT: photo, only inline-flows on lg+, hidden from layout flow below that */}
        <div className="hidden lg:flex flex-shrink-0 items-center justify-center pt-4 pr-8">
          <div className="photo-frame-group relative w-[260px] h-[260px] xl:w-[300px] xl:h-[300px]">
            <div className="photo-ring absolute inset-0 rounded-3xl p-[5px]">
              <div className="w-full h-full rounded-[20px] overflow-hidden bg-primary">
                <img
                  src={shravaniPhoto}
                  alt="Shravani"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PHOTO for screens below lg - sits below text, centered, never overlaps */}
      <div className="lg:hidden absolute inset-x-0 bottom-28 flex items-center justify-center z-0">
        <div className="photo-frame-group relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]">
          <div className="photo-ring absolute inset-0 rounded-3xl p-[4px]">
            <div className="w-full h-full rounded-[18px] overflow-hidden bg-primary">
              <img
                src={shravaniPhoto}
                alt="Shravani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .photo-ring {
          background: conic-gradient(from 0deg, #915eff, #c4a6ff, #915eff);
          transition: transform 0.3s ease;
        }
        .photo-frame-group:hover .photo-ring {
          animation: photoRingSpin 1.2s linear infinite;
        }
        @keyframes photoRingSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* SCROLL INDICATOR */}
      <div className="absolute xs:bottom-10 bottom-6 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
