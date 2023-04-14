import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from './components/Navbar'
import Ordercomplete from "./components/Ordercomplete"
import Error from "./components/Error"
import Students from './components/Students'
import Newstu from './components/Newstu'
import Oldstu from './components/Oldstu'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='ordercmp' element={<Ordercomplete/>}/>
      {/* nested routes under students  */}
      {/* students path prr aane prr hi old or new load honge  */}
      <Route path='students' element={<Students/>}>
        {/* if  want ki students pr click krte hi phle new students hi already ope ho */}
        <Route index element={<Newstu/>}/>
        <Route path='old' element={<Oldstu/>}/>
        <Route path='new' element={<Newstu/>}/>
      </Route>

      <Route path='*' element={<Error/>}/>
    </Routes>
    </>

  )
}

export default App
