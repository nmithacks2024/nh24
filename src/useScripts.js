import { useEffect } from "react";

const useScripts = (src) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cpwebassets.codepen.io/assets/embed/ei.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
};

export default useScripts;
