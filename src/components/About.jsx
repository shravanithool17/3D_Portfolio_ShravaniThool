import React, { useState, useEffect } from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import {styles} from '../styles';
import { services } from '../constants';
import {fadeIn , textVariant} from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon })=>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadpw-card'>

       
       <div options={{max: 45, scale:1, speed:450}}
       className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>

        <img src={icon} alt = {title}
        className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
       </div>
      </motion.div>
    
    
    </Tilt>
  )
}

const codeSnippets = [
  { type: 'quote', text: '"Half engineer, half detective."' },
  { type: 'code', parts: [
      { t: 'const ', c: '#c586c0' }, { t: 'weekend', c: '#79c0ff' }, { t: ' = ', c: '#e6edf3' },
      { t: 'hackathon', c: '#79c0ff' }, { t: ' || ', c: '#ff7b72' }, { t: 'sideProject;', c: '#79c0ff' },
  ]},
  { type: 'code', parts: [
      { t: 'if ', c: '#c586c0' }, { t: '(', c: '#e6edf3' }, { t: 'impossible', c: '#79c0ff' }, { t: ') { ', c: '#e6edf3' },
      { t: 'tryAgain', c: '#dcdcaa' }, { t: '(); }', c: '#e6edf3' },
  ]},
  { type: 'quote', text: '"Curiosity wrote the first line.\nPersistence shipped the last."' },
  { type: 'code', parts: [
      { t: 'const ', c: '#c586c0' }, { t: 'growth', c: '#79c0ff' }, { t: ' = ', c: '#e6edf3' }, { t: 'mistakes', c: '#79c0ff' }, { t: '.', c: '#e6edf3' }, { t: 'reduce', c: '#dcdcaa' }, { t: '(', c: '#e6edf3' },
      { t: '\n  (skill, lesson) => skill + lesson, 0\n);', c: '#e6edf3' },
  ]},
];

const CodeSnippetCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const current = codeSnippets[activeIndex];

  return (
    <div className='relative w-full max-w-full sm:max-w-[400px] min-h-[200px] mx-auto lg:mx-0 rounded-[20px] px-6 sm:px-8 py-6 sm:py-7 overflow-hidden'
      style={{
        background: 'rgba(145, 94, 255, 0.07)',
        border: '1px solid rgba(145, 94, 255, 0.4)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className='flex gap-2 mb-6'>
        <span className='w-3 h-3 rounded-full' style={{ background: '#e0605a' }} />
        <span className='w-3 h-3 rounded-full' style={{ background: '#e3b341' }} />
        <span className='w-3 h-3 rounded-full' style={{ background: '#3fb950' }} />
      </div>

      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ duration: 0.5 }}
      >
        {current.type === 'quote' ? (
          <p
            className='text-[18px] sm:text-[20px] leading-[1.7] font-medium italic whitespace-pre-line break-words'
            style={{ color: '#e6c8ff', fontFamily: "'Fira Code', monospace" }}
          >
            {current.text}
          </p>
        ) : (
          <pre
            className='text-[16px] sm:text-[19px] leading-[1.8] font-medium whitespace-pre-wrap break-words m-0'
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            {current.parts.map((part, i) => (
              <span key={i} style={{ color: part.c }}>{part.t}</span>
            ))}
          </pre>
        )}
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <div className='mt-4 flex flex-col lg:flex-row gap-10 items-start'>
      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className='text-secondary text-[17px] max-w-3xl leading-[30px] flex-1'>
        I am a second-year Electronics and Computer Engineering student at PICT, Pune, with a strong interest in web development and building useful real-world applications. I enjoy working with the MERN stack and love creating websites that are both user-friendly and efficient.

I like working on complete projects, where I can take an idea and turn it into something functional and visually appealing. I have participated in hackathons and explored technologies like blockchain and machine learning, which has helped me improve my problem-solving skills and learn how to work better in a team.

Apart from coding, I also have a creative side. I enjoy design, writing, and event management, which helps me think differently and bring new ideas into my work. I believe in learning step by step by building projects, and I am always trying to improve my skills and grow as a developer.

      </motion.p>

      <motion.div
      variants={fadeIn("left", "spring", 0.3, 0.75)}
      className='w-full lg:w-[400px] flex-shrink-0'>
        <CodeSnippetCard />
      </motion.div>
    </div>

    <div className='mt-20 flex flex-wrap gap-10  '>
      {services.map((service, index)=> (
        <ServiceCard key = {service.title} index = {index} {...service}/>
      ))}

    </div>

    </>
  )
}

export default SectionWrapper(About, "about")