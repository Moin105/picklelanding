import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Banners.css'
import pickle1 from "../../Assets/pickle1.png";
import pickle2 from "../../Assets/pickle2.png";
import pickle3 from "../../Assets/pickle3.png";
import pickle4 from "../../Assets/pickle4.png";
import pickle5 from "../../Assets/pickle5.png";
import pickle6 from "../../Assets/pickle6.png";
import pickle7 from "../../Assets/pickle7.jpeg";
import { IoIosArrowForward } from "react-icons/io";

import pickle8 from "../../Assets/pickle8.png";
function Banners() {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();
    const { ref, inView } = useInView();
  
    useEffect(() => {

      if (inView) {
        setIsVisible(true);
        controls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeOut" }
        });
      }
    }, [inView, controls]);
  return (
    <div className='banner'>
    <div className='banner-container'>
    <div className='row-images2'>
    <div className='image-container'></div>
    <div className='image-container2'></div>
         {/* <img src={pickle1} className='image-container mar1' alt="" /> */}
        {/* <img src={pickle2} className='image-container  mar2' alt="" /> */}
    </div>
    <div className='row-images'>
    <div className='image-container3'></div>
    <div className='image-container4'></div>
    </div>



    </div>

 
    <div className='banner-bottom'>
    <div className='right'>
    <motion.h2
            animate={controls}
            initial={{ y: -100, opacity: 0 }}
          >
            Vibes and <br /> Good Times.
          </motion.h2>
    </div>
    <div className='left'>
          <motion.p
            animate={controls}
            initial={{ y: -100, opacity: 0 }}
          >
            Join the community <IoIosArrowForward />
          </motion.p>
        </div>
       
    </div>
    <div ref={ref}></div>
    </div>
  )
}

export default Banners