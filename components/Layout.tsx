import styled from 'styled-components';
import { StatelessComponent } from 'react';
import Header from './Header';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 700px;
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: 699px) {
    width: 100%;
  }
`;

const Layout: StatelessComponent = ({ children }) => (
  <Wrapper>
    <Content>
      <Header />
      {children}
    </Content>
  </Wrapper>
);

export default Layout;
