/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './js/reducer';
import SavingsContainer from './js/savings/components/SavingsContainer';

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SavingsContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
