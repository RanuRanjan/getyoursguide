import './App.css';
import ActivitiesCard from './components/activities/ActivitiesCard';
import Banner from './components/banner/Banner';
import TopAttration from './components/Carosels/TopAttration';
import Destination from './components/destination/Destination';
import Fav from './components/favExperience/Fav';
import Features from './components/features/Features';
import Footer from './components/Footer/Footer';
import Travel from './components/Journey/Travel';
import Navbar from './components/navBar/Navbar';
import TopCountries from './components/topCountries/TopCountries';
import Trips from './components/trip/Trips';
import VideoComponent from './components/videoCard/VideoComponent';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Banner/>
       <ActivitiesCard/>
       <Fav/>
       <Destination/>
       <Features/>
       <Trips/>
       <VideoComponent/>
       <TopAttration/>
       
       <Travel/>
       <TopCountries/>
       <Footer/>
    </div>
  );
}

export default App;
