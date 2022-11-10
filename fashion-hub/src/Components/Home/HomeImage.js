import React from "react";
import "./HomeImage.scss";
import homeImg4 from "../Images/offer.png";
import homeImg5 from "../Images/home img5.png";
import homeImg6 from "../Images/home Img6.png";
import homeImg7 from "../Images/home7.png";
import ProductsBestDeal from "./ProductsBestDeal";
import ProductsInBudget from "./ProductsInBudget";


const HomeImage = () => {
  return (
    <div>
      <br />
          <img src="https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_DSK_2x_20220908102600.jpg?imwidth=1180&imdensity=1
" alt="Main Img" title="Home page img" width="80%" height="500px" className="homeImge" />
      
        <br />
        <br />
       
        <div>
          <img src= "https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_KIDS_DSK_2x_20220908102616.jpg?imwidth=1180&imdensity=1" alt="Main Img" width="80%" height="500px" className="homeImge" />
        </div>

        <br />
        <br />

        <div>
          <img src=
 "https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_LIFE_DSK_2x_20220908102608.jpg?imwidth=1180&imdensity=1" alt="Main Img" title="Home page img" width="80%" height="500px" className="homeImge" />
        </div>

        <ProductsBestDeal />

        <div>
          <img src={homeImg7} alt="Main Img" title="Home page img" width="100%" className="homeImg" />
        </div>
      <ProductsInBudget />
      
        

    </div>
  );
};

export default HomeImage;
