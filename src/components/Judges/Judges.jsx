import React, { Component, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { left, right } from '../../../public/assets/index.js';
import { judges } from './index.js';
import { CardWrapper } from './JudgeStyle.jsx';
function Judges() {
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

    return (
        <div>
            <div className='text-white font-bold text-4xl text-center'>
                Judges
            </div>
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
                interval={4000}
            >
                {judges.map((judge, i) => {
                    return (
                        <div className='flex justify-center items-center py-10'>
                            <a href={judge.linkedin}>
                                <CardWrapper>
                                    <img src={judge.src} alt="" />
                                </CardWrapper>
                            </a>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Judges