import styled from 'styled-components';
import { StatelessComponent } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 700px;

  @media screen and (max-width: 699px) {
    width: 100%;
  }
`;

const Layout: StatelessComponent = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);

export default Layout;
