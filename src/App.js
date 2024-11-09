import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import FoodMenu from './Components/FoodMenu/FoodMenu';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/menu' element={<FoodMenu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;