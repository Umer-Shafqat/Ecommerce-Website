import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Navbar1 from './components/Navbar1/Navbar1';
import Mainbody from './components/Mainbody/Mainbody';
import { useState } from 'react';

function App() {

  const[category,setCategory]=useState("All");

  return (
    <>
      <Navbar />
      <Navbar1/>
      <Mainbody/>
    </>
  );
}

export default App;
