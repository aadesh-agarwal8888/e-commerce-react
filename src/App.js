import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.components';
import Shoppage from './pages/shop-page/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth, createUserProfileDocument} from './components/firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
//import { selectCollectionsForPreview } from './redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {

unsubscribeFromAuth = null;

componentDidMount() {
  const {setCurrentUser} = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {
      const userRef =  await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id: userRef.id,
            ...snapShot.data()
        });
      });
      //addCollectionAndDocuments('collections', collectionsArray.map( ({title, items}) => ({title, items}) ))

    } else {
      setCurrentUser(userAuth)
    }

  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

render() {
    return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        
        <Route exact path='/signin' render = {() => 
          this.props.currentUser ? (<Redirect to='/shop' />) : <SignInAndSignUp/>
        } />
      </Switch>
    </div>
    );
  };
}

const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProp, mapDispatchToProps)(App);
