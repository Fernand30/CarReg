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
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from 'react-native';
var Carousel  = require('react-native-carousel');
import {Colors, Images, Constants } from '../Themes';
import styles from './styles'
import {Actions,} from 'react-native-router-flux'

export default class Setup extends Component {

  goback(){
    Actions.pop()
  }

  render() {
    return (
      <ImageBackground source={Images.background} style = {styles.backgroundImage}>
          <View style={styles.status}/>
          <View style={styles.headerView}>
            <View style={styles.rightView}>
              <TouchableOpacity onPress={this.goback.bind(this)} style={styles.back}>
                <Image source={Images.backArrow} style={styles.back}/>
              </TouchableOpacity>  
            </View>
            <View style={styles.centerView}>
              <Text style={styles.signText}>CAR SETUP</Text>
            </View>
            <View style={styles.leftView}>

            </View>
          </View>
          <View style={styles.textInputView}>
            <View style={styles.rowView}>
              <Text style={styles.signText}>Car Name:</Text>
              <TextInput style={styles.textInput}/>
            </View>  
            <View style={styles.rowView}>
              <Text style={styles.signText}>Purchase Date:</Text>
              <TextInput style={styles.textInput}/>
            </View>  
          </View>
          <TouchableOpacity style={styles.plusView}>
            <Text style={styles.plusText}>＋</Text>
          </TouchableOpacity>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.donebutton}>
              <Text style={styles.doneText}>DONE</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    );
  }
}

AppRegistry.registerComponent('Setup', () => Intro);
