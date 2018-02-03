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
  View
} from 'react-native';
var Carousel  = require('react-native-carousel');
import {Colors, Images, Constants } from '../Themes';
import styles from './styles'
export default class Log extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Carousel animate={false} indicatorText='d'>
            <View style={styles.carouselContainer}>
              <Text>
                0
              </Text>
            </View>
            <View style={styles.carouselContainer}>
              <Text>
                1
              </Text>
            </View>
            <View style={styles.carouselContainer}>
              <Text>
                2
              </Text>
            </View>
            <View style={styles.carouselContainer}>
              <Text>
                3
              </Text>
            </View>
          </Carousel>
      </View>
    );
  }
}

AppRegistry.registerComponent('Log', () => Intro);
