import React from 'react';
import {
  CardContainer,
  CardImage,
  CardText,
  MainContainer,
} from './Main.styled';

import CardImage1 from '../assets/image/Card_1.png';
import CardImage2 from '../assets/image/Card_2.png';
import CardImage3 from '../assets/image/Card_3.png';
import CardImage4 from '../assets/image/Card_4.png';

const Main = () => {
  return (
    <MainContainer>
      <CardContainer>
        <CardImage src={CardImage1} alt="Card Image" />
        <CardText>Індивідуальна психотерапія</CardText>
      </CardContainer>

      <CardContainer>
        <CardImage src={CardImage2} alt="Card Image" />
        <CardText>Групові сесії</CardText>
      </CardContainer>

      <CardContainer>
        <CardImage src={CardImage3} alt="Card Image" />
        <CardText>Психологічне консультування</CardText>
      </CardContainer>

      <CardContainer>
        <CardImage src={CardImage4} alt="Card Image" />
        <CardText>Психотерапія online</CardText>
      </CardContainer>
    </MainContainer>
  );
};

export default Main;
