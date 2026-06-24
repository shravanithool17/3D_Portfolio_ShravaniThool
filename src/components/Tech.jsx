import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I work with a range of modern technologies across the full stack —
        from building responsive frontends with React and Tailwind, to
        developing backend systems with Node.js and MongoDB. I've also
        explored AI/ML tools and version control workflows through real
        projects and hackathons.
      </motion.p>

      <div className="mt-12 flex flex-row flex-wrap justify-center gap-7">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.5)}
            whileHover={{ y: -8 }}
            className="flex flex-col items-center gap-3 bg-tertiary rounded-2xl px-6 py-5 w-[120px]"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-12 h-12 object-contain"
            />
            <p className="text-white text-[13px] font-medium text-center">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");