import React from 'react';
import {Switch,Route} from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.components';
import Shoppage from './pages/shop-page/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth, createUserProfileDocument} from './components/firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './components/redux/user/user.actions';

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

    } else {
      setCurrentUser(userAuth)
      console.log(this.state);
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
        <Route exact  path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
