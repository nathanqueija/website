import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/globalStyles';
import Layout from 'components/layout';

const theme = {
  colors: {
    background: '#282A36',
    backgroundDark: '#21222F',
    primary: '#96E6F7',
    secondary: '#FE93D1',
    tertiary: '#59F68C',
    quaternary: '#FF6F67',
    text: 'white',
    textLight: '#87878B',
    hover: '#3A3C48'
  },
  fontFamily: "'Fira Mono', monospace"
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
            <meta
              http-equiv='Content-Type'
              content='text/html; charset=utf-8'
            />
            <link
              href='https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700&display=swap'
              rel='stylesheet'
            />
            >
            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/static/favicon/apple-touch-icon.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='/static/favicon/favicon-32x32.png'
            />
            <link
              rel='icon'
              type='image/png'
              sizes='16x16'
              href='/static/favicon/favicon-16x16.png'
            />
            <link rel='manifest' href='/static/favicon/site.webmanifest' />
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
