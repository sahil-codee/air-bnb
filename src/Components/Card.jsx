import React from 'react';

function Card(props) {
  console.log(props);
  let badgeText 
  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT" 
  } else if (props.data.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
  <div className='card'>
    {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img src={`images/${props.data.coverImg}`} className='card-img'/>
      <div className='card-stats'>
         <img className='card-star' src="images/star.png" alt="Star" /> 
         <span>{props.data.stats.rating}</span>
         <span className='gray'>({props.data.stats.reviewCount})</span>
         <span className='gray'>{props.data.location}</span>
      </div>
      <p className='card-title'>{props.data.title}</p>
      <p className='card-description'>{props.data.description.substring(0,80)}</p>
      <p className='card-price'><span className='bold'>From ${props.data.price}</span> / person</p>
  </div>
  )
}

export default Card;
