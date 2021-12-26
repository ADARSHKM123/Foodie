import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from '../../store/Context';
import { useContext,useEffect,useState } from 'react';

const HeaderCartButton = (props) => {
  const cartctx = useContext(CartContext);

  const [btnanimation, setbtnanimation] = useState(false);

  const numberOfCartItems= cartctx.items.reduce((acc,item)=>  {
    return acc + item.amount
  },0);
  
  const btnClasses = `${classes.button} ${btnanimation ? classes.bump : ' '}`;

  useEffect(() => {
    if(cartctx.items.length === 0){
      return;
    }
   const timer = setbtnanimation(true);
    setTimeout(()=>{
      setbtnanimation(false);
    },300)
    
    return()=>{
      clearTimeout(timer);
    }
  }, [cartctx])

  return ( 
     <button className={btnClasses} onClick={props.onclick}>
       <span className={classes.icon}><CartIcon/> </span>
       <span>Your cart</span>
       <span className={classes.badge}>{numberOfCartItems}</span>
     </button>

   );
}
 
export default HeaderCartButton;