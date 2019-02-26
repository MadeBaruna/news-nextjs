import React, { StatelessComponent } from 'react';
import styled from 'styled-components';

interface IProps {
  article: Article;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const Title = styled.h4`
  margin: 0;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
  margin-bottom: 5px;
`;

const Description = styled.p`
  flex: 1;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  margin: 0;
  color: #777;
`;

const Image = styled.img`
  width: 200px;
  height: 112.5px;
  object-fit: cover;
  border: 1px solid black;
`;

const ArticleItem: StatelessComponent<IProps> = ({ article }) => (
  <Wrapper>
    <TextWrapper>
      <Title>{article.title}</Title>
      <Description>{article.description}</Description>
    </TextWrapper>
    <Image src={article.urlToImage} />
  </Wrapper>
);

export default ArticleItem;
