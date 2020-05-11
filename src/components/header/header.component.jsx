import React from 'react';

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import {auth} from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
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
            <CartIcon />
            
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);



const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);