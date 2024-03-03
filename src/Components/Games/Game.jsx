import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
import logo from '../../Assets/logo.jpg'
// import Link from "next/link";
import './game.css'
import { Link } from "react-router-dom";
import flappy from '../../Assets/flappyBtn.png'
import galaga from '../../Assets/galagaBtn.jpg'
import jump from '../../Assets/jumpBtn.jpg'
import road from '../../Assets/roadBtn.png'
const items = [
  {
    id: 1,
    color: "from-green-500 to-black",
    title: "PickleButt Flappy  Game",
    img:flappy,
       link: "https://dill-veloper.github.io/flappy-pickle/",
  },
  {
    id: 2,
    color: "from-green-500 to-black",
    title: "PickleButt Galaga  Game",
    img:galaga,
     link: "https://mon3om.github.io/pickle-galaga/",
  },
  {
    id: 3,
    color: "from-green-500 to-black",
    title: "PickleButt Jump  Game",
    img:jump,
     link: "https://dill-veloper.github.io/pickle-jump/",
  },
  {
    id: 4,
    color: "from-green-500 to-black",
    title: "PickleButt Road  Game",
    img:road,
    link: "https://dill-veloper.github.io/pickle-road/",
  },
];
const GameSection = () => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  
    return (
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-[600vh] relative" ref={ref}>
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl anta text-center">
           PickleButt Arcade Games
          </div>
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
            <motion.div style={{ x }} className="flex">
              <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-black" />
              {items.map((item) => (
                <div
                  className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                  key={item.id}
                >
                  <div className="flex flex-col gap-8 text-white w-4/5">
                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-4xl anta">
                      {item.title}
                    </h1>
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      <img src={item.img} alt="" fill />
                    </div>
                    {/* <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                      {item.desc}
                    </p> */}
                    <Link href={item.link} className="flex justify-end">
                      <button className="p-2 anta text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">Play Game</button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
          <h1 className="text-2xl anta">Join Our Community</h1>
          <div className="relative">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[300px] md:h-[300px] "
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
             
 
   <text fill="#fff">
                <textPath xlinkHref="#circlePath" className="anta text-xl text-white">
                  PickleButt 
                </textPath>
              </text>
            </motion.svg>
            <div className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto  text-white rounded-full flex items-center justify-center">

            <img
    src={logo} // Replace "path/to/your/image.jpg" with the actual path to your image file
    x="50" // Adjust the x-coordinate as needed
    y="50" // Adjust the y-coordinate as needed
    width="150" // Adjust the width as needed
    height="150" // Adjust the height as needed
    className="object-cover rounded-full"
    alt="Description of your image"
  />
            </div>
            {/* <Link
              href="/contact"
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto  text-white rounded-full flex items-center justify-center"
            >
              Buy Me
            </Link> */}
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default GameSection;
