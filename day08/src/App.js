import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/home" element={<AboutUs/>}/>
          <Route path="/home" element={<ContactUs/>}/>

        </Routes>
      </Router>
       </div>
  );
}

export default App;
