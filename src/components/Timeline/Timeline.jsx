import Reveal from "../Reveal";
import { timeline } from "../../../public/assets"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { styles } from "./style"
import { textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { Day1, Day2, Day3 } from "./TimelineContent.js"
import { useState } from "react";
const ExperienceCard = ({ experience }) => {

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
    // icon={
    //   <div className='flex justify-center items-center w-full h-full'>
    //     <img
    //       src={experience.icon}
    //       alt={experience.company_name}
    //       className='w-[60%] h-[60%] object-contain'
    //     />
    //   </div>
    // }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Timeline = () => {


  const [active, setActive] = useState(Day1);
  const handleSetActive = (day) => {
    setActive(day);
  };

  return (
    <>
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
            <div className="my-5 mt-14 flex flex-col lg:flex-row align-middle items-center justify-between ">
              <img src={timeline} alt="timeline" className="w-1/2 h-1/2 object-contain" />
              <p className="text-white md:mt-14 lg:text-[55px] sm:text-[40px] xxs:text-[30px] sm:mt-14 lg:ml-20 xxs:mt-14 font-medium flex-col lg:flex-row">Coming Soon</p>

            </div>



            <motion.div variants={textVariant()}>
              <div className="flex flex-row justify-evenly items-center ">
                <button className=" border border-gray-100 rounded-md" >
                  <p className={styles.sectionSubText} onClick={() => handleSetActive(Day1)}> Day 1</p>
                </button>
                <button className=" border border-gray-100 rounded-md" >
                  <p className={styles.sectionSubText} onClick={() => handleSetActive(Day2)} > Day 2</p>
                </button>
                <button className=" border border-gray-100 rounded-md" >
                  <p className={styles.sectionSubText} onClick={() => handleSetActive(Day3)} > Day 3</p>
                </button>


              </div>
            </motion.div>
            <div className="mt-20 flex flex-col">
              <VerticalTimeline>
                {
                  active.map((content, index) => (
                    <ExperienceCard key={`timeline-point-${index}`} experience={content} />
                  ))
                }
              </VerticalTimeline>

            </div>


          </div>
        </div>
      </body>
    </>
  );
};

export default Timeline;


