import classes from './MealItemForm.module.css'
import Input from '../../UI/input'
import { useRef, useState } from 'react'

const MealItemForm = (props) => {
  const [amountIsvalid, setamountIsvalid] = useState(true);
  const amountRef = useRef('');

  const submitHandler=event=>{
    event.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
   
    if(enteredAmount.trim().length === 0 || enteredAmountNumber <1 ||  enteredAmountNumber >5 ){
      setamountIsvalid(false);
      return;
    }
     

    props.onAddToCart(enteredAmountNumber);

  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      ref={amountRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}

      />
      <button>+ Add</button>
      {!amountIsvalid && <P>Please enter a valid amount (1-5).</P>}
    </form>
  )
}

export default MealItemForm
