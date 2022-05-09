import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>

            <div className='text-center'>
                <h1 className='text-danger'>404</h1>
                <Link to='/' className='btn btn-primary'>Go to home</Link>
            </div>
        </div>
    );
};

export default Notfound;