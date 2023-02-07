import React, { useState } from "react";
import data from "./component/Data";
import Header from "./component/Header";
import {BrowserRouter} from "react-router-dom";
import Router from "./component/Router";
import Footer from "./component/Footer";

const App =()=> {
  const {productItems}=data;
  const [cartItems,setCartItems]=useState([]);

  const handleAddProduct =(product)=>{
        const ProductExist=cartItems.find((item) => item.id === product.id);
        if(ProductExist){
          setCartItems(cartItems.map((item) => item.id === product.id ?
           {...ProductExist,quantity : ProductExist.quantity +1}: item));
        } else{
          setCartItems([...cartItems,{...product,quantity:1}])
        }
        
  }

  const handleRemoveProduct =(product)=>{
    const ProductExist=cartItems.find((item) => item.id === product.id); 
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !==product.id));
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ? {...ProductExist,quantity : ProductExist.quantity -1}: item)
      )
    }
  }
  const handleCartClearance = ()=>{
    setCartItems([]);
  }

  return (
    <>
      <div>
      <BrowserRouter>
      <Header cartItems={cartItems}/>
      <Router productItems={productItems} cartItems={cartItems} 
      handleAddProduct={handleAddProduct} 
        handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}
      />
      </BrowserRouter>
      <Footer/>
        
      </div>
    </>
  );
}

export default App;