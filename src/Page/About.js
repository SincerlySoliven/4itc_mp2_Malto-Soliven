import React from 'react';
import { AboutContainer } from './Aboutelements';

const About = () => {
  return (
    <AboutContainer>
        <img className="logo" src={require('../images/logo.png')} alt='Game Logo' />
      <h1> WELCOME TO THE GAME </h1>
        <p className='first'>  WANNA PLAY? </p>
        <p className='second'>  Follow the Instructions! </p>
        <p className='inst-first'>  
            • The game will have five rounds of plays. It will randomly 
            draw TWO numbers. <br/> Player will choose “Deal” or “No Deal” 
            after the first two numbers are revealed <br/><br/>

            • If the two cards are <b> NOT identical </b>: <br/>
            - The player has the option to choose between DEAL or NO DEAL. <br/>
            - If the user chose DEAL - the player WINS the game if the THIRD number is in-between the first two drawn numbers. Otherwise, the player LOSES. <br/>
            - WIN will add one point to the total score while LOSE will Deduct one point to the total score. <br/>
            - When the user chooses NO DEAL, half points will be deducted to the total score. <br/> <br/>

            • If the two cards are <b>IDENTICAL</b>: <br/>
            - If the two randomized numbers are identical, the player has the option to choose between HIGHER or LOWER. <br/>
            - If the player chose HIGHER - the player WINS the game if the THIRD number is higher than the first two identical drawn numbers. Otherwise, the player LOSES. <br/>
            - If the user chose LOWER- the player WINS the game if the THIRD number is higher than the first two identical drawn cards. Otherwise, the player LOSES. <br/>
            - If the third randomized number is the same as the first two numbers, it is considered as a loss. <br/>


        </p>
    </AboutContainer>
  );
};

export default About;