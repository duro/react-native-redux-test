/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import Main from './views/Main';
import { Provider } from 'react-redux/native';
import configureStore from './lib/redux/configureStore';

const {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

const store = configureStore();

class TellApp extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => (
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'Github NoteTaker',
              component: Main
            }} />
        )}
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

AppRegistry.registerComponent('TellApp', () => TellApp);
