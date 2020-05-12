import {CartActionTypes} from './cart.types';
import { addCartItems, removeCartItem } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            };
        
        case CartActionTypes.ADD_ITEMS:
            return {
                ...state,
                cartItems: addCartItems(state.cartItems, action.payload)
            };

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, action.payload)
            }

        case CartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => ( item.id !== action.payload.id ))
            };

        default:
            return state;
    }
};

export default cartReducer;