import React from 'react'
import './learnmore.css'
import Learn from '../../Assets/learn.jpg'
import { FaDiscord } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
function LearnMore() {
  return (
    <div className='learncontainer'>

   
    <div className='learnmore'>
            <h2>Want to learn more about what we are building?</h2>
            <p>Check out our average white paper</p>
            <img src={Learn}/>  
            <button>Read White Paper</button>
    </div>
    <div className='learnbottom'>
            <p>What are you waiting for?</p>
            <div className='box-span'>
                <FaTwitter/>
                <FaDiscord/>
            </div>
    </div>
    </div>
  )
}

export default LearnMore