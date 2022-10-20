import React from 'react';
import './Registration.css'
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-center">
                        <h1 className="text-5xl font-bold">Registration now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter Your Email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter Your Password" className="input input-bordered" required/>
                                </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">Registration</button>
                            </div>
                        </form>
                    </div>

                    <h3>Go to the <Link className='font-bold text-blue-500' to='/login'>LogIn</Link> Page</h3>
                </div>
            </div>
        </div>
    );
};

export default Registration;