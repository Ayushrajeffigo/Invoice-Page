import React from 'react'
import { Link } from 'react-router-dom'
import Border from './Border';
import Footer from './Footer';
import UpperBorder from './UpperBorder';
export default function FrontPage() {
  return (
    <div style={{position:"absolute"}}>
        <UpperBorder/>
        <Border/>
        <h1 style={{display:"inline"}}>its a page where we are redirecting to invoice page</h1>
        <button className="btn btn-primary btn-sm"><Link className="nav-link" to ="/invoice">Invoice Page</Link></button>
        <Footer/>
    </div>
  )
}
