import React from 'react';
import {
  HeroContainer,
  HeroText,
  HeroButton,
  HeroContent,
  HeroTitle,
} from './Hero.styled';
import heroImage from '../assets/image/hero_banner.jpg';

const Hero = () => {
  return (
    <HeroContainer backgroundImage={heroImage}>
      <HeroContent>
        <HeroTitle>Браун Юлія</HeroTitle>
        <HeroText>Практичний психолог - Психоаналітик</HeroText>
        <HeroButton>Домовитись про зустріч</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
