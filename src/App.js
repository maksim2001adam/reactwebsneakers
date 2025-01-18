
import React from 'react';
import axios from 'axios';
import { Routes, Route} from 'react-router';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
 const [cartOpened, setCartOpened] = React.useState(false);
 const [isReady, setIsReady] = React.useState(true);

 React.useEffect(() =>{
async function fetchData() {
  
  const itemsResponse = await axios.get('https://676164616be7889dc360df06.mockapi.io/items');
   const cartResponse = await  axios.get('https://676164616be7889dc360df06.mockapi.io/cart');
   const favoritesResponse = await  axios.get('https://676164616be7889dc360df06.mockapi.io/cart');
 
setIsReady(false);

                          setItems(itemsResponse.data);
                          setCartItems(cartResponse.data);
                          setFavorites(favoritesResponse.data);
}
   
fetchData();
 },[]);
 
 const onAddToCart =(obj) =>{
  if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
    axios.delete(`https://676164616be7889dc360df06.mockapi.io/cart${obj.id}`);
    setCartItems( prev => prev.filter (item => Number(item.id) !== Number(obj.id)));
  }
  else{
    axios.post('https://676164616be7889dc360df06.mockapi.io/cart', obj);
         
    setCartItems([...cartItems, obj]);
  }
 
   
 };

 const onRemoveItem = (id) =>{
  axios.delete(`https://676164616be7889dc360df06.mockapi.io/cart${id}`);
         
 setCartItems((prev)=>prev.filter((item)=>item.id !== id))
 };
 const onAddToFavorite =(obj) =>{
  if (favorites.find((favOb) => favOb.id === obj.id)){
    axios.delete(`https://676164616be7889dc360df06.mockapi.io/cart${obj.id}`);

  }
  else {
    axios.post('https://676164616be7889dc360df06.mockapi.io/cart', obj);
         
    setFavorites([...cartItems, obj]);
     };
  }
  
 

 const onChangeSearchInput=(event) =>{
  setSearchValue(event.target.value);
 };

 
 

  return (
    <AppContext.Provider value = {{items, cartItems, favorites}}>
    <div className="wrapper clear"> 
  
 {cartOpened ?<Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/> : null} 


 <Header onClickCart ={() => setCartOpened(true)} />
 <Routes>
        <Route
          path="/"
          element={
            <Home
            
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isReady={isReady}
            
            />
          }
          exact
        />
      </Routes>
      <Routes>
        <Route
          path="/favorites"
          element={
            <Favorites items ={favorites} onAddToFavorite={onAddToFavorite}/>
          }
          exact
        />
      </Routes>

  </div>
  </AppContext.Provider>
  );
  
}

export default App;
