import { AboutUs } from './AboutUs';
import './App.css';
import {Home} from './Home';
import { Navbar } from './components/navbar';
import {Routes, BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
      <Route path="" element={<Home />} />   
      <Route path="/AboutUs" element={<AboutUs />} />         
      </Routes>
     </Router>

    </div>
  );
}

export default App;
