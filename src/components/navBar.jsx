import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import '../components/navBarStyles.css'
const NavBar = () => {
    return (   <Navbar className="black shadow-2-strong">
    <Navbar.Brand href="#home">
      <img 
        src="//d2s2kb1tq1008e.cloudfront.net/assets/pubg/header_logo-95b12629c92aed55e7cc40109d836d0d071362a49e88323b5d003ef583a0a876.png"
       
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar> );
}
 
export default NavBar;