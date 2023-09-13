import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Nick Elliott - UX & design system consultant and pracitioner" />
          <meta name="description" content="Nick is an experienced UX practitioner available to work on small design or research projects.  Nick is also available to help on a consultancy basis, using his experience as a UX design manager and design system product owner." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Nick Elliott - UX & design system consultant and pracitioner" />
          <meta property="og:description" content="Nick is an experienced UX practitioner available to work on small design or research projects.  Nick is also available to help on a consultancy basis, using his experience as a UX design manager and design system product owner." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
