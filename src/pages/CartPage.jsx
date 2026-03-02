import React from 'react'
import useCartStore from '../store/useCartStore';
import Card from '../components/Card';

export default function CartPage() {
    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.claerCart);

    return (
        <div className='cartPage'>
            {(cart.length == 0) && <h1>Cart is empty</h1>}
            {cart.map((product) =>
                <Card key={product.id} product={product} isInCartPage={true} />
            )}
            <div className='summary'>
                <h2>Order Summary:</h2>
                <h3>Total Items: {cart.length}</h3>
                <h3>Total Price: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</h3>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
        </div>
    )
}
