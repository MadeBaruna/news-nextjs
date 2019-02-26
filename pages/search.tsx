import { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NProgress from 'nprogress';
import styled from 'styled-components';

import { getArticles } from '../src/actions';
import ArticleItem from '../components/ArticleItem';
import Router from 'next/router';

const SearchInput = styled.input`
  width: calc(100% - 52px);
  margin: 10px 8px;
  font-size: 16px;
  padding: 8px 16px;
  border: 1px solid #ccc;
`;

const NoResultText = styled.span`
  margin: 10px;
`;

interface IProps {
  articles: Article[];
  page: number;
  query: string;
  getArticles: typeof getArticles;
}

interface IState {
  text: string;
}

class Index extends Component<IProps, IState> {
  public static async getInitialProps({ store, query }) {
    if (query.q) {
      await store.dispatch(getArticles('search', 1, null, query.q));
    }

    return { query: query.q };
  }

  public state = {
    text: '',
  };

  public async componentDidMount() {
    window.onscroll = async () => {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        this.getArticles();
      }
    };
  }

  public render() {
    const { articles } = this.props;
    const { text } = this.state;
    return (
      <>
        <form onSubmit={this.search}>
          <SearchInput
            data-test="search-input"
            value={text}
            onChange={this.handleInput}
            placeholder="Type and press enter to search"
          />
          <button type="submit" style={{ display: 'none' }} />
        </form>
        {articles.length === 0 && <NoResultText>No Result</NoResultText>}
        {articles.map((article) => (
          <ArticleItem key={article.url} article={article} />
        ))}
      </>
    );
  }

  private search = (event: FormEvent) => {
    const { text } = this.state;

    event.preventDefault();
    Router.push(`/search?q=${text}`, `/search/${text}`);
  }

  private handleInput = (event: FormEvent<HTMLInputElement>) => {
    this.setState({ text: event.currentTarget.value });
  }

  private async getArticles() {
    const { page, query } = this.props;
    if (!query) { return; }

    NProgress.start();
    await this.props.getArticles('search', page + 1, null, query);
    NProgress.done();
  }
}

const mapStateToProps = ({ articles, page }) => ({ articles, page });

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: bindActionCreators(getArticles, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
