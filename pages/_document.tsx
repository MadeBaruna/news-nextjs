import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class AppDocument extends Document {
  public static async getInitialProps(ctx: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  public render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>{`html, body {
            margin: 0;
            padding: 0;
            background-color: #fefefe;
            font-family: 'Open Sans', sans-serif;
          }`}</style>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default AppDocument;
