
import Card from '../components/Card';
function Home( {items, cartItems, searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
  isReady}) {

  const renderItems =()  => {
   const filtredItems =items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()),
  );
    return  (isReady ? [...Array(8)] : filtredItems).map((item, index) =>(
      <Card
      key={index}
      
   onFavorite ={onAddToFavorite}
   added ={cartItems.some(obj => Number(obj.id) === Number(item.id))}
   onPlus={(obj)=> onAddToCart(obj)}
   loading={isReady}
   {...item}

      />
    ));

  };


    return(
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Search by request: "${searchValue}"` : 'All products'}</h1>
        <div className="search-block d-flex">
         <img src="/img/search.svg" alt="Search"></img>
         {searchValue &&( <img onClick={()=> setSearchValue('')}  className="clear cu-p" src="/img/btn-rem.svg" alt="
                 Clear"></img>)}
       <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
        </div>
        </div>
       
       <div className="d-flex flex-wrap">
       
         {renderItems()} 
       
       
       </div>
       
        </div>   
    );
}

export default Home;