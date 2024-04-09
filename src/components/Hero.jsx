import CountDown from "./CountDown";
import TextSpan from "./TestSpan";
import Reveal from "./Reveal";
import AboutUs from "./AboutUs";
import React from "react";
// import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";

const Hero = () => {
  const sentence = "National-Level 48-Hour Hackathon".split("");
  const sentence1 = " by the Dept. of CSE, NMIT".split("");
  const sentence2 = "24th - 26th May, 2024".split("");
  const sentence3 = "Nitte Meenakshi Institute of Technology, Bengaluru".split(
    ""
  );
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <section className="mt-60 md:mt-[23rem]  flex flex-col items-center justify-center w-full tracking-wide realtive" id="/">
      {/* Hero Image */}
      <div className="flex-col mt-0 absolute top-36 py-10 px-5 h-[clac(screen-100vh)] flex items-center justify-center">
        <img className=" w-full max-w-2xl" src="/assets/LOGOV8.svg" alt="" />

        <div className="lg:text-[48px] sm:text-[30px] xs:text-[22px] xxs:text-[18px] font-sans text-white font-medium xs:mt-4 text-center ">
          {sentence.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </div>


        <div className="lg:text-[30px] sm:text-[30px] xs:text-[22px] xxs:text-[15px] font-sans text-white font-medium text-center ">
          {sentence1.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </div>


        <div className="lg:text-[30px] sm:text-[30px] xs:text-[22px] xxs:text-[15px] font-sans text-white font-medium text-center ">
          {sentence2.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </div>


        <div className="lg:text-[30px] sm:text-[29px] xs:text-[21px] xxs:text-[12px] font-sans text-white font-medium text-center mb-16">
          {sentence3.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </div>

        <div
          className="apply-button devfolio"
          data-hackathon-slug="nmithacks24"
          data-button-theme="dark"
          style={{ height: "44px", width: "312px" }}
        ></div>
      </div>

      {/* Hero Content */}
      <div
        className="flex flex-col gap-24 py-40 w-full
       bg-[url('/assets/heroBG.svg')] bg-no-repeat  bg-top bg-[length:72rem_90rem] md:bg-[length:80rem_94rem] lg:bg-[length:75rem_90rem] xl:bg-[length:100rem_90rem] 2xl:bg-[length:140rem_90rem] mt-20 sm:mt-10"
      >
        <div className="flex flex-col gap-10 mb-5 xxs:mt-20 sm:mt-[145px] lg:mt-[145px] md:mt-[50px]">
          <div className="flex justify-center items-center lg:px-[5rem] sm:px-[2rem] px-[2rem] sm:mt-[5rem]">

            <h2 className="text-white font-brand-medium text-[1.2rem] md:text-[1.5rem] lg:text-[2.5rem] leading-normal lg:leading-[45px] max-w-[24rem] md:max-w-[38rem] lg:max-w-[54rem] text-center">
              A single spark can{" "}
              <span className="text-secondary font-semiBold ">ignite</span> an{" "}
              <span className="text-secondary font-semiBold ">inferno</span>{" "}
              of possibility.
            </h2>

          </div>
          <div className="flex justify-center items-center lg:px-[4rem] sm:px-[3rem] px-[1.2rem]">

            <h2 className="text-white font-brand-medium text-[1.2rem] md:text-[1.5rem] lg:text-[2.5rem] leading-normal lg:leading-[38px] max-w-[24rem] md:max-w-[38rem] lg:max-w-[52rem] text-center">
              Bringing you the{" "}
              <span className="text-secondary font-semiBold ">
                7th edition
              </span>{" "}
              of our hackathon forged by fire. This is{" "}
              <span className="text-secondary font-semiBold ">
                NMIT Hacks 2024
              </span>
              .
            </h2>

          </div>
          {/* <div className="py-10 lg:py-5 sm:py-5">
            <CountDown />
          </div> */}
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="text-white mb-5">
              To view our Core Members of this club please click on the below 👇 button
            </div>
            <div className=" flex justify-center bg-[#F84611] hover:bg-primary border border-secondary hover:border-secondary hover:text-secondary py-4 px-4 rounded-full font-semibold text-lg cursor-pointer">
              <button onClick={handleScroll}>
                <img src="/assets/next.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
