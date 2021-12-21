import Header from './components/Layout/Header';
import React,{useState} from 'react'; 
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';


function App() {

  const [cartIsShown, setcartIsShown] = useState(false);

  const showacrtHandler=()=>{
    setcartIsShown(true);
  }
  const hidecartHandler=()=>{
    console.log('backdrop');
    setcartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hidecartHandler}/>}
      <Header onShowcart={showacrtHandler}/> 
      <main>
      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
