import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Gamers.css'
import flappy from '../../Assets/flappyBtn.png'
import galaga from '../../Assets/galagaBtn.jpg'
import jump from '../../Assets/jumpBtn.jpg'
import road from '../../Assets/roadBtn.png'
function Gamers() {
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
    <div  className='gamers'>
        <motion.h2
            animate={controls}
            initial={{ y: -100, opacity: 0 }}
          >Pickle Arcade</motion.h2>
            <motion.p
            animate={controls}
            initial={{ y: -100, opacity: 0 }}
          >Immersive, Addictive, Fun AF.</motion.p>
        <div ref={ref}></div>
         <div className='gamers-games'>
            <motion.div 
              animate={controls}
            initial={{ y: -100, opacity: 0 }}
            className='game-section'>
                <img src={flappy}/>
                <button>Flappy Pickle </button>
            </motion.div>
            <motion.div
              animate={controls}
            initial={{ y: -100, opacity: 0 }} className='game-section'>
                <img src={jump}/>
                <button>Pickle Jump</button>
            </motion.div>
          
            <motion.div 
              animate={controls}
            initial={{ y: -100, opacity: 0 }}className='game-section'>
                <img src={road}/>
                <button>Pickle Road</button>
               
            </motion.div>
            <motion.div 
              animate={controls}
            initial={{ y: -100, opacity: 0 }}className='game-section'>
                <img src={galaga}/>
                <button>Pickle Invaders</button>
            </motion.div>
         </div>
        
    </div>
  )
}

export default Gamers