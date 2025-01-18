import { Link} from 'react-router';


function Header(props){
    return(
<header className="d-flex justify-between align-center p-40"> 
<Link to = "/">
<div className="d-flex align-center">

  <img width= {40} height={40} src="/img/logo.png"/>

<div>
  <h3 className="text-uppercase">Premium sneakers store</h3>
  <p className="opacity-5">Shop the best sneakers in Ukraine</p>
  
  </div>

  
</div>
</Link>
<ur className = "d-flex">
  <li onClick={props.onClickCart} className="mr-30 cu-p">
  
    <img width= {18} height={18} src="/img/cart.svg"/>
    <span>500 ua</span></li>
    <li>
     <li className="mr-30 cu-p">
     <Link to = "/favorites">
<img  width= {18} height={18} src="/img/heart.svg"/>
</Link>
</li> 
  </li>
  <li>
  <img width= {18} height={18} src="/img/user.svg"/>
  </li>
</ur>
</header>
    );
}
export default Header;