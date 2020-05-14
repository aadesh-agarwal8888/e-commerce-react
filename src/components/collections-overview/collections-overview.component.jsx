import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selector';

const CollectionOverview = ({collection}) => {
    console.log(collection)
    return(
        <div className="collection-overview">
            {
                collection.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key = {id} {...otherCollectionProps}/>
                ))
            }
        </div>
    );
}

const mapStateToProp = createStructuredSelector({
    collection: selectCollections
});

export default connect(mapStateToProp)(CollectionOverview);

