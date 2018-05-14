import React from 'react';
import initStore from 'store@app';
import withRedux from 'next-redux-wrapper';

export default (ComposedComponent: typeof React.Component) =>
  withRedux(initStore, null)(ComposedComponent);
