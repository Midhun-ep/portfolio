import React from 'react'
import Navbar from './componets/Navbar'
import Home from './componets/Home'
import About from './componets/About'
import Skilandedu from './componets/Skilandedu'
import Education from './componets/Education'
import Contact from './componets/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <div>
      <Home/>
      <Navbar/>
      <About/>
      <Skilandedu/>
      <Education/>
      <Contact/>
    </div>
    </>
  )
}

export default App