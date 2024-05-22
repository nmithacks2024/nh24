import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
const ElfsightInstagramFeed = () => {
    const [display, setDisplay] = useState(true);
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
            }, 1000); // Adjust the delay time as needed
        };

        const handleScriptLoad = () => {
            if (typeof removeNoreferrerLink === 'function') {
                removeNoreferrerLink();
            }
            setDisplay(false);
        };

        script.addEventListener('load', handleScriptLoad);

        return () => {
            script.removeEventListener('load', handleScriptLoad);
            document.body.removeChild(script);
        };

    }, []);

    return (
        // <div
        //     className="elfsight-app-9c7ac327-d995-46a0-867c-28d6d25459ee"
        //     data-elfsight-app-lazy
        //     showThumbs={false}
        //     style={{ width: '100%', height: '100%' }}>
        // </div>
        <div className='w-[100%] h-[100%] flex justify-center items-center'>
            {display ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <CircularProgress />
                </div>
            ) : (
                <div
                    className="elfsight-app-9c7ac327-d995-46a0-867c-28d6d25459ee"
                    data-elfsight-app-lazy
                    style={{ width: '100%', height: '100%' }}
                />
            )}
        </div>
    )
};

export default ElfsightInstagramFeed;
