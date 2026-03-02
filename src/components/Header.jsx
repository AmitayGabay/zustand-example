import React from 'react'
import { Link } from 'react-router';
import useCartStore from '../store/useCartStore';

export default function Header() {
    const cart = useCartStore((state) => state.cart);

    return (
        <div className='header'>
            <Link to="/">Shop</Link>
            <Link to="/cart">Cart {cart.length}</Link>
        </div>
    )
}
