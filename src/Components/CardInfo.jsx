import React from 'react';
import Card from './Card';
import Data from '../Data';

function CardInfo() {
    console.log(Data);
  return (
  <div className='card-info'>
    {  Data.map(data => {
          return ( 
      <Card
      key={data.id}
      data={data}
      /> 
      )})}
  </div>

  )
}

export default CardInfo;
