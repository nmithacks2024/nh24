import React from "react";
import InfiniteLooper from "./infiniteLooper";
import "./infiniteLooper.css";
import Reveal from "./Reveal";
import { facebook, instagram, linkedin, twitter } from "../../public/assets";

function Footer() {
  const [memberName, setMemberName] = React.useState(null);
  const [onHover, setHover] = React.useState(false);

  const getMemberName = (e) => {
    if (e) {
      setHover(true);
    } else {
      setHover(false);
    }
    setMemberName(e);
  };

  return (
    <div className="">
      <Reveal>
        <h1 className="right-0 text-[64px] font-medium leading-tight text-white">
          Contact Us
        </h1>
      </Reveal>
      <div className="h-fit flex flex-col gap-1 bottom-0 bg-[#101010] text-white items-center pt-5 pb-5">
        <div className="flex justify-center items-center gap-5">
          <div className="w-1/2 h-[100px] flex justify-center items-center">
            <img src="/assets/nmitLogo.png" alt="nmit" />
          </div>
          <div className="scale-50 w-1/2 flex justify-center items-center h-[200px]">
            <img src="/assets/logo2.png" alt="nmit hacks" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex  justify-center items-center">
            You can visit us 😊
          </div>
          <div className="flex gap-5">
            <div className="socialIcons border-2 border-white p-3">
              <a href="https://www.instagram.com/nmit_hacks/?hl=en">
                <img src={instagram} alt="" />
              </a>
            </div>
            <div className="socialIcons border-2 border-white p-3">
              <a href="">
                <img src={facebook} alt="" />
              </a>
            </div>
            <div className="socialIcons border-2 border-white p-3">
              <a href="">
                <img src={linkedin} alt="" />
              </a>
            </div>
            <div className="socialIcons border-2 border-white p-3">
              <a href="">
                <img src={twitter} alt="" className="" />
              </a>
            </div>
          </div>
          <div className="text-center mb-5">
            {memberName === null ? (
              <div>Made with 🧡 By NMIT Hacks </div>
            ) : (
              <div> Made with 🧡 with {memberName}</div>
            )}
          </div>
        </div>
        {/* <div className="text-3xl font-bold">Team</div>
        <div className="text-2xl font-bold h-10">{memberName}</div> */}
        <div className="looperContainer w-[70%] mx-auto h-[80px]">
          <InfiniteLooper
            memberName={memberName}
            onHover={onHover}
            getMemberName={getMemberName}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
