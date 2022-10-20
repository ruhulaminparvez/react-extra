import React from 'react';
import './LogIn.css';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Enter Your Email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Enter Your Password" className="input input-bordered" required/>
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">Login</button>
                            </div>
                        </div>
                    </div>

                    <h3>Not Registered Yet? Go to the <Link className='font-bold text-blue-500' to='/registration'>Registration</Link> Page</h3>
                </div>
            </div>
        </div>
    );
};

export default LogIn;