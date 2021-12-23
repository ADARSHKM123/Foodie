// import { useContext } from 'react';
import Model from '../UI/Model';
import classes from './Cart.module.css';
// import CartContext from '../../store/Context';




const Cart = (props) => {
  
  // const cartctx = useContext(CartContext);

  // const numberOfCartItems= cartctx.items.reduce((acc,item)=>  {
  //   return acc + item.amount
  // },0);

  const cartItems = <ul className={classes['cart-items']}>{[{id:'c1',name:'suchi',amount:2,price:12.99}]
  .map((item,i)=> <li key={i}> {item.name}</li>)}</ul>
  return ( 
    <Model onClosing={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
   );
}
 
export default Cart;