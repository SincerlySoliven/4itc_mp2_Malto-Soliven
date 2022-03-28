import styled from 'styled-components';
import FeaturePic from '../images/bg.jpg';

export const FooterContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 20rem;
  max-height: 1000px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  .reminder{
    font-size: 3rem;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 10px;
    color: #ffe53b;
    font-weight: 900;
    text-shadow: 2px 2px 15px #ffe53b;
  }
  .reminder-2{
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #ffe53b;
    font-weight: 900;
    text-shadow: 2px 2px 15px #ffe53b;
    line-height: 1rem;
  }
  .author{
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #ff0a6c;
    font-weight: 900;
    text-shadow: 2px 2px 15px #ff0a6c;
    line-height: 1rem;
  }
`;