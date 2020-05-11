import {CartActionTypes} from './cart.types';
import { addCartItems } from './cart.utils';

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

        default:
            return state;
    }
};

export default cartReducer;