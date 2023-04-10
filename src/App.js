import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import { Routes, Route} from "react-router-dom"
import Navbar from './Navbar';
import './index.css';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/service" exact element={<Service/>} />
        <Route path="/contact" exact element={<Contact/>} />
     </Routes>
    </>

  );
}

export default App;
