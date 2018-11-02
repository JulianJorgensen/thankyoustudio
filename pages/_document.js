import Document, { Head, Main, NextScript } from 'next/document';
import styled, { ServerStyleSheet, injectGlobal } from 'styled-components';
import favicon from 'assets/images/favicon.ico';
import { fonts } from 'utils/variables';

injectGlobal`
  html {
    height: 100%;
    width: 100%;
    font-family: ${fonts.primary};
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: black;
  }

  body {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    line-height: 150%;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  button {
    outline: 0;
  }
`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render () {
    return (
      <html>
        <Head>
          <title>THANK YOU &reg;</title>
          <link rel="shortcut icon" href={favicon} />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
