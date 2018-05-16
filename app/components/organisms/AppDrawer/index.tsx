// Will remove this file after fixing material-ui with next.js 6.x

import React from 'react';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {routes} from 'next@routes/app';
const {Link} = routes;

const drawerWidth = 240;

interface StateProps {
  classes: any;
}

class AppDrawer extends React.Component<StateProps> {

  render() {
    const {classes} = this.props;
    return (
      <div>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar, classes[`appBar-left`])}>
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap={true}>
                Starter kit
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left">
            <div className={classes.drawerHeader}>
              <Toolbar>
                <Button>
                  <Link route="/">
                    <Typography variant="button" gutterBottom={true} color="inherit">
                      Menu
                    </Typography>
                  </Link>
                </Button>
              </Toolbar>
            </div>
            <Divider />
            <List>
              <List subheader={<ListSubheader>Menu1</ListSubheader>}>
                <ListItem button={true}>
                  <Link route={`/media/create`}>
                    <ListItemText primary="Create" />
                  </Link>
                </ListItem>

                <ListItem button={true}>
                  <Link route={`/media/list`}>
                    <ListItemText primary="List" />
                  </Link>
                </ListItem>
                <Divider />
              </List>

              <List subheader={<ListSubheader>Menu2</ListSubheader>}>
                <ListItem button={true}>
                  <Link route={`/hashtag/create`}>
                    <ListItemText primary="Create" />
                  </Link>
                </ListItem>
                <ListItem button={true}>
                  <Link route={`/hashtag/list`}>
                    <ListItemText primary="List" />
                  </Link>
                </ListItem>
                <Divider />
              </List>

              <List subheader={<ListSubheader>Menu3</ListSubheader>}>
                <ListItem button={true}>
                  <Link route={`/settings/account_edit`}>
                    <ListItemText primary="Account" />
                  </Link>
                </ListItem>
                <ListItem button={true}>
                  <Link route={`/settings/account_list`}>
                    <ListItemText primary="List" />
                  </Link>
                </ListItem>
                <Divider />
              </List>
            </List>
          </Drawer>
          <main className={classes.content as any}>{this.props.children as any}</main>
          <div style={styles.height} />
        </div>
      </div>
    );
  }
}

const materilUiStyles: any = (theme: any) => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

const styles = {
  link: {
    textDecoration: 'none',
  },
  height: {
    height: '1500px',
  },
};

export default withStyles(materilUiStyles)(AppDrawer);
