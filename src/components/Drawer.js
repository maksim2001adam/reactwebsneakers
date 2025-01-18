function Drawer({onClose,onRemove, items =[]}){
    return(
      <div  className="overlay">
        <div className="drawer">
          
        <h3  className="d-flex justify-between mb-30 ">Cart <img onClick={onClose} className="cu-p" src="/img/btn-rem.svg" alt="Clear"> 
        </img>
          </h3>
          {
            items.length > 0 ?
            <div className="items ">
            {items.map((obj) => (
              <div key={obj.id} className="cartItem d-flex aling-center mb-20">
      <div style={{backgroundImage: `url(${obj.imageUrl})`}}
      className="cartItemImg"></div>
      <div className="mr-20 flex">
        <p className="mb-5">{obj.title}</p>
        <b>{obj.price}</b>
      </div>  
      <img onClick={()=> onRemove(obj.id)} className="removeBtn" src="/img/btn-rem.svg" alt="Remove"></img>  
              </div>
      
            ))}
        
              </div> :
              <div className="cartEmply d-flex align-center justify-center flex-column flex">
              <img className="mb-20" width="120px" height="120px" src="/img/emply-cart.jpg" alt="Emply"></img>
              <h2>Cart is empty</h2>
              <p className="opacity-6">Add at least a couple</p>
              <button onClick={onClose} className="greenButton">
                <img src="/img/arrow.svg" alt="Arrow"></img>
                Go back
              </button>
              
              </div>
            
          }

        <div  className="cartTotalBlock">
        <ul>
        <li >
          <span>End:</span>
          <div></div>
          <b>20000 ua</b>
        </li>
        <li >
          <span>Tax 20%:</span>
          <div></div>
          <b>3993</b>
        </li> 
      </ul>
    <button className="greenButton">Place an order<img src="/img/arroy.svg" alt="Arroy"></img></button>
     
        </div>
     
    </div>   
      </div>
    
    );
}
export default Drawer;