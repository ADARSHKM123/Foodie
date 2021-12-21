import React,{Fragment} from 'react';
import classes from './Header.module.css'
import mealsimg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header=(props)=>{
  return(
   <Fragment>
   <header className={classes.header}>
     <h1>Foodie</h1>
     <HeaderCartButton onclick={props.onShowcart}/>
   </header>
   <div className={classes['main-image']}>
     <img src={mealsimg} alt='A table full covered with delicious food' />
   </div>
   </Fragment>
  )

}


export default Header;