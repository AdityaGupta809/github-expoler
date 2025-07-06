import React from 'react'
import '../styles/Navbar.css'; // Import your CSS file for styling
import img from '../assets/Union.png'; // Import your logo image
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>

        <nav className="navbar">
            <div className="logo">
               <img src={img} alt="logo" height={"60px"} width={"49px"}/>
            </div>

            <div className="item">
                <ul>
                   <li><Link to="/" style={{ textDecoration: 'none', color: '#ffffff' }}>Home </Link></li>
                   <li><Link to="/topuser" style={{ textDecoration: 'none', color: '#ffffff' }}>Top Users</Link></li>
                   <li><Link to="/toprepos" style={{ textDecoration: 'none', color: '#ffffff' }}>Top Repos</Link></li>
                   <li><Link to="/toporganization" style={{ textDecoration: 'none', color: '#ffffff' }}>Top Organizations</Link></li>
                   {/* <li><Link to="/conact" style={{ textDecoration: 'none', color: '#ffffff' }}>Contact</Link></li> */}
                </ul>
            </div>

            <div> </div>


       </nav>
    
    </>
  )
}

export default Navbar