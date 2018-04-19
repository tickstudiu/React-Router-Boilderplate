import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';

import reducers from './imports/redux/reducer';

import Routes from './Routes';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

class Root extends Component {
  render() {
      console.log('Store', store.getState());
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default Root;