import React from 'react';
import { withRouter } from 'react-router-dom';
import ContentBox from '../content-box/content-box.component';
import './menu-item.styles.scss';


const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image"/>
            <ContentBox title={title} />
    </div>
)

export default withRouter(MenuItem); 