import Reveal from "./Reveal";
import {timeline} from "../../public/assets"

const Timeline = () => {
  return (
    <body className="antialiased font-sans bg-primary py-[90px]">
      <div>
        <Reveal>
          <h1 className="right-0 text-[64px] font-medium leading-tight text-white">
            Timeline
          </h1>
        </Reveal>
      </div>
      <div className=" mx-auto sm:px-8">
        <div className="lg:py-10">
        <div className="my-5 mt-14 flex flex-col lg:flex-row align-middle items-center ">
        <img src={timeline} alt="timeline" className="w-1/2 h-1/2 object-contain" />
        <p className="text-white md:mt-14 lg:text-[55px] sm:text-[40px] xxs:text-[30px] sm:mt-14 lg:ml-20 xxs:mt-14 font-medium flex-col lg:flex-row">Coming Soon</p>
        
        </div>
         
        </div>
      </div>
    </body>
  );
};

export default Timeline;
