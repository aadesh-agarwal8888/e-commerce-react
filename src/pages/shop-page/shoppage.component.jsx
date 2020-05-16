import React from 'react';

import './shoppage.styles.scss';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../components/firebase/firebase.utils';

import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions'; 
import { WithSpinner } from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class Shoppage extends React.Component {  

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {

        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
            this.setState({loading: false})
        })
    }

    render() {
    const {match} = this.props;
    const {loading} = this.state;
    return (
        <div className = "shop-page">
            <div>
                <Route render = {(props) => <CollectionsOverviewWithSpinner isLoading = {loading} {...props} />} 
                    exact path = {`${match.path}`} 
                />
                <Route render = {(props) => <CollectionsPageWithSpinner isLoading = {loading} {...props} />}
                    path = {`${match.path}/:collectionId`} 
                />
            </div>
        </div>
    )};
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(Shoppage);