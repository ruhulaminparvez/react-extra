import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from './../../images/logo/logo.svg'

const Nav = () => {
    return (
        <div>
            <div className='navbar bg-blue-700 text-primary-content px-14'>
                <div className="navbar-start">
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <Link to='/'><img className='w-10' src={logo} alt="" /></Link>
                        <Link to='/' className='font-bold'>Context & DaisyUI</Link>
                    </div>
                </div>
                <div>
                    <Link to='/' className="btn btn-ghost normal-case text-md">Home</Link>
                    <Link to='/products' className="btn btn-ghost normal-case text-md">Products</Link>
                    <Link to='/order' className="btn btn-ghost normal-case text-md">Order</Link>
                    <Link to='/delivery' className="btn btn-ghost normal-case text-md">Delivery</Link>
                </div>
                <div className='navbar-end'>
                    <Link to='/login' className="btn btn-ghost normal-case text-md">LogIn</Link>
                    <Link to='/registration' className="btn btn-ghost normal-case text-md">Registration</Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;