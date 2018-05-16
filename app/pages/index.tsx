import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppDrawer from 'components@app/organisms/AppDrawer/index';
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
      <Fragment>
        <CssBaseline />
        <AppDrawer>
          <Home />
        </AppDrawer>
      </Fragment>
    )
  }
}

export default HomePage