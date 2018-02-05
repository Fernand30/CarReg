

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

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state=({
      changeCar: false,
      gallery: false,
      photoURL: ''
    })
  }

  componentDidMount(){
    this.setState({
      photoURL: this.props.navigation.state.params.uri
    })
  }

  goback(){
    Actions.pop()
  }

  goHome(){
    //Actions.home()
  }

  showCar(){
    
  }

  selectCar(car){
    alert('Selected '+ car)
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
                <Image source={Images.car1} style={styles.car}/>
            </View>
            <View style={styles.leftView}>
              <TouchableOpacity onPress={this.showCar.bind(this)} style={styles.dropdown}>
                <Image source={Images.dropdown} style={styles.dropdown}/>
              </TouchableOpacity>
            </View>
          </View>
          {(this.state.photoURL!='')?<Image source={{uri:this.state.photoURL}} style={styles.logImage} />:null}
          <Text style={styles.logText}>Text Information</Text>
          <TextInput multiline style={styles.logtextInput}/>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.donebutton} onPress={this.goHome.bind(this)}>
              <Text style={styles.doneText}>DONE</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    );
  }
}

AppRegistry.registerComponent('Home', () => Home);
