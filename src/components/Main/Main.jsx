import React from 'react';
import {
  CardContainer,
  CardImage,
  CardText,
  MainContainer,
  CardContainerBlog,
  CardContainerBlogItem,
  CardContainerImage,
  CardTextBlogItem,
  CardContainerBlogItemText,
  CardTextBlogItemText,
  CardImagesContainer,
} from './Main.styled';

import CardImage1 from '../assets/image/Card_1.png';
import CardImage2 from '../assets/image/Card_2.png';
import CardImage3 from '../assets/image/Card_3.png';
import CardImage4 from '../assets/image/Card_4.png';
import CardImage5 from '../assets/image/image_blog.jpg';

const Main = () => {
  const publications = [
    {
      image: CardImage1,
      title: 'Індивідуальна психотерапія',
    },
    {
      image: CardImage2,
      title: 'Групові сесії',
    },
    {
      image: CardImage3,
      title: 'Психологічне консультування',
    },
    {
      image: CardImage4,
      title: 'Психотерапія online',
    },
    // Додайте сюди інші публікації
  ];

  return (
    <MainContainer>
      <CardContainerImage>
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
      </CardContainerImage>
      <CardContainerBlog>
        <CardContainerBlogItem>
          <CardImage src={CardImage5} alt="image_blog" />
        </CardContainerBlogItem>
        <CardContainerBlogItemText>
          <CardTextBlogItem>
            Відкинути минуле, хороше воно чи погане, і відкинути хороше чи
            погане майбутнє, щоб просто бути. Бути - означає розвивати свою
            унікальність, свою здатність бути живим, усім тим, хто Ти є, тут і
            зараз.
          </CardTextBlogItem>
          <CardTextBlogItemText>
            Психотерапія може допомогти, якщо Ти переймаєшся своїм емоційним
            світом, маєш повторювані проблеми у відносинах або відчуваєш
            труднощі з розумінням того, хто ТИ є. Аби пережити травму або
            зіткнення з важкими життєвими ситуаціями не на одинці, Ти також
            можеш звернутися до мене.
          </CardTextBlogItemText>
        </CardContainerBlogItemText>
      </CardContainerBlog>
      <CardImagesContainer>
        {publications.map((publication, index) => (
          <CardContainer key={index}>
            <CardImage src={publication.image} alt="Card Image" />
            <CardText>{publication.title}</CardText>
          </CardContainer>
        ))}
      </CardImagesContainer>
    </MainContainer>
  );
};

export default Main;
