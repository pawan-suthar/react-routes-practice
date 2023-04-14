import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from './components/Navbar'
import Ordercomplete from "./components/Ordercomplete"
import Error from "./components/Error"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='ordercmp' element={<Ordercomplete/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </>

  )
}

export default App
