import React from "react";
import InfiniteLooper from "./infiniteLooper";
import "./infiniteLooper.css";
import Reveal from "./Reveal";
import { facebook, instagram, linkedin, twitter } from "../../public/assets";
import {
  Arnav, Ashwin, Huvishka, Karthik, LoviaEB, Nitin, Pramod, Pranay, Rachit, Rashi_Himatsingka, Rohan_G, Rohan_N, Sai_uttej, Shravan, Shreya, Smitha, vikitha, Yuvika,
} from "D:/v++/nh24/public/assets/index.js";
function Footer() {
  const [memberName, setMemberName] = React.useState(null);
  const [onHover, setHover] = React.useState(false);
  const memberArray = [
    {
      name: "Amey",
      position: "Lead- Operation Team",
      emoji: "👨‍🎓",
      image: Arnav,
    },
    {
      name: "Ankith",
      position: "Lead- Sponsorship Team",
      emoji: "🍿",
      image: <img src={"./assets/logo.png"} />,
    },
    {
      name: "Rachit",
      position: "Core Member- Tech Team",
      emoji: "💻",
      image: Rachit,
    },
    {
      name: "Arnav",
      position: "Lead- Tech Team",
      emoji: "🍀",
      image: Arnav,
    },
    {
      name: "Huvishka",
      position: "Lead- Social Media Team",
      emoji: "✨️",
      image: Huvishka,
    },
    {
      name: "Sai Uttej",
      position: "Core Member- Sponsorship Team",
      emoji: "🕺",
      image: Sai_uttej,
    },
    {
      name: "Karthik",
      position: "Lead- Devfolio Team",
      emoji: "🔥",
      image: Karthik,
    },
    {
      name: "Lovia",
      position: "Core Member- Design Team",
      emoji: "💅",
      image: LoviaEB,
    },
    {
      name: "Sai Shravan",
      position: "Core Member- Design Team",
      emoji: "🔟🐐⚽️",
      image: Shravan,
    },
    {
      name: "Pramod",
      position: "Core Member- Sponsorship Team",
      emoji: "💦",
      image: Pramod,
    },
    {
      name: "Pranay ",
      position: "Lead- Content Team ",
      emoji: "🗿",
      image: Pranay,
    },
    {
      name: "Yuvika ",
      position: "Core Member- Content Team",
      emoji: "🦋",
      image: Yuvika,
    },
    {
      name: "Rashi",
      position: "Lead- Design Team ",
      emoji: "😪",
      image: Rashi_Himatsingka,
    },
  ];

  const getMemberName = (e) => {
    console.log(e);
    if (e) {
      setHover(true);
    } else {
      setHover(false);
    }
    setMemberName(e);
  };

  return (
    <div className="pt-[90px]">
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
          <div className="text-white rounded-full border px-10 py-5 font-bold text-xl border-1 border-secondary">
            <a href="https://devfolio.co/code-of-conduct">
              <button>Code of Conduct</button>
            </a>
          </div>
          {/* <div className="text-white flex xl:flex-row lg:flex-row md:flex-row flex-col">
            <p className="text-center">You can Email us at:</p>
            <a href="mailto: hackathon@nmit.ac.in" className="px-2 font-bold">
              hackathon@nmit.ac.in
            </a>
          </div> */}
          <div className="text-white flex xl:flex-row lg:flex-row flex-col">
            <div className="text-center">
              For event-related queries, contact:
            </div>
            <a
              href="mailto: hackathon@nmit.ac.in"
              className="px-2 font-bold text-center"
            >
              hackathon@nmit.ac.in
            </a>
          </div>
          <div className="text-center mb-5">
            {memberName === null ? (
              <div>Made with 🧡 By NMIT Hacks </div>
            ) : (
              <div className="flex xl:flex-row lg:flex-row flex-col gap-3">
                Made with <p>{memberName.emoji}</p> <p>with</p>{" "}
                <p>{memberName.name},</p>
                <p>{memberName.position}</p>
              </div>
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
            memberArray={memberArray}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
