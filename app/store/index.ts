'use strict';
import Redux, {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import {IStore} from 'model@app/store';
import reducers from 'reducers@app';

/*
 * @param {Object} initial state to bootstrap our stores with for server-side rendering
 * @param {History Object} a history object. We use `createMemoryHistory` for server-side rendering,
 *                          while using browserHistory for client-side
 *                          rendering.
 */
export default function initStore(initialState?: IStore): Redux.Store<IStore> {
  // Installs hooks that always keep react-router and redux
  // store in sync
  const middleware: Redux.Middleware[] = [thunk];

  const store: Redux.Store<IStore> = createStore<IStore | undefined, any, {}, {}>(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  return store;
}
