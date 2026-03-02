import { create } from "zustand";

const myCallback = (set) => {
    return {
        cart: [],
        addToCart: (product) => {
            set((state) => {
                return {cart: [...state.cart, product]}
            })
        },
        removeFromCart: (product) => {
            set((state) => {
                return {cart: state.cart.filter((item) => item.id !== product.id)}
            })
        },
        claerCart: () => {
            set({cart: []});
        }
    }
}
const useCartStore = create(myCallback);

export default useCartStore;