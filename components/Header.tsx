import styled from 'styled-components';
import { StatelessComponent } from 'react';
import Link from 'next/link';
import CategoryItem from './CategoryItem';
import { withRouter, WithRouterProps } from 'next/router';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 5px 8px;
  border-bottom: 1px solid #ddd;
  background-color: white;
`;

const Logo = styled.span`
  flex: 1;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  font-size: 24px;
  user-select: none;

  &:hover {
    color: #777;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  height: 34px;
  align-items: center;
  overflow-x: scroll;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const Header: StatelessComponent<WithRouterProps> = ({ router }) => (
  <Wrapper>
    <HeaderWrapper>
      <Link href="/">
        <Logo>News Feed</Logo>
      </Link>
      <Link href="/search">
        <SearchIcon src="/static/magnify.svg" />
      </Link>
    </HeaderWrapper>
    {router.pathname === '/' && (
      <CategoryWrapper>
        <CategoryItem name="General" category="general" />
        <CategoryItem name="Bussiness" category="business" />
        <CategoryItem name="Entertaiment" category="entertainment" />
        <CategoryItem name="Health" category="health" />
        <CategoryItem name="Science" category="science" />
        <CategoryItem name="Sports" category="sports" />
        <CategoryItem name="Technology" category="technology" />
      </CategoryWrapper>
    )}
  </Wrapper>
);

export default withRouter(Header);
