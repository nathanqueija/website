import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/globalStyles';
import Layout from 'components/layout';

const theme = {
  colors: {
    primary: '#727272',
    secondary: '#8de1f4',
    tertiary: '#40c9bb',
    quaternary: '#1b293f',
    text: '#232426'
  },
  fontFamily: "'Nunito Sans', sans-serif"
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
              href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,700&display=swap"
              rel="stylesheet"
            />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/static/favicon/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/static/favicon/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/static/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/static/favicon/site.webmanifest" />
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
