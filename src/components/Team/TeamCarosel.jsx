import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CardWrapper } from "./TeamStyles";
import { TechTeam, DesignTeam, ContentTeam, SocialMediaTeam, DevfolioTeam, SponsorshipTeam, OperationalTeam } from "./items";
function TeamCarosel() {
    return (
        <Carousel>
            <div className="flex flex-wrap justify-evenly m-20">
                {TechTeam.map((TechTeam) => (
                    <CardWrapper>
                        <img
                            src={TechTeam.img}
                            alt={TechTeam.name}
                            // "object-cover !m-0 !p-0 object-top rounded-3xl h-36 w-36 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
                            className="object-contain rounded-3xl w-[60%] p-10"
                        />
                        {/* </div> */}

                        <div className="text-white flex flex-col gap-5">
                            <p className="font-bold text-2xl">
                                Rachit Agarwal
                            </p>
                            <p className="text-xl">
                                Team Team Core
                            </p>
                        </div>

                    </CardWrapper>
                ))}
            </div>
            <div className="flex flex-wrap justify-evenly m-20">
                {TechTeam.map((TechTeam) => (
                    <CardWrapper>
                        <img
                            src={TechTeam.img}
                            alt={TechTeam.name}
                            // "object-cover !m-0 !p-0 object-top rounded-3xl h-36 w-36 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
                            className="object-contain rounded-3xl w-[60%]"
                        />
                        {/* </div> */}

                        <div className="text-white flex flex-col gap-5">
                            <p className="font-bold text-2xl">
                                Rachit Agarwal
                            </p>
                            <p className="text-xl">
                                Team Team Core
                            </p>
                        </div>

                    </CardWrapper>
                ))}
            </div>
            <div className="flex flex-wrap justify-evenly m-20">
                {TechTeam.map((TechTeam) => (
                    <CardWrapper>
                        <img
                            src={TechTeam.img}
                            alt={TechTeam.name}
                            // "object-cover !m-0 !p-0 object-top rounded-3xl h-36 w-36 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
                            className="object-contain rounded-3xl w-[60%]"
                        />
                        {/* </div> */}

                        <div className="text-white flex flex-col gap-5">
                            <p className="font-bold text-2xl">
                                Rachit Agarwal
                            </p>
                            <p className="text-xl">
                                Team Team Core
                            </p>
                        </div>

                    </CardWrapper>
                ))}
            </div>
        </Carousel>
    );
}

export default TeamCarosel;