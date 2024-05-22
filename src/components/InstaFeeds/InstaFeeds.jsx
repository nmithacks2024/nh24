import React, { useEffect } from 'react';

const ElfsightInstagramFeed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.defer = true;
        document.body.appendChild(script);
        const removeNoreferrerLinks = () => {
            const elfsightApp = document.querySelector('.elfsight-app-9c7ac327-d995-46a0-867c-28d6d25459ee');
            if (elfsightApp) {
                const noreferrerLinks = elfsightApp.querySelectorAll('a[rel="noreferrer"]');
                noreferrerLinks.forEach(link => {
                    link.parentNode.removeChild(link);
                });
            }
        };

        const observer = new MutationObserver(removeNoreferrerLinks);
        const elfsightAppContainer = document.querySelector('.elfsight-app-9c7ac327-d995-46a0-867c-28d6d25459ee');
        if (elfsightAppContainer) {
            observer.observe(elfsightAppContainer, { childList: true, subtree: true });
            removeNoreferrerLinks(); // Initial check in case the links are already present
        }

        return () => {
            document.body.removeChild(script);
            observer.disconnect();
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
