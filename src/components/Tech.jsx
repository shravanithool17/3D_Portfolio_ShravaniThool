// import {BallCanvas} from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";


// const Tech = () => {
//   return (
//   <div className="flex flex-row flex-wrap justify-center gap-10">
//     {technologies.map((technology)=>(
//     <div className="w-28 h-28 key={technolgy.name}">
//       <BallCanvas icon={technology.icon} />

//     </div>
//   ))}

//   </div>
//   )
// }

// export default Tech


import {BallCanvas} from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = () => {
  return (
  <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map((technology)=>(
    <div className="flex flex-col items-center gap-2" key={technology.name}>
      <div className="w-28 h-28">
        <BallCanvas icon={technology.icon} />
      </div>
      <p className="text-white text-[14px] font-medium text-center">{technology.name}</p>
    </div>
  ))}

  </div>
  )
}

export default SectionWrapper(Tech, "");