import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: block;
`;

export const CardContainer = styled.div`
  display: block;
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

export const CardContainerBlog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainerBlogItem = styled.div`
  width: 400px;
  height: 500px;
  margin-right: 100px;
  margin-top: 70px;
  overflow: hidden;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CardContainerImage = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1200px;
`;

export const CardTextBlogItem = styled.p`
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 600;
  font-size: 24px;
  width: 626px;

  display: flex;
  align-items: center;
  text-align: right;

  color: #093426;
`;

export const CardContainerBlogItemText = styled.ul``;

export const CardTextBlogItemText = styled.p`
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  width: 644px;

  display: flex;
  align-items: center;

  color: #093426;
`;

export const CardImagesContainer = styled.div``;
