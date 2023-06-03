import React from 'react';
import { HeroContainer, HeroText, HeroButton } from './Hero.styled';
import heroImage from '../assets/image/hero_banner.jpg';

const Hero = () => {
  return (
    <HeroContainer backgroundImage={heroImage}>
      <HeroText>Браун Юлія</HeroText>
      <HeroText>Практичний психолог - Психоаналітик</HeroText>
      <HeroButton>Домовитись про зустріч</HeroButton>
    </HeroContainer>
  );
};

export default Hero;
