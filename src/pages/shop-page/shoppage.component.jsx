import React from 'react';

import './shoppage.styles.scss';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

const Shoppage = ({match}) => {
        return <div className = "shop-page">
            <div>
                <Route component = {CollectionOverview} exact path = {`${match.path}`} />
                <Route component={CollectionPage} path = {`${match.path}/:collectionId`} />
            </div>
        </div>
    };

export default Shoppage;