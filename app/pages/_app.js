import React from 'react';
import App, {Container} from "next/app";
import {Provider} from "react-redux";
import withRedux from "hocs@app/withRedux";
import initStore from 'store@app';
import axios from 'axios';

import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import getPageContext from '../hocs/getPageContext';

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */

const muiTheme = {
  palette: {},
};
const styles = (_theme) => ({
  '@global': {
    html: {
      background: '#fff',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    body: {
      margin: 0,
    },
  },
});

let AppWrapper= (props) => props.children;
AppWrapper = withStyles(styles)(AppWrapper);

class MyApp extends App {

  pageContext = null;

  static async getInitialProps({Component, ctx}) {
    const {req, res, store} = ctx;
    if (req && req.user) {
      axios.defaults.baseURL = process.env.baseURL;
    }

    // we can dispatch from here too
    store.dispatch({type: 'OPEN_MESSAGETE_SNACBAR', payload: 'foo'});

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return {pageProps};

  }

  componentWillMount() {
    try {
      this.pageContext = this.props.pageContext || getPageContext();
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    try {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    } catch (err) {
      console.log(err);
    }
  }


  render() {
    const {Component, pageProps, store} = this.props;
    return (
      <Container>
        <Provider store={store}>
          <MuiThemeProvider
            theme={createMuiTheme({...muiTheme})}
            sheetsManager={this.pageContext.sheetsManager}>
            <AppWrapper>
          <Component {...pageProps} />
            </AppWrapper>
          </MuiThemeProvider>
        </Provider>
      </Container>
    );
  }

}

export default withRedux(initStore)(MyApp);