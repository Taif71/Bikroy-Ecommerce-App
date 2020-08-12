import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div 
        // style={{
        //     backgroundImage: `url(${imageUrl})`
        // }} 
        // className='menu-item'>
        className={`${size} menu-item`}
    >
            <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} ></div>

            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1> 
                {/* exact same thing as props.title. But we destructured it here */}
                <span className='subtitle'>SHOP NOW</span>
            </div>

    </div>
);

export default MenuItem;