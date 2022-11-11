import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const SingleCard = ({ multi }) => {
  return (
    <>
      <div className="singleCard">
        <Container>
        <CardMedia
          component="img"
          height="350"
          width="50"
          image={multi.imageURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography component="div">
            {multi.typography}
          </Typography>

          <Typography margin="auto">
            {" "}
            {multi.rating} 
          </Typography>
          
          <Typography color="black" margin="auto">
            {" "}
            {multi.Price} 
          </Typography>

          {/* <Typography
            sx={{
              backgroundColor: "green",
              color: "white",
              fontSize: 18,
              m: 1,
              p: 1,
            }}
          >
            <center>Buy Now</center>
          </Typography> */}
          {/* <Typography
            sx={{
              backgroundColor: "orange",
              color: "white",
              fontSize: 18,
              m: 1,
              mt: 0,
              p: 1,
            }}
          >
            <center>Add to Cart</center>
          </Typography> */}
          {/* <Typography variant="body2" color="text.secondary">
            The best piece of wearing printed Kurti is that you don't require
            additional extras with them. It will go well with printed Kurtis.
          </Typography> */}
        </CardContent>
        <CardActions>
        
        </CardActions>
        </Container>
      </div>
    </>
  );
};

export default SingleCard;
