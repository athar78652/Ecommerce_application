import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Products from './Products';
import Signup from './Signup';
import Cart from './Cart';

const Router = ({productItems,cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/cart' element={<Cart cartItems={cartItems} 
                handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}/>
            </Routes>
        </div>
    );
}

export default Router;
