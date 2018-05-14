import React from 'react';
import {Dispatch} from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
const {loadGetInitialProps} = require('next/dist/lib/utils');
import getPageContext from './getPageContext';
import AppDrawer from 'components@app/AppDrawer';


const muiTheme: any = {
  palette: {},
};
const styles = (_theme: any) => ({
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

interface Process {
  browser: boolean;
}
declare let process: Process;

interface DispatchProps {
  dispatch: Dispatch<any, any>;
  pageContext: any;
  userAgent: string;
  classes: any;
}

let AppWrapper: any = (props: any) => props.children;
AppWrapper = withStyles(styles)(AppWrapper);

export default (ComposedComponent: typeof React.Component, _pageName: string) =>
  class WithLayout extends React.Component<DispatchProps> {
    constructor(props: any) {
      super(props);
    }
    static async getInitialProps(ctx: any) {
      const {req, res} = ctx;
      const userAgent = process.browser ? navigator.userAgent : req.headers['user-agent'];
      const statusCode = res ? res.statusCode : null;
      return {
        userAgent,
        statusCode,
        ...loadGetInitialProps(ComposedComponent, ctx),
      };
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

    pageContext: any = null;

    render() {
      const {userAgent, classes} = this.props;
      return (
        <MuiThemeProvider
          theme={createMuiTheme({userAgent, ...muiTheme})}
          sheetsManager={this.pageContext.sheetsManager}>
          <CssBaseline />
          <AppWrapper>
            <div>
              <AppDrawer classes={classes}>
                <ComposedComponent {...this.props} />
              </AppDrawer>
            </div>
          </AppWrapper>
        </MuiThemeProvider>
      );
    }
  };
