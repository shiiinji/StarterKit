import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import getPageContext from 'hocs@app/getPageContext';
// const ServiceWorker = require('next-workbox/service-worker');
// const Manifest = require('next-manifest/manifest');
import {JssProvider} from 'react-jss';

class MyDocument extends Document {
  static getInitialProps = (ctx: any) => {
    // Resolution order
    //
    // On the server:
    // 1. page.getInitialProps
    // 2. document.getInitialProps
    // 3. page.render
    // 4. document.render
    //
    // On the server with error:
    // 2. document.getInitialProps
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. page.getInitialProps
    // 3. page.render

    // Get the context of the page to collected side effects.
    const pageContext = getPageContext();
    const page = ctx.renderPage((Component: any) => (props: any) => (
      <JssProvider
        registry={pageContext.sheetsRegistry}
        generateClassName={pageContext.generateClassName}>
        <Component pageContext={pageContext} {...props} />
      </JssProvider>
    ));

    return {
      ...page,
      pageContext,
      styles: (
        <style
          id="jss-server-side"
          dangerouslySetInnerHTML={{
            __html: pageContext.sheetsRegistry.toString(),
          }}
        />
      ),
    };
  };
  render() {
    return (
      <html id="home" className="no-js" lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="SNS analyzer for posto.jp" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>Starter Kit</title>
          {/*<Manifest themeColor="#000000" />*/}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/*<ServiceWorker*/}
            {/*src={'/static/workbox/sw.js'}*/}
            {/*unregister={process.env.NODE_ENV !== 'production'}*/}
          {/*/>*/}
        </body>
      </html>
    );
  }
}


export default MyDocument;
