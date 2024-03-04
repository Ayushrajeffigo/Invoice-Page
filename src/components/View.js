import React from 'react';
import Border from './Border';
import UpperBorder from './UpperBorder';
import './View.css'; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
const invoices = [
  {
    POItemId: '03/01/2024',
    GRNID: 'MIR-2024-80',
    ItemServiceName: 'PON-2024-500640',
    Description: 'NCC Ltd - Buildings',
    POPrice: 'Nagara Logistics_No',
    DispatchedQty: '2054.72',
    AcceptedQuantity: 'Closed',
    InvoiceItemPrice:'256.84'
  }
];
export default function View() {
  return (
    <>
    <UpperBorder/>
    <Border/>
    
    <div className='ras' style={{position:"relative",marginLeft:"50px"}}>
      <div className="container view ras1">
        <div className="row">
          <div className="col">
            1 of 3
          </div>
          <div className="col-6">
            2 of 3 (wider)
          </div>
          <div className="col">
            3 of 3
          </div>
        </div>
        
      </div>
      <div className="container view view1">
        <div className="row">
          <div className="col">
            <p><strong>Buyer Details</strong></p>
          </div>
          <div className="col-6">
            2 of 3 (wider)
          </div>
          <div className="col">
            3 of 3
          </div>
        </div>
        </div>
        <div className='container ' style={{position:"relative",marginTop:"20px"}}>
        <div className="row">
        <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>PO Item Id</TableCell>
                          <TableCell>GRN ID</TableCell>
                          <TableCell>Item/Service Name</TableCell>
                          <TableCell>Description</TableCell>
                          <TableCell>PO Price</TableCell>
                          <TableCell>Dispatched Qty</TableCell>
                          <TableCell>Accepted Quantity</TableCell>
                          <TableCell>Invoice Item Price(INR)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {invoices.map((invoice, index) => (
                          <TableRow key={index}>
                            <TableCell>{invoice.POItemId}</TableCell>
                            <TableCell>{invoice.GRNID}</TableCell>
                            <TableCell>{invoice.ItemServiceName}</TableCell>
                            <TableCell>{invoice.Description}</TableCell>
                            <TableCell>{invoice.POPrice}</TableCell>
                            <TableCell>{invoice.DispatchedQty}</TableCell>
                            <TableCell>{invoice.AcceptedQuantity}</TableCell>
                            <TableCell>
                            {invoice.InvoiceItemPrice}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  </div>
                  </div>
                  <div className="container view view1">
        <div className="row">
          <div className="col">
            <p><strong>Creator comment</strong></p>
            <p>Approver comment</p>
            <p>Invoice Approved</p>
          </div>
          <div className="col-6">
           
          </div>
          <div className="col">
            <p>&nbsp;Base Price : 218.50</p>
            <p>&nbsp;Tax Price : 38.34</p>
            <p>&nbsp;Total Price : 256.84</p>
          </div>
        </div>
        </div>
                  </div>
        
      
      
    </>
  );
}
