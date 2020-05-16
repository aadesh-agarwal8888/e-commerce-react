import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionOverview = ({collections, history, match}) => {
    return(
        <div className="collection-overview">
            {
                collections.map(({id, ...otherCollectionProps}) => {
                return (
                    <CollectionPreview key = {id} {...otherCollectionProps} history={history} match={match}/>
                )})
            }
        </div>
    );
}

const mapStateToProp = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProp)(CollectionOverview);

