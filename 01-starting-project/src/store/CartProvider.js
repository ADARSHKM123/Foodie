import CartContext from './Context'
import { useReducer } from 'react'

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount

    const exited = state.items.findIndex(items=> items.id === action.item.id)
    const existedItem = state.items[exited];

    let updatedItems;

    if(existedItem){
       const updatedItem={
         ...existedItem,
         amount:existedItem.amount + action.item.amount,
     };
     updatedItems=[...state.items];
     updatedItems[exited] = updatedItem;
    }else{
     updatedItems = state.items.concat(action.item);
    }
        return {
            items: updatedItems,  
            totalAmount: updatedTotalAmount,
        }
    }
    return defaultCartState
}

const CartProvider = (props) => {
    const [cartstate, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    )

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }

    const cartContext = {
        items: cartstate.items,
        totalAmount: cartstate.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
