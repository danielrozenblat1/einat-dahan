import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutSection from './components/me/Me';
import InfiniteCarousel from './components/carousel/Works';
import Works from './components/recommends/Works';
import Stamps from './components/recommends/Stamps';
import ThirdScreen from './screens/ThirdScreen';
import RecommendsScreen from './components/RecommendsScreen/RecommendsScreen';
import ByMe from './components/ByMe/ByMe';
import ForthScreen from './screens/ForthScreen';
import FifthScreen from './screens/FifthScreen';
import PrivacyPolicy from './components/privacy copy/Privacy';

function App() {
  return <>
  <FirstScreen/>
  <SecondScreen/>
  <AboutSection/>
  <ThirdScreen/>
  <ForthScreen/>
  <FifthScreen/>
         <PrivacyPolicy 
  ownerName="עינת דהן" 
  email="einatd.academy@gmail.com" 
  phone="+972 52-658-5166" 
  domain="https://einatdahan.co.il/" 
/>
  <ByMe/>
  </>
}

export default App;
