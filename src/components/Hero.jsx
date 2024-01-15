import { LOGOV8 } from "../assets";
import CountDown from "./CountDown";
import TextSpan from "./TestSpan";
//import { Link } from "react-router-dom";

const Hero = () => {
  const sentence = "48-hour national level offline hackathon".split("");
  return (
    <section className="mt-60 md:mt-[23rem]  flex flex-col items-center justify-center w-full tracking-wide realtive">
      {/* Hero Image */}
      <div className="flex-col mt-0 absolute top-36 py-10 px-5 h-[clac(screen-100vh)] flex items-center justify-center">
        <img className=" w-full max-w-2xl" src={LOGOV8} alt="" />
        <div className="text-[42px] font-sans text-white font-medium ">
          {sentence.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </div>
      </div>

      {/* Hero Content */}
      <div
        className="flex flex-col gap-24 py-40 w-full
       bg-[url('.\assets\heroBackgroundPattern.svg')] bg-no-repeat  bg-top bg-[length:72rem_90rem] md:bg-[length:80rem_94rem] lg:bg-[length:75rem_90rem] xl:bg-[length:100rem_90rem] 2xl:bg-[length:140rem_90rem]"
      >
        <div className="flex flex-col gap-10 mb-5">
          <div className="flex justify-center items-center lg:px-[5.25rem] sm:px-[3rem] px-[1.2rem]">
            <h2 className="text-white font-brand-medium text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] leading-normal lg:leading-[38px] max-w-[24rem] md:max-w-[38rem] lg:max-w-[52rem] text-center">
              Igniting a{" "}
              <span className="text-secondary font-brand-semiBold ">
                nationwide
              </span>{" "}
              innovative hackathon in its{" "}
              <span className="text-secondary font-brand-semiBold ">
                7th edition
              </span>{" "}
              . Unleashing creativity and pushing the boundaries of technology
              on a national stage
            </h2>
          </div>
          <div className="py-10">
            <CountDown />
          </div>

          <div className="flex justify-center items-center mt-10">
            <div className=" bg-[#F84611] hover:bg-primary border border-secondary hover:border-secondary hover:text-secondary py-4 px-4 rounded-full font-semibold text-lg cursor-pointer ">
              Register
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
