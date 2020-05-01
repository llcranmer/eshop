import React from 'react';
import ContentBox from '../content-box/content-box.component';
import './menu-item.styles.scss';


const MenuItem = ({title, imageUrl, size}) => (
    <div style={{backgroundImage: `url(${imageUrl})`}}className={`${size} menu-item`}>
        <ContentBox title={title} />
    </div>
)

export default MenuItem; 