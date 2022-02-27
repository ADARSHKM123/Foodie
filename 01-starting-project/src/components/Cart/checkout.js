import classes from './checkout.module.css';
import { useRef,useState } from 'react';

const isEmpty = value => value.trim() === '';
const isSixchar = value => value.trim().length !== 6;


const Checkout = (props) => {

  const [formValidation, setformValidation] = useState({
    name:true,
    street:true,
    postal:true,
    city:true,
  })

  const nameRef = useRef();
  const streetRef = useRef();
  const postalcodeRef = useRef();
  const cityRef = useRef();

  


  const confirmHandler = (event) => {
    event.preventDefault();

  const entered_Name = nameRef.current.value
  const entered_Street = streetRef.current.value
  const entered_City = cityRef.current.value
  const entered_Postal = postalcodeRef.current.value

   
  const enteredNameValid = !isEmpty(entered_Name);
  const enteredStreetValid = !isEmpty(entered_Street);
  const enteredCityeValid = !isEmpty(entered_City);
  const enteredPostalCodeValid = !isSixchar(entered_Postal);

  setformValidation({
    name:enteredNameValid,
    postal:enteredPostalCodeValid,
    street:enteredStreetValid,
    city:enteredCityeValid,
  })
  console.log(entered_Name);
  console.log(entered_Street);
  
  const formValid = enteredNameValid && enteredStreetValid && enteredCityeValid && enteredPostalCodeValid;

  if(!formValid){
  return;
  }
 
  props.Onconfirm({
    name:entered_Name,
    street:entered_Street,
    city:entered_City,
    postal:entered_Postal
  })
  };

  
  const nameControlClasses = `${classes.control} ${formValidation.name? '' : classes.invalid}`;
  const streetControlClasses = `${classes.control} ${formValidation.street? '' : classes.invalid}`;
  const postalControlClasses = `${classes.control} ${formValidation.postal? '' : classes.invalid}`;
  const cityControlClasses = `${classes.control} ${formValidation.city? '' : classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef} />
        {!formValidation.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetRef} />
        {!formValidation.street && <p>Please enter a valid Street!</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalcodeRef}/>
        {!formValidation.postal && <p>Please enter a valid Postal Code!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityRef}/>
        {!formValidation.city && <p>Please enter a valid City Name!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.Oncancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;