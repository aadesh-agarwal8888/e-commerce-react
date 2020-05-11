import React from 'react';

import './shop.data'
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import './shoppage.styles.scss';

class Shoppage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: SHOP_DATA
        };
    };

    render() {
        const {collection} = this.state;
        return <div className = "shop-page">
            <div>
                {
                    collection.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key = {id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        </div>
    }
};

export default Shoppage;