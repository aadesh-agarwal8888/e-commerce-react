
export const addCartItems = (cartItems, itemToAdd) => {

    const existingCartItem = cartItems.find(
        item => item.id === itemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === itemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity+1} :
            cartItem
        )
    } else {
        return[...cartItems, {...itemToAdd , quantity:1}];
    }

};

export const removeCartItem = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(
        item => item.id === itemToRemove.id
    );

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }
    
    return cartItems.map(cartItem => 
        cartItem.id === itemToRemove.id ? 
        {
            ...cartItem, quantity: cartItem.quantity-1
        } : cartItem
    );
}