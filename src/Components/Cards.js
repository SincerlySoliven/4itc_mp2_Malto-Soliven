import React from 'react';
import './Cards.css';

function Cards(props) {

  return (
    <>
        <div className='cards'>
                <p className='card2'>{ props.card }</p>
              </div>
    </>
  )
}

export default Cards