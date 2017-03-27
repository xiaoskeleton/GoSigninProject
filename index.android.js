/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator
} from 'react-native';
import LoginPageComponent from './LoginPageComponent';

export default class SampleComponent extends React.Component {
        render() {
            let defaultName = 'LoginPageComponent';
            let defaultComponent = LoginPageComponent;
            return (
	            <Navigator style={{flex: 1, flexDirection: 'row'}}
	              initialRoute={{ name: defaultName, component: defaultComponent }}
	              configureScene={(route) => {
	                return Navigator.SceneConfigs.PushFromRight;
	              }}
	              renderScene={(route, navigator) => {
	                let Component = route.component;
	                return <Component {...route.params} navigator={navigator} />
	              }} />
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

AppRegistry.registerComponent('GoSignInProject', () => SampleComponent);
