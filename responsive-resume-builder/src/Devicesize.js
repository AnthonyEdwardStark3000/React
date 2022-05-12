// window.onresize = screen;
// window.onload = screen;

// function screen(){
//     let mywidth = window.innerWidth;
//     return mywidth;
// }

// export default screen;
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function Devicesize() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}