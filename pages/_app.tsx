import React from 'react';
import { Provider } from 'react-redux';
import App, { Container, NextAppContext } from 'next/app';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../src/store';
import Layout from '../components/Layout';

class NewsApp extends App<{ store: any }> {
  public static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(NewsApp);
