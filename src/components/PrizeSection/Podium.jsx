import React from 'react';
import PodiumStep from './PodiumStep';

export default function Podium({ winners }) {
    const podium = [2, 0, 1]
        .reduce((podiumOrder, position) => [...podiumOrder, winners[position]], [])
        .filter(Boolean);

    return (
        <div
        // grid grid-flow-col-dense gap-10 mt-0 justify-center justify-items-center place-content-center content-end items-end border-b 
            className="grid border-b-4 rounded-btn border-b-[#f84611] h-[100%] grid-flow-col-dense xl:gap-10 lg:gap-10 md:gap-10 gap-10 mt-0 justify-center justify-items-center place-content-center content-end items-end"
            style={{ height: "fit-content" }}
        >
            {podium.map((winner, index) => (
                <PodiumStep key={winner.id} podium={podium} winner={winner} index={index} />
            ))}
        </div>
    );
}
