import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import { useState } from 'react';

import {styles} from '../styles';
import {github} from '../assets';
import {SectionWrapper} from '../hoc';
import {projects} from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name, description, tags, video, source_code_link, onPlayVideo}) =>{
  return (
    <motion.div variants={fadeIn("up", "spring", index *0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1.05,
        speed:450,


      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ">
        <div className='relative w-full h-[230px] '>
          <video
            src={video}
            muted
            playsInline
            className='w-full h-full object-cover rounded-2xl'
          />

          <div
            onClick={() => onPlayVideo(video)}
            className='absolute inset-0 flex justify-center items-center rounded-2xl bg-black/40 cursor-pointer'
          >
            <div className='w-16 h-16 rounded-full bg-white/90 flex justify-center items-center'>
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderTop: '12px solid transparent',
                  borderBottom: '12px solid transparent',
                  borderLeft: '18px solid #1d1836',
                  marginLeft: '4px',
                }}
              />
            </div>
          </div>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() =>window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={github}
                alt="github"
                className='w-1/2 h-1/2 object-contain' 
                />

            </div>

          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>
            {name}
          </h3>
          <p className='mt-2 text-secondary text-[14px] '>{description}</p>

        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`} >
              #{tag.name}

            </p>
          ))}

        </div>

      </Tilt>
    </motion.div>
  )
}

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

export default SectionWrapper(Works, "");