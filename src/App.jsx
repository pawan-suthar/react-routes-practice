import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from './components/Navbar'
import Ordercomplete from "./components/Ordercomplete"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='ordercmp' element={<Ordercomplete/>}/>
    </Routes>
    </>

  )
}

export default App
