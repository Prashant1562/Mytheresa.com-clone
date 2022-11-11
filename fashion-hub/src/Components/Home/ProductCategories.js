import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataDigitalBestSeller } from './SliderfourthData';
// import imgGirl from './assets/images/defaultImage.jpg';
import "./Sliderfirst.css"

const ProductCategories = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      
    }));
  };
//   linkDefault: imgGirl,

return (
    <div className="Sliderfirst">
        <h1 style={{marginTop:"50px"}}><i >Life's New Arrivals</i></h1>
        <br />
        <p style={{fontSize:"25px",marginTop:"-15px",marginBottom:"-30px"}}></p>
      
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div  className="card">
            <div  className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <span className="category">{item.category}</span>
            </div>
          </div>
        ))}

      </Slider>
      <br/>
       <a style={{display:"block", margin:"auto", width:"100px", borderRadius:"10px", padding:"3px", backgroundColor:"black", color:"lightGray", textDecoration:"none", textAlign:"center"}} href="homeandliving">VIEW ALL</a>
       
    </div>
  );
}


export default ProductCategories;
