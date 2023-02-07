import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import {FaLuggageCart} from "react-icons/fa";


const Header = ({cartItems}) => {
    return (
        <header className='header'>
            <div>
                <h1>
                    <Link to='/' className='logo'>
                        ATHAR SHOP
                    </Link>
                </h1>
            </div>
            <div className='header-Links'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to='/signup'>Signup</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to='/cart' className='cart'> <FaLuggageCart fill='red'/>
                            <span className='cart-length'>
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </span></Link>
                        </li>
                    </ul>

            </div>

        </header>
    );
}

export default Header;
