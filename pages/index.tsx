import { Component } from 'react';
import { connect } from 'react-redux';

import { getArticles } from '../src/actions';
import ArticleItem from '../components/ArticleItem';

interface IProps {
  articles: Article[];
}

class Index extends Component<IProps> {
  public static async getInitialProps({ store, query }) {
    await store.dispatch(getArticles(query.category));
  }

  public render() {
    const { articles } = this.props;
    return articles.map((article) => (
      <ArticleItem key={article.url} article={article} />
    ));
  }
}

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(
  mapStateToProps,
  null,
)(Index);
