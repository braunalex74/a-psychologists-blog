import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  background-size: cover;
  background-position: center;
  height: 900px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 130px;

  background-image: url(${props => props.backgroundImage});
  position: absolute;
  width: 1920px;
  left: 0px;
  top: 90px;
`;

export const HeroTitle = styled.h1`
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 500;
  font-size: 60px;
  line-height: 10px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #fcba12;
`;

export const HeroText = styled.h2`
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 10px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #fcba12;
`;

export const HeroButton = styled.button`
  background-color: #093426;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  font-family: 'Paytone One';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  align-items: center;
  text-align: center;

  color: #f7edd4;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  border-radius: 10px;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
