import React from 'react';

import './MenuItem.scss';

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className='background-image'
        style={{backgroundImage: `url(${imageUrl})`}}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
