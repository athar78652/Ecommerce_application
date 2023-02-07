import React from 'react';
import "./signup.css";

const Signup = () => {
    return (
        <div className='signup'>
            <form>
                <h1>Welcome to Signup Page</h1>
                <input className='set-signup' type='text' placeholder='Enter Name'></input> <br/> 
                <input className='set-signup' type='text' placeholder='Enetr E-mail Id'></input> <br/>
                <input className='set-signup' type='text' placeholder='Enter Address'></input> <br/>
                <input className='set-signup' type='number' placeholder='Enter Mobile No.'></input> <br/>
                <input className='set-signup' type='password' placeholder='Enter Password'></input> <br/>
                <input className='set-signup' type='password' placeholder='Enter Confirm Password'></input> <br/>
                <button className='btn'>Submit</button>

            </form>
        </div>
    );
}

export default Signup;
