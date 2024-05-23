import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Reveal from '../Reveal';
const ElfsightInstagramFeed = () => {
    // useEffect(() => {
    //     // Create and append the Elfsight script
    //     const script = document.createElement('script');
    //     script.src = "https://static.elfsight.com/platform/platform.js";
    //     script.defer = true;
    //     script.dataset.useServiceCore = true;
    //     document.body.appendChild(script);

    //     const removeNoreferrerLink = () => {
    //         setTimeout(() => {
    //             const elfsightWidget = document.querySelector('.elfsight-app-9c7ac327-d995-46a0-867c-28d6d25459ee');
    //             if (elfsightWidget) {
    //                 const anchorTag = elfsightWidget.querySelector('a[rel="noreferrer"]');
    //                 if (anchorTag) {
    //                     anchorTag.remove();
    //                 }
    //             }
    //         }, 5000); // Adjust the delay time as needed
    //     };

    //     const handleScriptLoad = () => {
    //         if (typeof removeNoreferrerLink === 'function') {
    //             removeNoreferrerLink();
    //         }
    //         // setDisplay(false);
    //     };

    //     script.addEventListener('load', handleScriptLoad);

    //     return () => {
    //         script.removeEventListener('load', handleScriptLoad);
    //         document.body.removeChild(script);
    //     };
    // }, []);
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = 'https://widget.taggbox.com/embed-lite.min.js';
        script.type = 'text/javascript';

        // Append the script to the document body
        document.body.appendChild(script);

        // Cleanup script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        // <div className='w-[100%] h-[100%] flex justify-center items-center'>
        //     {/* {isLoading ? (
        //         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        //             <CircularProgress />
        //         </div>
        //     ) : ( */}
        //     <div
        //         className="elfsight-app-9c7ac327-d995-46a0-867c-28d6d25459ee"
        //         data-elfsight-app-lazy
        //         style={{ width: '100%', height: '100%' }}
        //     />
        //     {/* )} */}
        // </div>
        <div>
            <div className='py-5 flex justify-center items-center'>
                <Reveal>
                    <h1 className="right-0 text-3xl font-bold leading-tight text-white">
                        Insta Feeds
                    </h1>
                </Reveal>
            </div>
            <div>
                <div
                    className="taggbox"
                    style={{ width: '100%', height: '100%' }}
                    data-widget-id="155471"
                    data-tags="false"
                ></div>
            </div>
        </div>
    )
};

export default ElfsightInstagramFeed;
