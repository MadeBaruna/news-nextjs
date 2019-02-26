import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NProgress from 'nprogress';

import { getArticles } from '../src/actions';
import ArticleItem from '../components/ArticleItem';

interface IProps {
  articles: Article[];
  page: number;
  category: string;
  getArticles: typeof getArticles;
}

class Index extends Component<IProps> {
  public static async getInitialProps({ store, query }) {
    await store.dispatch(getArticles('headlines', 1, query.category));

    return { category: query.category };
  }

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
    if (articles.length === 0) {
      return <span>No Article</span>;
    }

    return articles.map((article) => (
      <ArticleItem key={article.url} article={article} />
    ));
  }

  private async getArticles() {
    const { page, category } = this.props;
    NProgress.start();
    await this.props.getArticles('headlines', page + 1, category);
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
