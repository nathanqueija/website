import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Layout from 'components/layout';

const GlobalStyles = createGlobalStyle`


  html {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: 1rem;
    line-height: 1.5;


  }

  *, *:before, *:after {
      box-sizing: inherit;
    }


  a {
  :hover{
    background: ${({ theme }) => theme.colors.secondary};
  }
  }
`;

const theme = {
  colors: {
    primary: '#727272',
    secondary: '#8de1f4',
    tertiary: '#40c9bb',
    quaternary: '#1b293f',
    text: '#232426'
  },
  fontFamily: "'Libre Baskerville', serif"
};

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Head>
            <title>Nathan Queija | Software Engineer</title>
            <link
              href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </ThemeProvider>
    );
  }
}
