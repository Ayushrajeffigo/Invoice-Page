import React from 'react'
import { Link } from 'react-router-dom'
import Border from './Border';
export default function FrontPage() {
  return (

   
    <div style={{display:"inline"}}>
        <Footer/>
    <Border/>
    <UpperBorder/>
        <h1>its a page where we are redirecting to invoice page</h1>
      <button className="btn btn-primary btn-sm"><Link className="nav-link" to ="/invoice">Invoice Page</Link></button>
    </div>

  )
}
