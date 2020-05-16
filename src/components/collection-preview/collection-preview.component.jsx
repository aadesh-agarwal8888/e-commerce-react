import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss'

const CollectionPreview = ({title, items, history, match, routeName}) => {
    return <div className = "collection-preview">
        <div className = "title" 
            onClick={() => history.push(`${match.path}/${routeName}`)} 
        >
            {title.toUpperCase()}
        </div>
        <div className = "preview">
            {
                items
                .filter((item, index) => index < 4) 
                .map((item) => (
                    <CollectionItem key = {item.id} item = {item}/>
                ))
            }
        </div>

    </div>
}

export default CollectionPreview;