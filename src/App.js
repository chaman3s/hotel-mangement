import "./App.css"
import Navbar from "./common/Navbar"
import Home from "./components/pages/Home"
import Gallery from "./components/gallery/Gallery";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Contact from './components/Contact/Contact';
import Testimonial from "./components/Testimonial/Testimonial";
//import { Router, Routes, Route } from "react-router-dom"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Destinations from "./components/Destinations/Home";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/destination' element={<Destinations/>}></Route>
        <Route path='/sign-in' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/testimonial' element={<Testimonial/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App