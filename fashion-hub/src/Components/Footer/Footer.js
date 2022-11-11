import React from "react";
 import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleApp from "../Images/Google.png";
import AppStore from "../Images/app store.png";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AppsIcon from "@mui/icons-material/Apps";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <>
    <div>
      <h3 class="head">MYTHERESA – LUXURY FASHION AND DESIGNER SHOPPING</h3>
       <p class="matter">Mytheresa is an online shopping destination for children's, men's, and women’s luxury fashion and lifestyle design. Our edit makes it possible for you to choose from the finest selection of the world’s most sought-after designer brands such as Bottega Veneta, Givenchy, and Burberry. We pride ourselves on creating an easy-to-navigate online shopping platform while maintaining an elevated boutique-like feel.</p>
        <br />
<p>Our expert team of buyers scour the globe each season to bring you the most exquisite selection of fashion straight from the runways of New York, London, Paris and Milan. With our daily New Arrivals, we make it effortless for you to have the most coveted items first. Whether you’re looking to invest in timeless pieces from Gucci, Balenciaga, Christian Louboutin and Saint Laurent, or you want to set trends in Off-White, Acne Studios and Alanui, Mytheresa is the go-to fashion and designer website that can fulfill all your sartorial wishes. In our Life store, you'll find a range of established and emerging designers in home, lifestyle, and more, like Tom Dixon, Vitra and La DoubleJ. Our unique assortment of menswear, womenswear, kidswear and lifestyle design now makes it possible to shop for your loved ones – even your pets – all in one place.</p>
    <br />
    <p>Mytheresa has a long and rich fashion heritage that spans more than 30 years. What began in the heart of Munich as a contained local boutique offering creations from international designers has now grown to become one of the most innovative luxury e-commerce companies in the world. Whether you’re paying a visit to our Mytheresa Store, browsing from your computer at home, or shopping on-the-go via our mobile app, our goal always remains the same: to provide the perfect space that caters to all your shopping desires.

At Mytheresa we know that stylish men love fashion too and as a result, our professional Customer Service team is here to help with your order and make sure you are always dressed for success.</p>
    </div>
    <br />
      <div className="footer">
        <div>
          <h3>ONLINE SHOPPING</h3>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home & Living</p>
          <p>Beauty</p>
          <p>Gift Cards</p>
          <p>Mytheresa Insider New</p>
        </div>
        <div className="footer--row">
          <h3>USEFUL LINKS</h3>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>T&C</p>
          <p>Terms Of Use</p>
          <p>Track Orders</p>
          <p>Shipping</p>
          <p>Cancellation</p>
          <p>Returns</p>
          <p>Whitehat</p>
          <p>Site Map</p>
        </div>
        <div className="footer--row">
          <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className="app">
            <img
              src={GoogleApp}
              alt="app"
              width="135px"
              className="appStore googleApp"
            />
            <img src={AppStore} alt="app" className="appStore" width="120px" />
          </div>
          <h3 className="social">KEEP IN TOUCH</h3>
          <div>
            <FacebookIcon className="social1"></FacebookIcon>
            <TwitterIcon className="social1"></TwitterIcon>
            <YouTubeIcon className="social1"></YouTubeIcon>
            <InstagramIcon className="social1"></InstagramIcon>
          </div>
        </div>
        <div className="footer--row">
          <div className="que">
            <AppsIcon />
            <p className="quality">
              <b>100% ORIGINAL</b> guarantee for all products at Mytheresa.com
            </p>
          </div>
          <div className="que">
            <AutorenewIcon />
            <p className="quality">
              <b> Return within 30days</b> of receiving your order
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};
export default Footer;
