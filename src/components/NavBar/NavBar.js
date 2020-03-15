import React from 'react';
import './NavBar.css'
import logo from '../../logo.jpg'

export default function NavBar() {
  return (
<nav className="navbar"> 
<img className="nav-img" src={logo} alt="cars logo"/>
<ul className='nav-links'>
<li>
    <a href="/" className="nav-link">Home</a>
</li>
<li>
    <a href="/" className="nav-link">About</a>
</li>
<li>
    <a href="/" className="nav-link active">Cars</a>
</li>
</ul>
</nav>  
);
}
