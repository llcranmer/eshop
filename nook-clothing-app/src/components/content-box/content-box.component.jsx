import React from 'react';
import './content-box.styles.scss';

const ContentBox = ({title}) => (
        <div className="content-box">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
)

export default ContentBox; 