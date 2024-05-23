import React, { useEffect, useState } from 'react'

function Mentors() {
    // useEffect(() => {
    //     // Check if the script is already added to avoid duplicates
    //     const existingScript = document.querySelector('script[src="https://cdn.commoninja.com/sdk/latest/commonninja.js"]');
    //     if (!existingScript) {
    //         // Create a script element
    //         const script = document.createElement('script');
    //         script.src = 'https://cdn.commoninja.com/sdk/latest/commonninja.js';
    //         script.defer = true;

    //         // Append the script to the document body
    //         document.body.appendChild(script);

    //         // Cleanup script on component unmount
    //         return () => {
    //             document.body.removeChild(script);
    //         };
    //     }
    // }, []);
    useEffect(() => {
        // Check if the script is already added to avoid duplicates
        const existingScript = document.querySelector('script[src="https://cdn.commoninja.com/sdk/latest/commonninja.js"]');
        if (!existingScript) {
            // Create a script element
            const script = document.createElement('script');
            script.src = 'https://cdn.commoninja.com/sdk/latest/commonninja.js';
            script.defer = true;

            // Append the script to the document body
            document.body.appendChild(script);

            const removeRibbonLink = () => {
                setTimeout(() => {
                    const commonNinjaWidget = document.querySelector('.commonninja_component');
                    if (commonNinjaWidget) {
                        const ribbonLink = commonNinjaWidget.querySelector('a.commonninja-ribbon-link');
                        if (ribbonLink) {
                            ribbonLink.remove();
                        }
                    }
                }, 1000); // Adjust the delay time as needed
            };

            const handleScriptLoad = () => {
                removeRibbonLink();
            };

            script.addEventListener('load', handleScriptLoad);

            // Cleanup script and event listener on component unmount
            return () => {
                script.removeEventListener('load', handleScriptLoad);
                document.body.removeChild(script);
            };
        }
    }, []);

    return (
        <div>
            <div className='font-bold text-2xl  text-white py-5 text-center'>
                Mentors
            </div>
            <div className="commonninja_component pid-9b10adee-f910-45ce-84de-c904133a7699"></div>
        </div>
    );
}

export default Mentors