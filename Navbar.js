import React from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends React.Component{
    render()
    {
        return (
<nav className="navbar navbar-light bg-light">
  <Link to="/" className="navbar-brand"><h1>MediCare</h1></Link>
  <div className=" Navbar-collapse">
      <ul className="navbar-nav mr-auto">
      <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
      </li>
      <li className="navbar-item">
          <Link to="/signup" className="nav-link">Sign up</Link>
      </li>
      <li className="navbar-item">
      <Link to="/prescriptions" className="nav-link">Prescription</Link>
      </li>
      <li className="navbar-item">
      <Link to="/addprescriptions" className="nav-link">Add Prescriptions</Link>
      </li>
      </ul>
  </div>
</nav>
        );
    }
}