import React from 'react';

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

export default function Invoice() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Invoice App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">All Invoices</a>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                All Status
              </a>
              <ul class="dropdown-menu">
                <li><a className="dropdown-item" href="#">All</a></li>
                <a className="dropdown-item" href="#">Closed</a>
                <a className="dropdown-item" href="#">Rejected</a>
                <a className="dropdown-item" href="#">Approved</a>
              </ul>
            </li> */}
             <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          All Status
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">All</a></li>
            <li><a class="dropdown-item" href="#">Closed</a></li>
            <li><a class="dropdown-item" href="#">Rejected</a></li>
            <li><a class="dropdown-item" href="#">Approved</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">All</a></li>
            <li><a class="dropdown-item" href="#">Closed</a></li>
            <li><a class="dropdown-item" href="#">Rejected</a></li>
            <li><a class="dropdown-item" href="#">Approved</a></li>
            </ul>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search..." />
              </div>
            </li>
            <li className="nav-item mb-1">
            <button className="btn btn-primary">+ Direct Invoice</button>
            </li>
            <li className="mb-2 mb-2">
            <button className="btn btn-primary">+Invoice For Grn</button>
            </li>
            <li className="nav-item mb-3">
            <button className="btn btn-primary">+Invoice For IB</button>
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
                          <button className="btn btn-primary btn-sm">View</button>
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
  );
}
