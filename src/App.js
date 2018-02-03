/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import {Router,Scene,} from 'react-native-router-flux'

import Home from './Screens/home';
import Intro from './Screens/intro';
import Log from './Screens/log';
import Setup from './Screens/setup';

const Routes = () => (

  <Router hideNavBar={true}>
    <Scene key = "root">
      <Scene key = "intro" component = {Intro} hideNavBar={true} {...this.props} initial/>
      <Scene key = "home" component = {Home} hideNavBar={true} panHandlers={null} />
      <Scene key = "log" component = {Log} hideNavBar={true} panHandlers={null} />
      <Scene key = "setup" component = {Setup} hideNavBar={true} panHandlers={null} />
    </Scene>
 </Router>


);

export default Routes
