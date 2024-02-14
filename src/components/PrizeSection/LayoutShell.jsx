import React from "react";
import "./styles.css";
import Reveal from "../Reveal";

export default function LayoutShell({ children }) {
  return (
    // App py-[90px]
    <div className="App">
      <Reveal>
        <h1 className="right-0 text-[64px] font-medium leading-tight text-white mb-20">
          Prizes
        </h1>
      </Reveal>
      {/* //container relative w-[100%] pb-8 mx-auto */}
      <main className="container relative w-[100%] pb-8 mx-auto">
        {/* //w-[100%] mx-auto */}
        <div className="w-[100%] mx-auto flex flex-col gap-20">{children}</div>
      </main>
    </div>
  );
}
