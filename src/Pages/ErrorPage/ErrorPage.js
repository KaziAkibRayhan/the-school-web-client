import React from 'react';
import { AiTwotoneHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <Link to={'/'} className="btn btn-primary btn-lg">
                                Go Home <AiTwotoneHome className='fw-bold fs-2' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;