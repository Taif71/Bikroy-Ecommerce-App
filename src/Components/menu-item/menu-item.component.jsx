import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div 
        // style={{
        //     backgroundImage: `url(${imageUrl})`
        // }} 
        // className='menu-item'>
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem);

// by wrapping the component with WithRouter we now have access to history