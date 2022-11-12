import React from "react";
 import "./SingleProductPage.scss";
import Box from "@mui/material/Box";

function SingleProductPage2() {
  return (
    <>
    <h1>Lehenga Choli</h1>
    <br />
      <p>
      VAT exception. VAT not included.
      item no. P00746854.{" "}
      </p>
      <br />
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            "& > *": {
              p: 2,
            },
          }}
        >
      
        </Box>
        <hr />
      </div>
    </>
  );
}

export default SingleProductPage2;
