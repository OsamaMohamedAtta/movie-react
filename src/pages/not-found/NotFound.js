import React from 'react';
import notFound from '../../img/not-found.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='main-color position-fixed w-100 h-100 d-flex align-item-center '>
            <div className='not-found-img'>
                <img src={notFound} alt='not-found-img' />
            </div>
        </div>
    );
}

export default NotFound;
