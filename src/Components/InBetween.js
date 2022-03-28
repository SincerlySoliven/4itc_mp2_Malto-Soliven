import React from 'react';
import Card from './Cards';
import './InBetween.css';

function InBetween(props) {
  return (
    <>
        <div>
           {props.visible === "yes" &&
            <>
                <img className="iconimg" src={require('../images/icon.png')} alt='Icon' />
                <p className='rounds'> ROUND #{ props.round }</p>
                <Card card = { props.card1 }/><br/>
                <Card card = { props.card2 }/><br/>
            </>}

            {props.option !== "" && 
            <>
                <Card card = { props.card3 }/><br/><br/>

               <div className='roundresult'>
                  <p className='result'>{ props.status }</p>
               </div>
            </>
            }
        </div>
    </>
  )
}

export default InBetween