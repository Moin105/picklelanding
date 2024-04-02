import logo from './logo.svg';
import './App.css';
import ResponsiveCarousel from './Components/Slider/Slider'
import Header from './Components/Header/Header';
import NumberSection from './Components/NumberSection/StatsSection';
import Banner from './Components/Banner/Banner';
import { motion } from 'framer-motion';
import GameSection from './Components/Games/Game';
import Banners from './Components/Banner/Banners';
import Gamers from './Components/Games/Gamers';
import LearnMore from './Components/LearnMore/LearnMore';
function App() {
  return (
 <div className='main'>
 <Header/>
 {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <Banners/>
 {/* <ResponsiveCarousel/> */}


 <div  style={{marginBottom:"50px"}}>
      {/* <NumberSection heading="Total Items" endValue={100} plus={false} />
      <NumberSection heading="Total Owners" endValue={200} plus={true} />
      <NumberSection heading="Floor Price (ADA)" endValue={100} plus={false} />
      <NumberSection heading="Volume Traded (ADA)" endValue={200} plus={false} /> */}

    </div>

    {/* <Banner/> */}
    {/* <GameSection/> */}
    {/* <Gamers/> */}
    <LearnMore/>
 </div>

  );
}

export default App;
