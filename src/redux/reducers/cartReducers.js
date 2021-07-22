import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        { name: 'Lenovo Laptop', id: 1 },
        { name: 'Asus Laptop', id: 2 },
        { name: 'Dell Laptop', id: 3 },
        { name: 'HP Laptop', id: 4 },
        { name: 'Toshiba Laptop', id: 5 }
    ]
};

let i = 0;

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, { productId: action.id, name: action.name, cartId: ++i }]
            }
        case REMOVE_FROM_CART:
            const remainingCart = state.cart.filter(item => item.cartId !== action.id);
            return {
                ...state,
                cart: remainingCart
            };
        default:
            return state;
    }
};

export default cartReducers;