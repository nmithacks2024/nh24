// import { useState, useEffect } from 'react'
import styled from "styled-components";
import New2CardTrack from "./TracksCard";
import Reveal from "../Reveal";
import { ai, blockchain, game, iot, oi } from "../../../public/assets";

function Tracks() {
  return (
    <div className="flex flex-col gap-10 pt-5 pb-[100px] bg-[#101010]">
      <Reveal>
        <h1 className="right-0 text-[64px] font-medium leading-tight text-white">
          Tracks
        </h1>
      </Reveal>
      <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-center items-center xl:gap-10 lg:gap-3 gap-4">
        <New2CardTrack
          title="Game Dev"
          text="Create games that intrigue and bring alive a crowd with our brand new track."
          imgUrl="\assets\game.png"
        />
        <New2CardTrack
          title="IOT"
          text="Connect several devices together and help them communicate efficiently to help the world in your own, unique way."
          imgUrl="\assets\iot.png"
        />
        <New2CardTrack
          title="AI & ML"
          text="Simulate human intelligence and show-off various applications that make AI&ML one of the most popular domains in computer science."
          imgUrl="\assets\ai.png"
        />
      </div>
      <div className="flex justify-center items-center xl:gap-10 lg:gap-9 gap-2">
        <New2CardTrack
          title="BlockChain"
          text="Use the blockchain to create innovative solutions by bringing together several technologies here."
          imgUrl="\assets\blockchain.png"
        />
        <New2CardTrack
          title="Open Innovation"
          text="Freedom to build solutions to your own problems and truly show the rest your creative prowess."
          imgUrl="\assets\oi.png"
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
