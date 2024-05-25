import React, { Component, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CardWrapper } from "./TeamStyles";
import { left, right } from '../../../public/assets/index.js';
import { linkedin } from '../../../public/assets';
import { instagram } from '../../../public/assets';
import { TechTeam, DesignTeam, ContentTeam, SocialMediaTeam, DevfolioTeam, SponsorshipTeam, OperationalTeam } from "./items";
function TeamCarosel() {
    const [onHover, setOnHover] = useState(null);
    const [showArrows, setShowArrows] = useState(true);
    const [pauseLoop, setPauseLoop] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setShowArrows(window.innerWidth > 600);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const renderArrowPrev = (clickHandler, hasPrev, label) => (
        hasPrev && showArrows && (
            <div className='arrow flex justify-center items-center' aria-label={label}>
                <button className=' w-fit flex items-center justify-center rounded p-2 border border-1 border-white' onClick={clickHandler}>
                    <img src={left} alt="" />
                </button>
            </div>
        )
    );

    const renderArrowNext = (clickHandler, hasNext, label) => (
        hasNext && showArrows && (
            <div className='arrow flex justify-center items-center' aria-label={label}>
                <button className='w-fit flex items-center justify-center rounded p-2 border border-1 border-white' onClick={clickHandler}>
                    <img src={right} alt="" />
                </button>
            </div>
        )
    );
    
    const handleHoverEnter = (i) => {
        setOnHover(i)
        setPauseLoop(true);
    }
    const handleHoverLeave = () => {
        setOnHover(null)
        setPauseLoop(false);
    }

    return (
        <Carousel
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            renderArrowPrev={renderArrowPrev}
            renderArrowNext={renderArrowNext}
            autoPlay={!pauseLoop}
            stopOnHover={pauseLoop}
            swipeable
            emulateTouch={true}
            infiniteLoop
            showStatus={false}
            interval={2000}
        >
            <div className="flex flex-wrap justify-center items-center my-16 flex-col gap-10">
                <div className='text-4xl my-10 text-white px-5 py-3 justify-center text-center rounded-xl w-fit flex font-bold border border-1 border-white'>
                    Tech Team
                </div>
                <div className='flex justify-center items-center xl:gap-10 md:gap-5 lg:gap-7 sm:gap-4 xs:gap-4 xxs:gap-2 flex-wrap'>
                    {TechTeam.map((TechTeam, i) => (
                        <CardWrapper
                            onMouseEnter={() => handleHoverEnter(i)}
                            onMouseLeave={handleHoverLeave}
                            className="relative overflow-hidden"
                        >
                            <div className='w-[80%]'>
                                <img
                                    src={TechTeam.img}
                                    alt={TechTeam.name}
                                    className={`object-contain rounded-2xl transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}
                                />
                            </div>

                            <div className="text-white flex flex-col gap-2 transition-transform">
                                <p className={`font-bold xl:text-2xl md:text-2xl lg:text-2xl sm:text-sm xxs:text-sm ease-in-out transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}>
                                    {TechTeam.name}
                                </p>
                                <p className={`xl:text-lg md:text-lg lg:text-lg sm:text-xs xxs:text-xs ease-in-out transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}>
                                    {TechTeam.designation}
                                </p>
                            </div>
                            <div className={`absolute bottom-0 transition-opacity transform ${onHover === i ? 'opacity-100 translate-y-[-0.5rem]' : 'opacity-0'}`}>
                                <div className='flex gap-5'>
                                    {TechTeam.linkedin && (
                                        <a href={TechTeam.linkedin}>
                                            <img src={linkedin} alt="" />
                                        </a>
                                    )}
                                    {TechTeam.instagram && (
                                        <a href={TechTeam.instagram}>
                                            <img src={instagram} alt="" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </CardWrapper>


                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center my-16 flex-col gap-10">
                <div className='text-4xl my-10 text-white px-5 py-3 justify-center text-center rounded-xl w-fit flex font-bold border border-1 border-white'>
                    Operational Team
                </div>
                <div className='flex justify-center items-center xl:gap-10 md:gap-5 lg:gap-7 sm:gap-4 xs:gap-4 xxs:gap-2 flex-wrap'>
                    {OperationalTeam.map((TechTeam, i) => (
                        <CardWrapper
                            onMouseEnter={() => handleHoverEnter(i)}
                            onMouseLeave={handleHoverLeave}
                            className="relative overflow-hidden"
                        >
                            <div className='w-[80%]'>
                                <img
                                    src={TechTeam.img}
                                    alt={TechTeam.name}
                                    className={`object-contain rounded-2xl transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}
                                />
                            </div>

                            <div className="text-white flex flex-col gap-2 transition-transform">
                                <p className={`font-bold xl:text-2xl md:text-2xl lg:text-2xl sm:text-sm xxs:text-sm ease-in-out transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}>
                                    {TechTeam.name}
                                </p>
                                <p className={`xl:text-lg md:text-lg lg:text-lg sm:text-xs xxs:text-xs ease-in-out transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}>
                                    {TechTeam.designation}
                                </p>
                            </div>

                            <div className={`absolute bottom-0 transition-opacity transform ${onHover === i ? 'opacity-100 translate-y-[-0.5rem]' : 'opacity-0'}`}>
                                <div className='flex gap-5'>
                                    {TechTeam.linkedin && (
                                        <a href={TechTeam.linkedin}>
                                            <img src={linkedin} alt="" />
                                        </a>
                                    )}
                                    {TechTeam.instagram && (
                                        <a href={TechTeam.instagram}>
                                            <img src={instagram} alt="" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </CardWrapper>


                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center my-16 flex-col gap-10">
                <div className='text-4xl my-10 text-white px-5 py-3 justify-center text-center rounded-xl w-fit flex font-bold border border-1 border-white'>
                    Design Team
                </div>
                <div className='flex justify-center items-center xl:gap-10 md:gap-5 lg:gap-7 sm:gap-4 xs:gap-4 xxs:gap-2 flex-wrap'>
                    {DesignTeam.map((TechTeam, i) => (
                        <CardWrapper
                            onMouseEnter={() => handleHoverEnter(i)}
                            onMouseLeave={handleHoverLeave}
                            className="relative overflow-hidden"
                        >
                            <div className='w-[80%]'>
                                <img
                                    src={TechTeam.img}
                                    alt={TechTeam.name}
                                    className={`object-contain rounded-2xl transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}
                                />
                            </div>

                            <div className="text-white flex flex-col gap-2 transition-transform">
                                <p className={`font-bold xl:text-2xl md:text-2xl lg:text-2xl sm:text-sm xxs:text-sm ease-in-out transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}>
                                    {TechTeam.name}
                                </p>
                                <p className={`xl:text-lg md:text-lg lg:text-lg sm:text-xs xxs:text-xs ease-in-out transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}>
                                    {TechTeam.designation}
                                </p>
                            </div>

                            <div className={`absolute bottom-0 transition-opacity transform ${onHover === i ? 'opacity-100 translate-y-[-0.5rem]' : 'opacity-0'}`}>
                                <div className='flex gap-5'>
                                    {TechTeam.linkedin && (
                                        <a href={TechTeam.linkedin}>
                                            <img src={linkedin} alt="" />
                                        </a>
                                    )}
                                    {TechTeam.instagram && (
                                        <a href={TechTeam.instagram}>
                                            <img src={instagram} alt="" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </CardWrapper>


                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center my-16 flex-col gap-10">
                <div className='text-4xl my-10 text-white px-5 py-3 justify-center text-center rounded-xl w-fit flex font-bold border border-1 border-white'>
                    Social Media Team
                </div>
                <div className='flex justify-center items-center xl:gap-10 md:gap-5 lg:gap-7 sm:gap-4 xs:gap-4 xxs:gap-2 flex-wrap'>
                    {SocialMediaTeam.map((TechTeam, i) => (
                        <CardWrapper
                            onMouseEnter={() => handleHoverEnter(i)}
                            onMouseLeave={handleHoverLeave}
                            className="relative overflow-hidden"
                        >
                            <div className='w-[80%]'>
                                <img
                                    src={TechTeam.img}
                                    alt={TechTeam.name}
                                    className={`object-contain rounded-2xl transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}
                                />
                            </div>

                            <div className="text-white flex flex-col gap-2 transition-transform">
                                <p className={`font-bold xl:text-2xl md:text-2xl lg:text-2xl sm:text-sm xxs:text-sm ease-in-out transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}>
                                    {TechTeam.name}
                                </p>
                                <p className={`xl:text-lg md:text-lg lg:text-lg sm:text-xs xxs:text-xs ease-in-out transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}>
                                    {TechTeam.designation}
                                </p>
                            </div>

                            <div className={`absolute bottom-0 transition-opacity transform ${onHover === i ? 'opacity-100 translate-y-[-0.5rem]' : 'opacity-0'}`}>
                                <div className='flex gap-5'>
                                    {TechTeam.linkedin && (
                                        <a href={TechTeam.linkedin}>
                                            <img src={linkedin} alt="" />
                                        </a>
                                    )}
                                    {TechTeam.instagram && (
                                        <a href={TechTeam.instagram}>
                                            <img src={instagram} alt="" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </CardWrapper>


                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center my-16 flex-col gap-10">
                <div className='text-4xl my-10 text-white px-5 py-3 justify-center text-center rounded-xl w-fit flex font-bold border border-1 border-white'>
                    Content Team
                </div>
                <div className='flex justify-center items-center xl:gap-10 md:gap-5 lg:gap-7 sm:gap-4 xs:gap-4 xxs:gap-2 flex-wrap'>
                    {ContentTeam.map((TechTeam, i) => (
                        <CardWrapper
                            onMouseEnter={() => handleHoverEnter(i)}
                            onMouseLeave={handleHoverLeave}
                            className="relative overflow-hidden"
                        >
                            <div className='w-[80%]'>
                                <img
                                    src={TechTeam.img}
                                    alt={TechTeam.name}
                                    className={`object-contain rounded-2xl transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}
                                />
                            </div>

                            <div className="text-white flex flex-col gap-2 transition-transform">
                                <p className={`font-bold xl:text-2xl md:text-2xl lg:text-2xl sm:text-sm xxs:text-sm ease-in-out transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}>
                                    {TechTeam.name}
                                </p>
                                <p className={`xl:text-lg md:text-lg lg:text-lg sm:text-xs xxs:text-xs ease-in-out transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}>
                                    {TechTeam.designation}
                                </p>
                            </div>

                            <div className={`absolute bottom-0 transition-opacity transform ${onHover === i ? 'opacity-100 translate-y-[-0.5rem]' : 'opacity-0'}`}>
                                <div className='flex gap-5'>
                                    {TechTeam.linkedin && (
                                        <a href={TechTeam.linkedin}>
                                            <img src={linkedin} alt="" />
                                        </a>
                                    )}
                                    {TechTeam.instagram && (
                                        <a href={TechTeam.instagram}>
                                            <img src={instagram} alt="" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </CardWrapper>


                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center my-16 flex-col gap-10">
                <div className='text-4xl my-10 text-white px-5 py-3 justify-center text-center rounded-xl w-fit flex font-bold border border-1 border-white'>
                    Sponsorship Team
                </div>
                <div className='flex justify-center items-center xl:gap-10 md:gap-5 lg:gap-7 sm:gap-4 xs:gap-4 xxs:gap-2 flex-wrap'>
                    {SponsorshipTeam.map((TechTeam, i) => (
                        <CardWrapper
                            onMouseEnter={() => handleHoverEnter(i)}
                            onMouseLeave={handleHoverLeave}
                            className="relative overflow-hidden"
                        >
                            <div className='w-[80%]'>
                                <img
                                    src={TechTeam.img}
                                    alt={TechTeam.name}
                                    className={`object-contain rounded-2xl transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}
                                />
                            </div>

                            <div className="text-white flex flex-col gap-2 transition-transform">
                                <p className={`font-bold xl:text-2xl md:text-2xl lg:text-2xl sm:text-sm xxs:text-sm ease-in-out transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}>
                                    {TechTeam.name}
                                </p>
                                <p className={`xl:text-lg md:text-lg lg:text-lg sm:text-xs xxs:text-xs ease-in-out transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}>
                                    {TechTeam.designation}
                                </p>
                            </div>

                            <div className={`absolute bottom-0 transition-opacity transform ${onHover === i ? 'opacity-100 translate-y-[-0.5rem]' : 'opacity-0'}`}>
                                <div className='flex gap-5'>
                                    {TechTeam.linkedin && (
                                        <a href={TechTeam.linkedin}>
                                            <img src={linkedin} alt="" />
                                        </a>
                                    )}
                                    {TechTeam.instagram && (
                                        <a href={TechTeam.instagram}>
                                            <img src={instagram} alt="" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </CardWrapper>


                    ))}
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center my-16 flex-col gap-10">
                <div className='text-4xl my-10 text-white px-5 py-3 justify-center text-center rounded-xl w-fit flex font-bold border border-1 border-white'>
                    Devfolio Team
                </div>
                <div className='flex justify-center items-center xl:gap-10 md:gap-5 lg:gap-7 sm:gap-4 xs:gap-4 xxs:gap-2 flex-wrap'>
                    {DevfolioTeam.map((TechTeam, i) => (
                        <CardWrapper
                            onMouseEnter={() => handleHoverEnter(i)}
                            onMouseLeave={handleHoverLeave}
                            className="relative overflow-hidden"
                        >
                            <div className='w-[80%]'>
                                <img
                                    src={TechTeam.img}
                                    alt={TechTeam.name}
                                    className={`object-contain rounded-2xl transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}
                                />
                            </div>

                            <div className="text-white flex flex-col gap-2 transition-transform">
                                <p className={`font-bold xl:text-2xl md:text-2xl lg:text-2xl sm:text-sm xxs:text-sm ease-in-out transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}>
                                    {TechTeam.name}
                                </p>
                                <p className={`xl:text-lg md:text-lg lg:text-lg sm:text-xs xxs:text-xs ease-in-out transition-transform ${onHover === i ? 'translate-y-[-1rem]' : ''}`}>
                                    {TechTeam.designation}
                                </p>
                            </div>

                            <div className={`absolute bottom-0 transition-opacity transform ${onHover === i ? 'opacity-100 translate-y-[-0.5rem]' : 'opacity-0'}`}>
                                <div className='flex gap-5'>
                                    {TechTeam.linkedin && (
                                        <a href={TechTeam.linkedin}>
                                            <img src={linkedin} alt="" />
                                        </a>
                                    )}
                                    {TechTeam.instagram && (
                                        <a href={TechTeam.instagram}>
                                            <img src={instagram} alt="" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </CardWrapper>


                    ))}
                </div>
            </div>
        </Carousel>
    );
}

export default TeamCarosel;