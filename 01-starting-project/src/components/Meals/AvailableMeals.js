import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealIteam';
import { useEffect,useState } from 'react';


const AvailableMeals=()=>{
  const [Meals, setMeals] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [httpError, sethttpError] = useState(null)
  

  useEffect(() => {
    
    const fetchData=async()=>{
     const response =  await fetch('https://add-list-36a72-default-rtdb.firebaseio.com/meals.json');
     const responseData = await response.json();

     if(!response.ok){
       throw new Error('Something went wrong!');
     }
     console.log(responseData);

     const loadedMeals = [];

     for(const key in responseData){
       loadedMeals.push({
         id:key,
         name:responseData[key].name,
         description:responseData[key].description,
         price:responseData[key].price
       })
     }
     setMeals(loadedMeals);
     setLoading(false);
    };
    // try{
    //   fetchData()
    // } catch(err){
    //   sethttpError(err.message);
    //   setLoading(false);
    // }
    fetchData().catch((err)=>{
      sethttpError(err.message);
      setLoading(false);
    });

  }, []);


if(Loading){
  return(
    <section className={classes.MealsLoading}>
      <p>Loading....</p>
    </section>
  )
}
  
if(httpError){
  return(
    <section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>
  )
}

  const mealsList = Meals.map(meals=> 
  <MealItem 
  key={meals.id} 
  id={meals.id}
  name={meals.name} 
  description={meals.description} 
  price={meals.price}  
  />)
  
  return(
  <section className={classes.meals}>
    <Card>
    <ul>
      {mealsList}
    </ul>
    </Card>
  </section>
  )
}

export default AvailableMeals;