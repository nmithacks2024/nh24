import podiumData from "./data";
import LayoutShell from "./LayoutShell";
import Podium from "./Podium";
import WinnersList from "./WinnersList";
import { useWindowSize } from "react-use";
import { useState, useEffect, useRef } from "react";
import Reveal2 from "../Reveal2";

function PrizeSection() {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });
  const { width } = useWindowSize();
  const winners = [...podiumData]
    .sort((a, b) => a.rank - b.rank)
    .map((winner, place) => ({ ...winner, place }));

  return (
    <div ref={ref} className="relative">
      <LayoutShell>
        <div className=" flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between items-center md:gap-0 gap-10 min-w-[100%] ">
          <div className="xl:min-w-[50%] lg:min-w-[50%] md:min-w-[50%] min-w-[100%] flex justify-center items-center">
            <Reveal2>
              <Podium winners={winners} />
            </Reveal2>
          </div>
          <div className="xl:min-w-[50%] lg:min-w-[50%] md:min-w-[50%] min-w-[100%] flex justify-center items-center">
            <Reveal2>
              <WinnersList winners={winners} />
            </Reveal2>
          </div>
        </div>
      </LayoutShell>
    </div>
  );
}

export default PrizeSection;
