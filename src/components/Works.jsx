import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import { useState } from 'react';

import {styles} from '../styles';
import {github} from '../assets';
import {SectionWrapper} from '../hoc';
import {projects} from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  video,
  source_code_link,
  live_demo_link,
  onPlayVideo,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", (index % 3) * 0.15, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1.05,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between"
      >
        <div>
          <div className='relative w-full h-[230px]'>
            {video ? (
              <>
                <video
                  src={video}
                  muted
                  playsInline
                  className='w-full h-full object-cover rounded-2xl'
                />
                <div
                  onClick={() => onPlayVideo && onPlayVideo(video)}
                  className='absolute inset-0 flex justify-center items-center rounded-2xl bg-black/40 cursor-pointer hover:bg-black/20 transition-all'
                >
                  <div className='w-14 h-14 rounded-full bg-white/90 flex justify-center items-center shadow-lg hover:scale-110 transition-transform'>
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: '10px solid transparent',
                        borderBottom: '10px solid transparent',
                        borderLeft: '16px solid #1d1836',
                        marginLeft: '4px',
                      }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <img
                src={image}
                alt={name}
                className='w-full h-full object-cover object-top rounded-2xl'
              />
            )}

            <div className='absolute top-0 right-0 flex justify-end m-3 gap-2 z-10'>
              {source_code_link && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  title="Source Code"
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform shadow-md'
                >
                  <img
                    src={github}
                    alt="github"
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              )}
              {live_demo_link && (
                <div
                  onClick={() => window.open(live_demo_link, "_blank")}
                  title="Live Demo"
                  className='bg-gradient-to-r from-emerald-500 to-teal-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform shadow-md'
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] leading-relaxed'>{description}</p>
          </div>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[13px] font-medium ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <div className='mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3'>
          {source_code_link ? (
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className='flex items-center gap-2 text-[13px] font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-xl transition-all'
            >
              <img src={github} alt="github" className="w-4 h-4 object-contain" />
              <span>GitHub</span>
            </button>
          ) : (
            <span />
          )}

          {live_demo_link ? (
            <button
              onClick={() => window.open(live_demo_link, "_blank")}
              className='flex items-center gap-1.5 text-[13px] font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 px-3.5 py-2 rounded-xl shadow-md hover:shadow-emerald-500/20 transition-all'
            >
              <span>Live Demo</span>
              <span className='text-[15px] leading-none'>↗</span>
            </button>
          ) : (
            <span className='text-[12px] text-secondary/60 italic'>Repo only</span>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My Work</p>
            <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    <div className='w-full flex'>
      <motion.p
        variants={fadeIn("", "", 0.1,1)}
        className="mt-3 text-secondary text=[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </motion.p>

    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project, index)=>(
        <ProjectCard
        key={`project-${index}`}
        index={index}
        {...project}
        onPlayVideo={setActiveVideo}
        />
      ))}

    </div>

    {activeVideo && (
      <div
        onClick={() => setActiveVideo(null)}
        className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5'
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className='relative w-full max-w-3xl bg-tertiary rounded-2xl p-3'
        >
          <button
            onClick={() => setActiveVideo(null)}
            className='absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center text-black font-bold text-lg'
          >
            &times;
          </button>
          <video
            src={activeVideo}
            controls
            autoPlay
            className='w-full max-h-[80vh] rounded-xl'
          />
        </div>
      </div>
    )}
    </>
  )
}

export default SectionWrapper(Works, "projects");