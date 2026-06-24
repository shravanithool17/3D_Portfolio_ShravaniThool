// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import ComputersCanvas from './canvas/Computers';

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto">
      
//       {/* TEXT CONTENT */}
//       <div
//         className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915eff]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm{" "}
//             <span className="text-[#915eff]">Shravani</span>
//           </h1>

//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             A Second-Year Electronics & Computer Engineering Student at PICT, Pune
//             <br className="sm:block hidden" />
//             I build full-stack web applications using the MERN stack, 
//             {/* focusing on
//             clean UI, scalable backend systems, and real-world problem solving. */}
//           </p>
//         </div>
//       </div>
//  <div className="absolute inset-0 w-full h-full z-0">
//   <ComputersCanvas />
// </div>
//       {/* 3D MODEL */}
//      {/* 3D MODEL */}
// <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//   <a href="#about">
//     <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//     <motion.div
//   animate={{
//     y: [0,24,0]
//   }}
//   transition = {{
//     duration: 1.5,
//     repeat: Infinity,
//     repeatType: 'loop'
//   }}

//   className="w-3 h-3 rounded-full bg-secondary mb-1"
//      />
//     </div>
//   </a>
// </div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";
import { styles } from "../styles";
import shravaniPhoto from "../assets/shravani_photo.jpeg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      
      {/* TEXT CONTENT */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-[#915eff]">Shravani</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-50 max-w-[650px]`}>
            A Third-Year Electronics & Computer Engineering Student at PICT, Pune
            <br className="sm:block hidden" />
            I build full-stack web applications using the MERN stack, 
            {/* focusing on
            clean UI, scalable backend systems, and real-world problem solving. */}
          </p>
        </div>
      </div>

      {/* PHOTO SECTION - replaces 3D computer model */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center md:justify-end pr-0 md:pr-32">
        <div className="photo-frame-group relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]">
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
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
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