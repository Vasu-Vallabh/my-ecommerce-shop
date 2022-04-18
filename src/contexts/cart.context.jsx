import {createContext, useEffect, useState} from "react";

const addCartItem = (cartItems, product) => {

    // find if cartItems contains productToAdd
    const existingItem = cartItems.find((item) => item.id === product.id);

    // if item found Increment
    if(existingItem) {
        return cartItems.map((cartItem) => cartItem.id === product.id ?
            { ...cartItem, quantity: cartItem.quantity+1} : cartItem)
    }

    // return new array with modified cartItem/ new cart item
    return [...cartItems, {...product, quantity: 1}];
}

const removeCartItem = (cartItems, product) => {

    // find if cartItems contains productToAdd
    const existingItem = cartItems.find((item) => item.id === product.id);

    // if item found remove the item
    if(existingItem) {
        return cartItems.filter(item => item.id!==product.id);
    }

    // return new array
    return [...cartItems];
}

const addItemsIntheCart = (cartItems) => {
    const initialValue = 0;
    return cartItems.reduce(
        (previousValue, currentValue) => previousValue + currentValue.quantity,
        initialValue
    )
}

const addCartItemQuantity = (cartItems, product) => {
    const foundItem = cartItems.find((item) => item.id === product.id);
    if (foundItem) {
        return cartItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
    }
    return [...cartItems]
}

const subtractCartItemQuantity = (cartItems, product) => {
    const foundItem = cartItems.find((item) => item.id === product.id);
    if (foundItem.quantity > 1) {
        return cartItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity - 1} : item)
    } else {
        return removeCartItem(cartItems, product);
    }
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},

    cartItems: [],

    count: 0,
    setCount: () => {},

    addItemToCart: () => {},
    removeItemFromCart: () => {},
    increaseItemCount: () => {},
    decreaseItemCount: () => {},
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }
    const increaseItemCount = (product) => {
        setCartItems(addCartItemQuantity(cartItems, product))
    }

    const decreaseItemCount = (product) => {
        setCartItems(subtractCartItemQuantity(cartItems, product))
    }

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems, product));
    }
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(addItemsIntheCart(cartItems));
    }, [cartItems]);

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, count, removeItemFromCart, increaseItemCount, decreaseItemCount};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
