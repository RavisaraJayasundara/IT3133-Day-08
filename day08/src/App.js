import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dash" element={<Dashboard/>}/>
        </Routes>
      </Router>
       </div>
  );
}

export default App;
