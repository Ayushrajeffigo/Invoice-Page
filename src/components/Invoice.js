import React from 'react';
import { Link } from 'react-router-dom';
import Border from './Border';
import UpperBorder from './UpperBorder';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'; // Import Material-UI components
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
      <div>
        <UpperBorder />
      </div>
      <div>
        <Border />
      </div>
      <div style={{
        position: "absolute",
        width: "100vw",
        height: "900px",
        left: "128px",
        top: "182px",
        backgroundColor: "white",
        mixBlendMode: "normal",
        boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.02)",
        borderRadius: "12px"
      }}>
        <nav className="navbar navbar-expand-lg navbar-light nav" >
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
            <div>
                  <input
                      className=''
                      type="text"
                      placeholder="Search..."
                      style={{
                       
                      
                        color: "#288cab",
                        border: "2px solid white",
                        width: "100%",
                        height: "40px",
                        paddingLeft: "100px",
                         // Adjust padding to accommodate the icon
                         backgroundColor: "whitesmoke", borderRadius: "45px" 
                      }}
                    />
                    <FontAwesomeIcon className='glowing-circle' icon={faSearch} style={{ fontSize:"50px",backgroundColor:"#288cab",position: "relative", left: "80%", top: "auto", transform: "translateY(-95%)",borderRadius:"45px",width:"fit-content" }} />
          </div>
                </div>
              </li>
              <li className="nav-item mb-1">
                <button className="btn  my-1" style={{ backgroundColor: "whitesmoke", borderRadius: "45px", color: "#288cab" }}>Direct Invoice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<GlowingCircleIcon />}</button>
              </li>
              <li className="mb-2 mb-2">
                <button className="btn mx-3 my-1" style={{ backgroundColor: "whitesmoke", borderRadius: "45px", color: "#288cab" }}>Invoice For Grn &nbsp;{<GlowingCircleIcon />}</button>
              </li>
              <li className="nav-item mb-3">
                <button className="btn  my-1" style={{ backgroundColor: "whitesmoke", borderRadius: "45px", color: "#288cab" }}>Invoice For IB &nbsp;{<GlowingCircleIcon />}</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-4" style={{ position: "absolute" }}>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Supplier Invoice Date</TableCell>
                          <TableCell>Supplier Invoice No</TableCell>
                          <TableCell>PO Number</TableCell>
                          <TableCell>Business Unit</TableCell>
                          <TableCell>Vendor</TableCell>
                          <TableCell>Invoice Amount (INR)</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {invoices.map((invoice, index) => (
                          <TableRow key={index}>
                            <TableCell>{invoice.supplierInvoiceDate}</TableCell>
                            <TableCell>{invoice.supplierInvoiceNo}</TableCell>
                            <TableCell>{invoice.poNumber}</TableCell>
                            <TableCell>{invoice.businessUnit}</TableCell>
                            <TableCell>{invoice.vendor}</TableCell>
                            <TableCell>{invoice.invoiceAmount}</TableCell>
                            <TableCell>{invoice.status}</TableCell>
                            <TableCell>
                              <Button variant="contained" color="primary" component={Link} to="/View" className="mx-1 my-1">View and Payment</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
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