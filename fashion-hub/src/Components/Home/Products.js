import React from 'react'
 import "./Products.scss";
import ProductsDeals from './ProductsDeals';
import  { Divider } from "@mui/material"
import ProductCategories from "./ProductCategories";

const Products=()=> {
    return (
        <div>
            <ProductsDeals />
            <ProductCategories /> 
            <br />
            <br />
            <Divider />
        </div>
        
       
    )
}

export default Products;
