'use strict';
import React from 'react';
import {connect} from 'react-redux';
import {IMessageReducer} from 'model@app/message';
import {IStore} from 'model@app/store';

// Add message prop for Home-test.tsx's example testing
// interface DispatchProps {
//   message: IMessageReducer;
// }

class Home extends React.Component<DispatchProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    // const {message} = this.props.message;
    return <div data-test="welcome">message</div>;
  }
}

function mapStateToProps(state: IStore) {
  return {
    message: state.message,
  };
}

export default Home;
