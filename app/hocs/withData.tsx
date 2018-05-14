import React from 'react';
import axios from 'axios';
const {loadGetInitialProps} = require('next/dist/lib/utils');

export default (ComposedComponent: typeof React.Component) =>
  class WithData extends React.Component {
    static async getInitialProps(ctx: any) {
      const {req} = ctx;
      if (req && req.user) {
        axios.defaults.baseURL = process.env.baseURL;
      }
      return {
        ...loadGetInitialProps(ComposedComponent, ctx),
      };
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
