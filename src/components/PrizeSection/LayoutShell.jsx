import React from "react";
import "./styles.css";
import Reveal from "../Reveal";

export default function LayoutShell({ children }) {
  return (
    <div className="App py-[90px]">
      <Reveal>
        <h1 className="right-0 text-[64px] font-medium leading-tight text-white">
          Prizes
        </h1>
      </Reveal>
      <main className="container relative w-[100%] pb-8 mx-auto">
        <div className="w-[100%] mx-auto">{children}</div>
      </main>
    </div>
  );
}
