import React from 'react';
import Navbar from './components/Navbar.jsx';
import Menubar from './components/Menubar.jsx';
import ShoeDisplay from './components/ShoeDisplay.jsx';
import ShoeDetails from './components/ShoeDetails.jsx';
import './index.css'; 
import "./App.css"; 


function App(){
  return (
    <div>
      <Navbar />
      <Menubar />
      <hr className="line" />
      <div className="container">
        <ShoeDisplay />
        <ShoeDetails />
      </div>
    </div>
  );
};

export default App;
