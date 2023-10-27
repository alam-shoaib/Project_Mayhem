import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import Campus from './Components/Campus';
import Courses from './Components/Courses';
import Facilities from './Components/Facilities';
import Placement from './Components/Placement';
import Home from './Components/Home';
//import Dropdown from './Components/Dropdown';
//import Navbar from './Components/Navbar';
//import './Components/Home.css';
const App = () => {
  return (
    <Router>
    
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/facilities" element={<Facilities/>} />
          <Route path="/placement" element={<Placement />} />
        </Routes>
      </div>
      
   
    </Router>
  );
}

export default App;
