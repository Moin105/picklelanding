import logo from './logo.svg';
import './App.css';
import ResponsiveCarousel from './Components/Slider/Slider'
import Header from './Components/Header/Header';
import NumberSection from './Components/NumberSection/StatsSection';
import Banner from './Components/Banner/Banner';
function App() {
  return (
 <div className='main'>
 <Header/>
 <ResponsiveCarousel/>
 <div className='stats-section'>
      <NumberSection heading="Total Items" endValue={100} plus={false} />
      <NumberSection heading="Total Owners" endValue={200} plus={true} />
      <NumberSection heading="Floor Price (ADA)" endValue={100} plus={false} />
      <NumberSection heading="Volume Traded (ADA)" endValue={200} plus={false} />

    </div>
    <Banner/>
 </div>

  );
}

export default App;
