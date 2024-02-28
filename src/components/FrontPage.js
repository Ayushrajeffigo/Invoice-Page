import React from 'react'
import { Link } from 'react-router-dom'
export default function FrontPage() {
  return (
    <div>
        <h1>its a page where we are redirecting to invoice page</h1>
      <button className="btn btn-primary btn-sm"><Link className="nav-link" to ="/invoice">Invoice Page</Link></button>
    </div>
  )
}
