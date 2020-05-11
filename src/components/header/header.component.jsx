import React from 'react';

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import {auth} from '../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({currentUser}) => (
    <div className = "header">
        <Link to = "/" className = "logo-container">
            <Logo />
        </Link>
        <div className = "options">
            <Link className = "option" to = "/shop">
                Shop
            </Link>
            <Link className = "option" to = "/shop">
                Contact
            </Link>
            {
                currentUser ? (
                    <div className = "option" onClick = { () => auth.signOut()} > Sign Out </div>
                ) : ( <Link className = "option" to = "/signin">
                        Sign In
                    </Link>
                )
                

            }
            
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);