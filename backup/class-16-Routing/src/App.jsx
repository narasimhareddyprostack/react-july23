import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
class App extends React.Component{
  render(){
    return <div>
      <Router>
          <Navbar/>
      </Router>
      <Routes>
          <Route path="/index" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  }
}
export default App