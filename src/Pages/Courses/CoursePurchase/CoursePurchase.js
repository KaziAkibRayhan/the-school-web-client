import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CoursePurchase = () => {
    const purchaseItem = useLoaderData()
    const { id, course_name, course_fee } = purchaseItem;
    return (
        <div className="card w-75 mx-auto shadow mt-5">
            <div className="card-body">
                <p>Course id: {id}</p>
                <h5 className="card-title">Course Name: {course_name}</h5>
                <p className="card-text text-muted">Course Fee: {course_fee} BDT. <span className='text-primary fw-bold fs-4'>PAID</span></p>
                <p className="card-text text-muted">Congratulation!!! Successfully Purchase This Course.</p>
                <Link className='btn btn-outline-secondary' to={'/'}>Go to your course</Link>
            </div>
        </div>
    );
};

export default CoursePurchase;