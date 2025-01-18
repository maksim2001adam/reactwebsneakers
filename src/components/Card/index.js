import React from 'react';
import ContentLoader from "react-content-loader";
import styles from './Card.module.scss';

function Card ({id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false, loading = false}){
  const [isAdded, setIsAdded]=  React.useState(added);
  const [isFavorite, setIsFavorite]=  React.useState(favorited);
  const onClickPlus = () => {
    onPlus({id, title, imageUrl, price});
    setIsAdded(!isAdded);
  };

  const onClickFavorite =() => {
    onFavorite({id, title, imageUrl, price});
    setIsFavorite(!isFavorite);
  }
    return(
      
<div className={styles.card}> {
  
  loading ? <ContentLoader 
  speed={0}
  width={150}
  height={186}
  viewBox="0 0 150 186"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"

>
  <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
  <rect x="4" y="102" rx="5" ry="5" width="150" height="15" /> 
  <rect x="2" y="130" rx="5" ry="5" width="100" height="15" /> 
  <rect x="5" y="154" rx="5" ry="5" width="80" height="24" /> 
  <rect x="110" y="146" rx="10" ry="10" width="32" height="32" />
</ContentLoader> :
<>
<div className={styles.favorite} onClick={onClickFavorite}>
  <img src={isFavorite ? "/img/he.svg" : "/img/unlike.svg"} alt="Unlike"></img>
  </div>
  <img width={133} height={112} src={imageUrl} alt="crosu"/>
  <h5>{title}</h5>
  <div className="d-flex justify-between align-center">
    <div className="d-flex flex-column ">
      <span>Price:</span>
      <b>{price}</b>
    </div>
  
    <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-cheket.svg" : "/img/btn-plus.svg"} alt="Plus"/>
  </div>
</>
  
  }

</div>
    );
}
export default Card;

