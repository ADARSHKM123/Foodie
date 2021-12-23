import { useContext } from 'react';
import Model from '../UI/Model';
import classes from './Cart.module.css';
import CartContext from '../../store/Context';
import CartItem from './CartItem';




const Cart = (props) => {
  
  const cartctx = useContext(CartContext);

  const totalamount = `${cartctx.totalAmount.toFixed(2)}`
  const hasItem = cartctx.items.length >0;
    // const numberOfCartItems= cartctx.items.reduce((acc,item)=>  {
  //   return acc + item.amount
  // },0);

  const cartItemRemoveHandler=id=>{
  
  };
  
  const cartItemAddHandler=item=>{
  
  };


  const cartItems = <ul className={classes['cart-items']}>
    {cartctx.items.map((item,i)=> 
    <CartItem
     key={item.id} 
     name={item.name} 
     amount={item.amount} 
     price={item.price}
    onRemove={cartItemRemoveHandler.bind(null,item.id)}
    onAdd={cartItemAddHandler.bind(null,item)}
      />)}</ul>
  return ( 

    <Model onClosing={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
       {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Model>
   );
}
 
export default Cart;