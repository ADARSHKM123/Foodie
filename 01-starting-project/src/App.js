import Header from './components/Layout/Header';
import React,{Fragment,useState} from 'react'; 
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


function App() {

  const [cartIsShown, setcartIsShown] = useState(false);

  const showacrtHandler=()=>{
    setcartIsShown(true);
  }
  const hidecartHandler=()=>{
    setcartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Header onclick={showacrtHandler}/> 
      <main>
      <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
