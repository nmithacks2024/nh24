import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
const ElfsightInstagramFeed = () => {
    //const [display, setDisplay] = useState(false);
    useEffect(() => {
        // Create and append the Elfsight script
        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.defer = true;
        script.dataset.useServiceCore = true;
        document.body.appendChild(script);

        const removeNoreferrerLink = () => {
            setTimeout(() => {
                const elfsightWidget = document.querySelector('.elfsight-app-9c7ac327-d995-46a0-867c-28d6d25459ee');
                if (elfsightWidget) {
                    const anchorTag = elfsightWidget.querySelector('a[rel="noreferrer"]');
                    if (anchorTag) {
                        anchorTag.remove();
                    }
                }
            }, 1500); // Adjust the delay time as needed
        };

        const handleScriptLoad = () => {
            if (typeof removeNoreferrerLink === 'function') {
                removeNoreferrerLink();
            }
        };

        script.addEventListener('load', handleScriptLoad);

        return () => {
            document.body.removeChild(script);
            script.removeEventListener('load', handleScriptLoad);
            //setDisplay(true)
        };
    }, []);
    return (
        // <div className='w-[100%] h-[100%] mx-auto flex flex-col justify-start items-center'>
        //     <div className='py-10 flex justify-start items-start w-[100%]'>
        //         <p className='text-6xl text-white'>Insta Feeds</p>
        //     </div>
        <div
            className="elfsight-app-9c7ac327-d995-46a0-867c-28d6d25459ee"
            data-elfsight-app-lazy
            showThumbs={false}
            style={{ width: '100%', height: '100%' }}>
        </div>

        // </div>
    )
};

export default ElfsightInstagramFeed;
