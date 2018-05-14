import React from 'react';
import axios from 'axios';
const {loadGetInitialProps} = require('next/dist/lib/utils');

export default (ComposedComponent: typeof React.Component) =>

  class Index extends React.Component {
    static async getInitialProps(ctx: any) {
      const subProps = await loadGetInitialProps(ComposedComponent, ctx);
      if (ctx.req) {
        axios.defaults.baseURL = process.env.baseURL;
      }
      return subProps;
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
