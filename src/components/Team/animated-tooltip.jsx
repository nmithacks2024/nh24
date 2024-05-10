import React, { useState } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import TeamCarosel from "./TeamCarosel";
import PropTypes from "prop-types"; // Import PropTypes
import { CardWrapper } from "./TeamStyles";
import { TechTeam, DesignTeam, ContentTeam, SocialMediaTeam, DevfolioTeam, SponsorshipTeam, OperationalTeam } from "./items";
import Reveal from "../Reveal";
import InfiniteLooper from "../infiniteLooper";

const AnimatedTooltip = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      <div className="py-[90px]"></div>
      <Reveal>
        <h1 className="right-0 text-[64px] font-medium leading-tight text-white mb-10">
          Our Team
        </h1>
      </Reveal>
      <div className="flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold text-center w-fit border border-3 px-20 py-10 rounded-3xl border-white">
          Technical Team
        </h1>
      </div>
      
   
      <div className="flex flex-wrap justify-evenly mb-24">

{TechTeam.map((TechTeam) => (
  <div
    className="-mr-4 relative group cursor-pointer mt-20"
    key={TechTeam.name}
    onMouseEnter={() => setHoveredIndex(TechTeam.id)}
    onMouseLeave={() => setHoveredIndex(null)}
  >
    {hoveredIndex === TechTeam.id && (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.6 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 10,
          },
        }}
        exit={{ opacity: 0, y: 20, scale: 0.6 }}
        style={{
          translateX: translateX,
          rotate: rotate,
          whiteSpace: "nowrap",
        }}
        className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
      >
        <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[5px] " />
        <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] " />
        <div className="font-bold text-[1.25rem] text-secondary relative z-30 text-base">
          {TechTeam.name}
        </div>
        <div className="text-white text-[1rem]">{TechTeam.designation}</div>
      </motion.div>
    )}

    <img
      onMouseMove={handleMouseMove}
      height={200}
      width={200}
      src={TechTeam.img}
      alt={TechTeam.name}
      className="object-cover !m-0 !p-0 object-top rounded-full h-36 w-36 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
    />
  </div>


))}
</div>
        <div>
        
        </div>
    
      {/* Design */}
      <div  className="flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold text-center w-fit border border-3 px-20 py-10 rounded-3xl border-white">
          Design Team
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly mb-24 mt-20">

        {DesignTeam.map((DesignTeam) => (
          <div
            className="-mr-4 relative group cursor-pointer"
            key={DesignTeam.name}
            onMouseEnter={() => setHoveredIndex(DesignTeam.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === DesignTeam.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-[1.25rem] text-secondary relative z-30 text-base">
                  {DesignTeam.name}
                </div>
                <div className="text-white text-[1rem]">{DesignTeam.designation}</div>
              </motion.div>
            )}

            <img
              onMouseMove={handleMouseMove}
              height={200}
              width={200}
              src={DesignTeam.img}
              alt={DesignTeam.name}
              className="object-cover !m-0 !p-0 object-top rounded-full h-36 w-36 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
            />
          </div>


        ))}
      </div>
      {/* Social Media */}
      <div className="flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold text-center w-fit border border-3 px-20 py-10 rounded-3xl border-white">
          Social Team
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly mb-24 mt-20">

        {SocialMediaTeam.map((SocialmediaTeam) => (
          <div
            className="-mr-4 relative group cursor-pointer"
            key={SocialmediaTeam.name}
            onMouseEnter={() => setHoveredIndex(SocialmediaTeam.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === SocialmediaTeam.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-[1.25rem] text-secondary relative z-30 text-base">
                  {SocialmediaTeam.name}
                </div>
                <div className="text-white text-[1rem]">{SocialmediaTeam.designation}</div>
              </motion.div>
            )}

            <img
              onMouseMove={handleMouseMove}
              height={200}
              width={200}
              src={SocialmediaTeam.img}
              alt={SocialmediaTeam.name}
              className="object-cover !m-0 !p-0 object-top rounded-full h-36 w-36 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
            />
          </div>


        ))}
      </div>
      {/* content */}
      <div className="flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold text-center w-fit border border-3 px-20 py-10 rounded-3xl border-white">
          Content Team
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly mb-24 mt-20">

        {ContentTeam.map((ContentTeam) => (
          <div
            className="-mr-4 relative group cursor-pointer"
            key={ContentTeam.name}
            onMouseEnter={() => setHoveredIndex(ContentTeam.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === ContentTeam.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col ContentTeams-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent  " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-[1.25rem] text-secondary relative z-30 text-base">
                  {ContentTeam.name}
                </div>
                <div className="text-white text-[]1rem">{ContentTeam.designation}</div>
              </motion.div>
            )}

            <img
              onMouseMove={handleMouseMove}
              height={200}
              width={200}
              src={ContentTeam.img}
              alt={ContentTeam.name}
              className="object-cover !m-0 !p-0 object-top rounded-full h-36 w-36 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
            />
          </div>


        ))}
      </div>
      {/* Devfolio */}
      <div className="flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold text-center w-fit border border-3 px-20 py-10 rounded-3xl border-white">
          Devfolio Team
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly mb-24 mt-20">

        {DevfolioTeam.map((DevfolioTeam) => (
          <div
            className="-mr-4 relative group cursor-pointer"
            key={DevfolioTeam.name}
            onMouseEnter={() => setHoveredIndex(DevfolioTeam.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === DevfolioTeam.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col DevfolioTeams-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-[1.25rem] text-secondary relative z-30 text-base">
                  {DevfolioTeam.name}
                </div>
                <div className="text-white text-[1rem]">{DevfolioTeam.designation}</div>
              </motion.div>
            )}

            <img
              onMouseMove={handleMouseMove}
              height={200}
              width={200}
              src={DevfolioTeam.img}
              alt={DevfolioTeam.name}
              className="object-cover !m-0 !p-0 object-top rounded-full h-36 w-36 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
            />
          </div>


        ))}
      </div>
      {/* Sponsors */}
      <div className="flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold text-center w-fit border border-3 px-20 py-10 rounded-3xl border-white">
          Sponsor Team
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly mb-24 mt-20">

        {SponsorshipTeam.map((SponsorTeam) => (
          <div
            className="-mr-4 relative group cursor-pointer"
            key={SponsorTeam.name}
            onMouseEnter={() => setHoveredIndex(SponsorTeam.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === SponsorTeam.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col SponsorTeams-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-[1.25rem] text-secondary relative z-30 text-base">
                  {SponsorTeam.name}
                </div>
                <div className="text-white text-[1rem]">{SponsorTeam.designation}</div>
              </motion.div>
            )}

            <img
              onMouseMove={handleMouseMove}
              height={200}
              width={200}
              src={SponsorTeam.img}
              alt={SponsorTeam.name}
              className="object-cover !m-0 !p-0 object-top rounded-full h-36 w-36 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
            />
          </div>


        ))}
      </div>
      {/* ops */}
      <div className="flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold text-center w-fit border border-3 px-20 py-10 rounded-3xl border-white ">
          Operational Team
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly mt-20">

        {OperationalTeam.map((OperationalTeam) => (
          <div
            className="-mr-4 relative group cursor-pointer "
            key={OperationalTeam.name}
            onMouseEnter={() => setHoveredIndex(OperationalTeam.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === OperationalTeam.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col OperationalTeams-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-[1.25rem] text-secondary relative z-30 text-base">
                  {OperationalTeam.name}
                </div>
                <div className="text-white text-[1rem]">{OperationalTeam.designation}</div>
              </motion.div>
            )}

            <img
              onMouseMove={handleMouseMove}
              height={200}
              width={200}
              src={OperationalTeam.img}
              alt={OperationalTeam.name}
              className="object-cover !m-0 !p-0 object-top rounded-full h-36 w-36 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500 "
            />
          </div>


        ))}
      </div>

    </>
  );
};
AnimatedTooltip.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      designation: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AnimatedTooltip;