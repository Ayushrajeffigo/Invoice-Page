import React from 'react';
import { Link } from 'react-router-dom';
import Border from './Border';
import UpperBorder from './UpperBorder';
import Footer from './Footer';
import GlowingCircleIcon from './GlowingCircleIcon';
const invoices = [
  {
    supplierInvoiceDate: '03/01/2024',
    supplierInvoiceNo: 'MIR-2024-80',
    poNumber: 'PON-2024-500640',
    businessUnit: 'NCC Ltd - Buildings',
    vendor: 'Nagara Logistics_No',
    invoiceAmount: '2054.72',
    status: 'Closed'
  },
  {
    supplierInvoiceDate: '28/11/2023',
    supplierInvoiceNo: 'MIR-2023-80',
    poNumber: 'PON-2023-500536',
    businessUnit: 'NCC Ltd - Mines',
    vendor: 'Nagara Logistics_No',
    invoiceAmount: '11131.50',
    status: 'Rejected'
  },
  {
    supplierInvoiceDate: '27/11/2023',
    supplierInvoiceNo: 'MIR-2023-80',
    poNumber: 'PON-2023-500531',
    businessUnit: 'NCC Ltd - Mines',
    vendor: 'SS SUPPLY CHAIN SOLUTIONS PRIVATE LIMITED',
    invoiceAmount: '66489.40',
    status: 'Closed'
  },
  {
    supplierInvoiceDate: '27/11/2023',
    supplierInvoiceNo: 'SELECT',
    poNumber: 'PON-2023-500507',
    businessUnit: 'NCC Ltd - Mines',
    vendor: 'Usha Martin Ltd',
    invoiceAmount: '27091.24',
    status: 'Approved'
  },
  {
    supplierInvoiceDate: '27/11/2023',
    supplierInvoiceNo: '0175',
    poNumber: '',
    businessUnit: 'NCC Ltd - Mines',
    vendor: '',
    invoiceAmount: '',
    status: 'Closed'
  }
];

export default function Invoice(props) {
  return (
    <>
     <div >
      <UpperBorder/>
    </div>
    <div><Border/></div>
   
    
    <div style={{
      /* Frame 1000005186 */

position: "absolute",
width: "100vw",
height: "900px",
left: "128px",
top: "182px",

/* White */
backgroundColor:"white",
mixBlendMode: "normal",
/* 123 */
boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.02)",
borderRadius: "12px"


    }}>
     
      <nav className="navbar navbar-expand-lg navbar-light nav " >
        <Link className="navbar-brand" to="/">Invoice App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">All Invoices</Link>
            </li>
            {/* <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                All Status
              </Link>
              <ul class="dropdown-menu">
                <li><Link className="dropdown-item" to="/">All</Link></li>
                <Link className="dropdown-item" to="/">Closed</Link>
                <Link className="dropdown-item" to="/">Rejected</Link>
                <Link className="dropdown-item" to="/">Approved</Link>
              </ul>
            </li> */}
             <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          All Status
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/">All</Link></li>
            <li><Link class="dropdown-item" to="/">Closed</Link></li>
            <li><Link class="dropdown-item" to="/">Rejected</Link></li>
            <li><Link class="dropdown-item" to="/">Approved</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/">All</Link></li>
            <li><Link class="dropdown-item" to="/">Closed</Link></li>
            <li><Link class="dropdown-item" to="/">Rejected</Link></li>
            <li><Link class="dropdown-item" to="/">Approved</Link></li>
            </ul>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search..." />
              </div>
            </li>
            <li className="nav-item mb-1">
            <button className="btn  my-1" style={{backgroundColor:"whitesmoke",borderRadius:"45px",color:"#288cab"}}>Direct Invoice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<GlowingCircleIcon/>}</button>
            </li>
            <li className="mb-2 mb-2">
            <button className="btn btn-primary mx-3 my-1"  style={{backgroundColor:"whitesmoke",borderRadius:"45px",color:"#288cab"}}>Invoice For Grn &nbsp;{<GlowingCircleIcon/>}</button>
            </li>
            <li className="nav-item mb-3">
            <button className="btn btn-primary my-1"  style={{backgroundColor:"whitesmoke",borderRadius:"45px",color:"#288cab"}}>Invoice For IB &nbsp;{<GlowingCircleIcon/>}</button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
           
                    
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Supplier Invoice Date</th>
                      <th>Supplier Invoice No</th>
                      <th>PO Number</th>
                      <th>Business Unit</th>
                      <th>Vendor</th>
                      <th>Invoice Amount (INR)</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice, index) => (
                      <tr key={index}>
                        <td>{invoice.supplierInvoiceDate}</td>
                        <td>{invoice.supplierInvoiceNo}</td>
                        <td>{invoice.poNumber}</td>
                        <td>{invoice.businessUnit}</td>
                        <td>{invoice.vendor}</td>
                        <td>{invoice.invoiceAmount}</td>
                        <td>{invoice.status}</td>
                        <td>
                          <button className="btn btn-primary btn-sm mx-1 my-1"><Link className="nav-link" to ="/View">View</Link></button>
                          <button className="btn btn-success btn-sm">Payment</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
</>
  );
}
