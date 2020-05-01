import React from 'react';
import ContentBox from '../content-box/content-box.component';
import './menu-item.styles.scss';


const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
        <div style={{backgroundImage: `url(${imageUrl})`}}className="background-image"/>
            <ContentBox title={title} />
    </div>
)

export default MenuItem; 