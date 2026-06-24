import {motion} from 'framer-motion';
import { useState } from 'react';

import {styles} from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn , textVariant } from '../utils/motion';
import { achievements } from '../constants';

const AchievementCard = ({
  index, title, organization, date, description, certificate, onViewCertificate
})=>(
  <motion.div variants={fadeIn("", "spring", index *0.5,0.75)}
  className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>

    <p className='text-[#915eff] font-black text-[40px]'>🏅</p>

    <div className='mt-1'>
     <p className='text-white font-bold text-[20px]'>{title}</p>
     <p className='mt-2 text-secondary text-[14px] tracking-wider'>{description}</p>

     <div className='mt-7 flex justify-between items-center gap-1'>
      <div className='flex-1 flex flex-col'>
        <p className='text-white font-medium text-[16px]'>
          {organization}
        </p>
        <p className='mt-1 text-secondary text-[12px]'>
          {date}
        </p>
      </div>
     </div>

     {certificate && (
       <button
         onClick={() => onViewCertificate(certificate)}
         className='mt-5 px-4 py-2 rounded-xl bg-tertiary text-white text-[13px] font-medium hover:bg-[#915eff] transition-colors cursor-pointer'
       >
         View Certificate
       </button>
     )}
    </div>

  </motion.div>
)

const Achievements = () => {
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I have achieved</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>

      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {achievements.map((achievement , index) => (
          <AchievementCard
          key={achievement.title}
          index={index}
          {...achievement}
          onViewCertificate={setActiveCertificate}
          />

        ))}
      </div>

      {activeCertificate && (
        <div
          onClick={() => setActiveCertificate(null)}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5'
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className='relative w-full max-w-3xl bg-tertiary rounded-2xl p-3'
          >
            <button
              onClick={() => setActiveCertificate(null)}
              className='absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center text-black font-bold text-lg'
            >
              &times;
            </button>
            <img
              src={activeCertificate}
              alt="Certificate"
              className='w-full max-h-[80vh] object-contain rounded-xl'
            />
          </div>
        </div>
      )}

    </div>
  )
}

export default SectionWrapper(Achievements, "");