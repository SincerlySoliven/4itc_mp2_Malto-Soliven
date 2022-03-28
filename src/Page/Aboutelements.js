import styled from 'styled-components';
import FeaturePic from '../images/bg.jpg';

export const AboutContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100rem;
  max-height: 1000px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  .logo {
      height: 30rem;
      width: 30rem;
  }
  h1 {
    font-size: clamp(5rem, 5vw, 5rem);
    margin-bottom: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 10px;
    color: #ff0a6c;
    font-weight: 900;
    text-shadow: 2px 2px 15px #ff0a6c;
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
    .first{
        font-size: 3rem;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 10px;
        color: #00ffff;
        font-weight: 900;
        text-shadow: 2px 2px 15px #00ffff;
    }

    .second{
        font-size: 3rem;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 10px;
        color: #00ffff;
        font-weight: 900;
        text-shadow: 2px 2px 15px #00ffff;
        margin-bottom: 2rem;
    }
.inst-first {
        font-size: 1.5rem;
        font-family: Arial, Helvetica, sans-serif;
        color: #ffe53b;
        font-weight: 400;
        text-shadow: 2px 2px 15px #ffe53b;
    }
`;