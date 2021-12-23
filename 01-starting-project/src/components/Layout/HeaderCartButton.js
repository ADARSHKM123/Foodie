import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from '../../store/Context';
import { useContext } from 'react';

const HeaderCartButton = (props) => {
  const cartctx = useContext(CartContext);

  const numberOfCartItems= cartctx.items.reduce((acc,item)=>  {
    return acc + item.amount
  },0);
  
  return ( 
     <button className={classes.button} onClick={props.onclick}>
       <span className={classes.icon}><CartIcon/> </span>
       <span>Your cart</span>
       <span className={classes.badge}>{numberOfCartItems}</span>
     </button>

   );
}
 
export default HeaderCartButton;