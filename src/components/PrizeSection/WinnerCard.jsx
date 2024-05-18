import { motion } from "framer-motion";
import { positions, prizes } from "./constants";
import Reveal from "../Reveal";
import "./styles.css";

export default function WinnerCard({ winners, winner, index }) {

  const colors = [
    // "bg-[#8f7a04]",
    // "bg-[#9c9898]",
    // "bg-[#82500b]"
    "bg-[#ffffff33]",
    "bg-[#ffffff33]",
    "bg-[#ffffff33]"
  ];

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={{
        visible: () => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 1 + (winners.length - winner.place + 1),
            duration: 0.75,
            ease: "backInOut",
          },
        }),
        hidden: { opacity: 0, y: -100 },
      }}
      key={winner.id}
      className=""
    >
      <div
        // `xl:w-[450px] lg:w-[380px] md:w-[300px] w-80 flex items-center justify-center gap-10 xl:my-3 lg:my-3 md:my-0 my-0 rounded-lg shadow px-10 py-10 border border-white`
        className={`xl:w-[450px] lg:w-[420px] md:w-[380px] w-[70vw] flex xl:flex-row lg:flex-row md:flex-row sm:flex-row winnerslist items-center justify-evenly xl:gap-10 lg:gap-10 md:gap-5 gap-3 xl:my-3 lg:my-3 md:my-0 my-0 rounded-btn border-b-4 border-b-[#f84611] shadow xl:px-10 lg:px-10 px-2 py-10 ${colors[index]}`}
      >
        <img src={winner.avatar} alt="" className="shadow-sm w-11 h-11" />
        <Reveal>
          {/* //"font-bold text-white lg:text-3xl md:text-2xl" */}
          <div className="w-fit font-bold text-white text-3xl">
            {positions[winner.place]}
          </div>
        </Reveal>
        <Reveal>
          {/* //"w-fit text-sm flex-grow" */}
          <div className="w-fit text-sm flex-grow flex items-center justify-center">
            {/* //"text-white w-fit font-bold lg:text-3xl md:text-2xl" */}
            <p className="text-white w-fit font-bold text-2xl">
              {prizes[winner.place]}
            </p>
          </div>
        </Reveal>
      </div>
    </motion.div>
  );
}
