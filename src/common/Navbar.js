import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMoblieMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className= {click? "nav-menu active" : "nav-menu"}>

            <li><Link to='/' onClick={closeMoblieMenu}>Home</Link></li>
            <li><Link to='/about' onClick={closeMoblieMenu}>About</Link></li>
            <li><Link to='/gallery' onClick={closeMoblieMenu}>Gallery</Link></li>
            <li><Link to='/destination' onClick={closeMoblieMenu}>Destination</Link></li>
            <li><Link to='/blog' onClick={closeMoblieMenu}>Blog</Link></li>
            <li><Link to='/testimonial' onClick={closeMoblieMenu}>Testimonial</Link></li>
            <li><Link to='/contact' onClick={closeMoblieMenu}>Contact Us</Link></li>
          
          </ul>

          <div className="login-area flex">
            <li>
              <Link to='/sign-in'>
              <i class="fa-solid fa-circle-chevron-right">Sign In</i>
              </Link>
            </li>
            <li>
              <Link to='/register'>
              <i class="fa-solid fa-circle-chevron-right">Register</i>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <button className="primary-btn">Request a Quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className="head-container">
          <div className="logo">
          <img src="images/logo-4.png" alt='' />
          </div>

          <div className="contact flex_space">
            <div className="box flex_space">
              <div className="icons">
                <i className="far fa-clock"></i>
              </div>
              <div className="text">
                <h4>Working Hours</h4>
                <Link to="/contact">Monday - Sunday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h4>Call Us Hours</h4>
                <Link to="/contact">+91 1234567891</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i className="far fa-envelope"></i>
              </div>
              <div className="text">
                <h4>Mail Us</h4>
                <Link to="/contact">delight@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
<script src="https://kit.fontawesome.com/776304329c.js" crossorigin="anonymous"></script>

export default Navbar