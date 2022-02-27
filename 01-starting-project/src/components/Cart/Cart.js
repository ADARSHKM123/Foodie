import React, { Fragment, useContext,useState } from 'react';
import Model from '../UI/Model';
import classes from './Cart.module.css';
import CartContext from '../../store/Context';
import CartItem from './CartItem';
import Checkout from './checkout';



const Cart = (props) => {
  
  const cartctx = useContext(CartContext);
  const [isCheckout, setisCheckout] = useState(false);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [DidSubmit, setDidSubmit] = useState(false);

  const totalamount = `${cartctx.totalAmount.toFixed(2)}`
  const hasItem = cartctx.items.length >0;
    // const numberOfCartItems= cartctx.items.reduce((acc,item)=>  {
  //   return acc + item.amount
  // },0);

  const cartItemRemoveHandler=id=>{
  cartctx.removeItem(id);
  };
  
  const cartItemAddHandler=item=>{
    cartctx.addItem({...item,amount:1})
  };

  const orderHandler=()=>{
    setisCheckout(true);
  }

  const submitDataHandler=async (userData)=>{
    setisSubmitting(true);
    await fetch('https://add-list-36a72-default-rtdb.firebaseio.com/orders.json',{
      method:'POST',
      body:JSON.stringify({
        user:userData,
        
      })
    })
    setDidSubmit(true);
    setisSubmitting(false);
    cartctx.clearCart();
    // const data =await response.json();
    // console.log(data);
  }

  const cartItems = <ul className={classes['cart-items']}>
    {cartctx.items.map((item,i)=> 
    <CartItem
     key={item.id} 
     id={item.id}
     name={item.name} 
     amount={item.amount} 
     price={item.price}
    onRemove={cartItemRemoveHandler.bind(null,item.id)}
    onAdd={cartItemAddHandler.bind(null,item)}
      />)}</ul>


      const modalAction = 
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
       {hasItem && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>
   
   const cartModalContent = <React.Fragment>
       {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      {isCheckout && <Checkout Onconfirm={submitDataHandler} Oncancel={props.onClose}/>}
      {!isCheckout && modalAction}
   </React.Fragment>

   const isSubmitingContent =
    <Fragment>
      <p>Sending Order data....</p>
      <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>Close</button>
      </div>
    </Fragment>

  const didSubmittedContent  = 
  <Fragment>
  <p>Successfully send the order!</p>
  <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>Close</button>
      </div>
      </Fragment>
  return ( 

    <Model onClosing={props.onClose}>
     {!isSubmitting && !DidSubmit && cartModalContent}
     {isSubmitting &&  isSubmitingContent}
     {!isSubmitting && DidSubmit &&didSubmittedContent}
    </Model>
   );
}
 
export default Cart;