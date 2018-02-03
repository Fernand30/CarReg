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
  TouchableOpacity
} from 'react-native';
var Carousel  = require('react-native-carousel');
import {Colors, Images, Constants } from '../Themes';
import styles from './styles'
import {Actions,} from 'react-native-router-flux'

export default class Intro extends Component {

  goCarSetup(){
    Actions.setup()
  }

  render() {
    return (
      <ImageBackground source={Images.background} style = {styles.backgroundImage}>
          <View style={styles.status}/>
          <View style={styles.carouselView}>
            <Carousel animate={false} 
                indicatorColor= {Colors.white}
                indicatorSize={40}
                indicatorSpace={30}
                inactiveIndicatorColor= {Colors.inactiveIndicator}
                indicatorOffset={Constants.MARGIN*10}
                inactiveIndicatorText= '•'
                indicatorText= '•'
                indicatorAtBottom={true}>
              <View style={styles.carouselContainer}>
                <Image source={Images.logo1} style={styles.logo}/>
                <Text style={styles.headText}>TWO CARS</Text>
                <Text style={styles.commonText}>The text here will be{'\n'}description associated {'\n'}with heading above.</Text>
              </View>
              <View style={styles.carouselContainer}>
                <Image source={Images.logo2} style={styles.logo}/>
                <Text style={styles.headText}>ONE CAR</Text>
                <Text style={styles.commonText}>The text here will be{'\n'}description associated {'\n'}with heading above.</Text>
              </View>
            </Carousel>
          </View>  
          <TouchableOpacity style={styles.button} onPress={this.goCarSetup.bind(this)} >
            <Image source={Images.googleIcon} style={styles.icon}/>
            <Text style={styles.signText}>
              Signup with Google
            </Text>  
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={Images.facebookIcon} style={styles.icon}/>
            <Text style={styles.signText}>
              Signup with Facebook
            </Text>  
          </TouchableOpacity>
      </ImageBackground>
    );
  }
}

AppRegistry.registerComponent('Intro', () => Intro);
