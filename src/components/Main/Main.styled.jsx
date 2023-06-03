import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1200px;
`;

export const CardContainer = styled.div`
  width: 700px;
  height: 270px;
  margin-right: 100px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardText = styled.p`
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  color: #093426;
  margin-top: 10px;
`;
