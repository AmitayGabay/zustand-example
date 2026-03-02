import React, { useEffect, useState } from 'react'
import useCartStore from '../store/useCartStore.js'

export default function Card({ product }) {
    // const { cart, addToCart, removeFromCart } = useCartStore();
    const cart = useCartStore((state) => state.cart);
    const addToCart = useCartStore((state) => state.addToCart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        const itemInCart = cart.find((item) => item.id == product.id);
        if (itemInCart) {
            setIsInCart(true);
        } else {
            setIsInCart(false);
        }
    }, [cart]);

    return (
        <div className='card'>
            <h2>{product.image}</h2>
            <h4>{product.category}</h4>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h2>${product.price}</h2>
            <span>{isInCart ? "In cart" : "Not in cart"}</span>
            {!isInCart && <button onClick={() => addToCart(product)}>Add to cart</button>}
            {isInCart && <button onClick={() => removeFromCart(product)}>Remove from cart</button>}
        </div>
    )
}
