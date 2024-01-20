import styled from "styled-components";
import New2CardTrack from "./TracksCard";
import Reveal from "../Reveal";
function Tracks() {
  return (
    <div className="flex flex-col gap-10 bg-[#101010] py-[90px] font-sans">
      <div>
        <Reveal>
          <h1 className="right-0 text-[64px] font-medium leading-tight text-white">
            Tracks
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="text-white justify-center items-center font-brand-medium text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] leading-normal lg:leading-[38px] text-center">
            This edition, <span className="text-secondary">sparks</span> will
            fly... We bring you the{" "}
            <span className="text-secondary font-brand-semiBold">
              hottest tracks
            </span>
            !
          </h2>
        </Reveal>
      </div>
      <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-center items-center xl:gap-10 lg:gap-3 gap-2">
        <New2CardTrack
          title="Game Dev"
          text="Bring virtual worlds to life, crafting captivating and interactive gaming experiences."
          imgUrl="./assets/game.png"
        />
        <New2CardTrack
          title="IOT"
          text="Witness the convergence of software and hardware to implement solutions that leverage the power of IoT."
          imgUrl="./assets/iot.png"
        />
        <New2CardTrack
          title="AI & ML"
          text="Push the boundaries of intelligent systems in the cutting-edge world of AI & ML. "
          imgUrl="./assets/ai.png"
        />
      </div>
      <div className="flex justify-center items-center xl:gap-10 lg:gap-9 gap-2">
        <New2CardTrack
          title="BlockChain"
          text="Create secure, transparent, and transformative applications that harness the power of blockchain networks."
          imgUrl="./assets/blockchain.png"
        />
        <New2CardTrack
          title="Open Innovation"
          text="Embrace the freedom to explore any tech-frontier, fostering groundbreaking ideas that transcend traditional boundaries."
          imgUrl="./assets/oi.png"
        />
      </div>
    </div>
  );
}

export default Tracks;

const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;
