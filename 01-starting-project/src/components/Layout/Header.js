import React,{Fragment} from 'react';
import classes from './Header.module.css'
import mealsimg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import MealsSummary from '../Meals/MealsSummary';

const Header=(props)=>{
  return(
   <Fragment>
   <header className={classes.header}>
     <h1>Foodie</h1>
     <HeaderCartButton onclick={props.onShowcart}/>
   </header>
   <div className={classes['main-image']}>
     <img src={mealsimg} alt='A table full covered with delicious food' />
    <MealsSummary/>
   </div>
   </Fragment>
  )

}


export default Header;