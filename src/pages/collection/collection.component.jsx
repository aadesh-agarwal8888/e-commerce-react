import React from 'react';
import {connect} from 'react-redux';

import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collections}) => {
    const {title, items} = collections;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProp = (state, ownProps) => ({
    collections: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProp)(CollectionPage);