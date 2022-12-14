import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import ApiIcon from '@mui/icons-material/Api';
import CelebrationIcon from '@mui/icons-material/Celebration';

const ProductOfferTable = () => {
  return (
    <TableContainer style={{border: '2px solid silver', marginRight:"1rem", boxShadow:"2px 2px 10px silver", borderRadius:"5px"}}>
      <Table sx={{Width: 300, borderRadius: "10px" }} size="small" >
        <TableRow>
          <TableCell><span  style={{color:"red", fontWeight:"bold", fontSize: "18px"}}><ApiIcon /> Save Extra: </span>  with 4 offers</TableCell>
          
        </TableRow>
        <TableRow>
          <TableCell><span  style={{color:"red", fontWeight:"bold", fontSize: "16px"}}><CelebrationIcon />
              style details:</span> Inspired by the Taj Mahal, Tom Dixon's Stone collection makes use of solid marble in a series of household accessories. The Stone serving board is a heavy and tactile slab cut from a single piece of marble that's simultaneously suited to both preparing and serving food.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
          <span  style={{color:"red", fontWeight:"bold", fontSize: "16px"}}> Bank Offer (12):</span> Additional INR 250 Instant Discount on Citibank
            Credit EMI Transactions. Minimum purchase of INR 15000 See AllBank
            Offer (12): Additional INR 250 Instant Discount on Citibank Credit
            EMI Transactions. Minimum purchase of INR 15000 See All
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{textAlign:"center", color: "#007185"}}>See 2 more
          </TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default ProductOfferTable;
