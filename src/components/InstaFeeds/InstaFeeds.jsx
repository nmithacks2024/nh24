import React, { useEffect } from 'react';

const ElfsightInstagramFeed = () => {
    useEffect(() => {
        // Create and append the Elfsight script
        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.defer = true;
        script.dataset.useServiceCore = true;
        document.body.appendChild(script);
        // Remove the <a> tag with rel="noreferrer" after a delay to ensure the widget is loaded
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

        // Add an event listener to ensure the removal script runs after the widget is loaded
        script.addEventListener('load', removeNoreferrerLink);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <div className='w-[100%] h-[100%] mx-auto flex flex-col justify-start items-center'>
            <div className='py-10 flex justify-start items-start w-[100%]'>
                <p className='text-6xl text-white'>Insta Feeds</p>
            </div>
            <div
                className="elfsight-app-9c7ac327-d995-46a0-867c-28d6d25459ee"
                data-elfsight-app-lazy
                style={{ width: '100%', height: '100%' }}>
            </div>
        </div>
    )
};

export default ElfsightInstagramFeed;
