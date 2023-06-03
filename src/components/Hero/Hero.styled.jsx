import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${props => props.backgroundImage});
`;

export const HeroText = styled.h1`
  font-size: 24px;
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;

export const HeroButton = styled.button`
  background-color: #093426;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;
