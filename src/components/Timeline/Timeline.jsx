import "./timelineStyles.css";
import Reveal from "../Reveal";
import { timeline } from "../../../public/assets"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { styles } from "./style"
import { textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { Day1, Day2, Day3 } from "./TimelineContent.js"
import { useState, useEffect } from "react";

const ExperienceCard = ({ experience }) => {

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ffffff33",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #f84611" }}
      date={experience.date}
      textClassName="textClass"
      dateClassName="dateClass"
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
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
            className='text-white-100 text-[14px] pl-1 text-lg tracking-wider'
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
          <div className="lg:py-10 py-10">
            {/* <div className="my-5 mt-14 flex flex-col lg:flex-row align-middle items-center justify-between ">
              <img src={timeline} alt="timeline" className="w-1/2 h-1/2 object-contain" />
              <p className="text-white md:mt-14 lg:text-[55px] sm:text-[40px] xxs:text-[30px] sm:mt-14 lg:ml-20 xxs:mt-14 font-medium flex-col lg:flex-row">Coming Soon</p>

            </div> */}
            <motion.div variants={textVariant()}>
              <div className="flex flex-row justify-evenly items-center ">
                <button className=" border-2 border-gray-100 rounded-md" >
                  <p className={` ${active === Day1 ? styles.sectionSubText2 : styles.sectionSubText}`} onClick={() => handleSetActive(Day1)}> Day 1</p>
                </button>
                <button className=" border-2 border-gray-100 rounded-md" >
                  <p className={`${active == Day2 ? styles.sectionSubText2 : styles.sectionSubText}`} onClick={() => handleSetActive(Day2)} > Day 2</p>
                </button>
                <button className=" border-2 border-gray-100 rounded-md" >
                  <p className={`${active == Day3 ? styles.sectionSubText2 : styles.sectionSubText}`} onClick={() => handleSetActive(Day3)} > Day 3</p>
                </button>


              </div>
            </motion.div>
            <div className="mt-20 flex flex-col">
              <VerticalTimeline
                lineColor="#f84611"
                className="verticalTimeline">
                {
                  active.map((content, index) => (
                    <ExperienceCard key={`timeline-point-${index}`} experience={content}
                      style={{ borderBottom: "1px solid #f84611" }} />
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


