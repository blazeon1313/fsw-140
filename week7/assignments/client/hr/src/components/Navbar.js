import React from 'react'
//import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <div className="navbar">
      <Router>
        <Link to="/" onClick={() => {window.location.href="/"}}>Home</Link>
        <Link to="/employees" onClick={() => {window.location.href="/employees"}}>Employees</Link>
        <Link to="/jobs" onClick={() => {window.location.href="/jobs"}}>Jobs</Link>
        <Link to="/history" onClick={() => {window.location.href="/history"}}>Job History</Link>
        <Link to="/departments" onClick={() => {window.location.href="/departments"}}>Departments</Link>
        <Link to="/locations" onClick={() => {window.location.href="/locations"}}>Locations</Link>
        <Link to="/regions" onClick={() => {window.location.href="/Regions"}}>Regions</Link>
        <Link to="/countries" onClick={() => {window.location.href="/countries"}}>Countries</Link>
      </Router>
    </div>
  )
}