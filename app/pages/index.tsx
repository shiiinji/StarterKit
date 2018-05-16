import React from 'react';
import Home from 'containers@app/template/Home/index';


class HomePage extends React.Component {
  static async getInitialProps(ctx: any) {
    const {store} = ctx;

    // we can dispatch from here too
    store.dispatch({type: 'OPEN_MESSAGETE_SNACBAR', payload: 'foo override'});

    return;
  }

  render() {
    return (
      <Home />
    )
  }
}

export default HomePage