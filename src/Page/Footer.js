import React from 'react';
import { FooterContainer } from './Footerelements';

const Footer = () => {
  return (
    <FooterContainer>
        {/* <img className="logo" src={require('../images/logo.png')} alt='Game Logo' /> */}
        <p className='reminder'>  
            <b> REMINDER! </b><br/>
        </p>
        <p className='reminder-2'> 
            WIN will add one point to the total score while LOSE will Deduct one point to the total score. <br/><br/><br/><br/><br/>
        </p>
        <p className='author'> 
        ♡ Happy Gaming! From Malto & Soliven ♡ <br/>
        </p>
    </FooterContainer>
  );
};

export default Footer;