import { logo } from "../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="mt-60 md:mt-[23rem]  flex flex-col items-center justify-center gap-20 w-full tracking-wide">
      {/* Hero Image */}
      <div className="flex items-center justify-center px-14">
        <img className=" w-full max-w-sm align-baseline" src={logo} alt="" />
      </div>

      {/* Hero Content */}
      <div
        className="flex flex-col gap-24 py-40 w-full
       bg-[url('/assets/heroBackgroundPattern.svg')] bg-no-repeat  bg-top bg-[length:72rem_90rem] md:bg-[length:80rem_94rem] lg:bg-[length:75rem_90rem] xl:bg-[length:100rem_90rem] 2xl:bg-[length:140rem_90rem]"
      >
        <div className="flex flex-col gap-10">
          <div className="flex justify-center items-center lg:px-[5.25rem] sm:px-[3rem] px-[1.2rem]">
            <h2 className="text-white font-brand-medium text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] leading-normal lg:leading-[38px] max-w-[24rem] md:max-w-[38rem] lg:max-w-[52rem] text-center">
              A full suite of{" "}
              <span className="text-[#8FFBD4] font-brand-semiBold ">
                cloud-native, AI-powered
              </span>{" "}
              wealthtech solutions designed to strip away the complexities of
              wealth management and deliver{" "}
              <span className="text-[#8FFBD4] font-brand-semiBold ">
                differentiated experiences, insights, and new opportunities
              </span>{" "}
              for your business.
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 text-white 2xl:px-[14rem] lg:px-[5.25rem] sm:px-[3rem] px-[1.2rem] py-[6rem] text-center">
            <div className="w-full flex justify-around items-center bg-[#252729]  px-8 py-[2.38rem] gap-6 shadow rounded-md">
              <p className="w-full  text-white font-brand-medium text-[1.2rem]  ">
                Closer to your clients.
              </p>
            </div>
            <div className="w-full flex items-center bg-[#252729]  px-8 py-[2.38rem] gap-6 shadow rounded-md">
              <p className="w-full  text-white font-brand-medium text-[1.2rem] ">
                Closer to game-changing insights.
              </p>
            </div>
            <div className=" w-full flex items-center bg-[#252729] px-8 py-[2.38rem] gap-6 shadow rounded-md">
              <p className="w-full  text-white font-brand-medium text-[1.2rem] ">
                Closer to differentiated financial products
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className=" bg-[#8FFBD4] hover:bg-[#8FFBD4] py-4 px-4 rounded-full ">
              <img src="" alt="about us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
