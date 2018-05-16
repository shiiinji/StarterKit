import App, {Container} from "next/app";
import {Provider} from "react-redux";
import withRedux from "hocs@app/withRedux";
import initStore from 'store@app';
import axios from 'axios';


/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */

class MyApp extends App {

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

  render() {
    const {Component, pageProps, store} = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }

}

export default withRedux(initStore)(MyApp);