import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">AboutUs</Link></li>
            <li><Link to="/contact">ContactUs</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>

        </Routes>
      </Router>
       </div>
  );
}

export default App;
