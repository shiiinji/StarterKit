// import React from 'react';
import {compose} from 'recompose';
import withStore from './withStore';
import withData from './withData';
import withLayout from './withLayout';

export default (ComposedComponent: any, pageName: string) => {
  const withPage = require(`./datapages/${pageName}`);
  return compose(withStore, withPage.default, withData, withLayout)(ComposedComponent);
};
