import './App.css';
import React, { useContext } from 'react';
import Navbarr from './component/Navbarr';
import { Route, Routes } from 'react-router-dom';
import Calcul from './component/tp1/Calcul';
import Slider from './component/tp2/Slider';
import Form from './component/tp3/Form';
import Appapi from './component/tp4/Appapi';
import Home from './component/home/Home';
import Notfound from './component/Notfound';
import ContactFull from './component/tp5/ContactFull';
import ThemeContextProvider  from './component/theme/ThemeContext';


function App() {
  return (
  <div className='App '>
    <ThemeContextProvider>
    <Navbarr/>
    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/Tp1" element={ <Calcul/>}/>
      <Route path="/Tp2" element={<Slider/>}/>
      <Route path="/Tp3" element={<Form/>}/>
      <Route path="/Tp4" element={<Appapi/>}/>
      <Route path="/Tp5" element={<ContactFull/>}/>
      <Route path="*" element={<Notfound/>}/>
    </Routes>
    </ThemeContextProvider>
  </div>
  );
}

export default App;
