

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
import Modal from 'react-native-modal'
var ImagePicker = require('react-native-image-picker');

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state=({
      changeCar: false,
      gallery: false,
      avatarSource: '',
      setting: false,
      carUrl: ''
    })
  }

  goback(){
    Actions.pop()
  }

  goHome(){
    Actions.home()
  }

  showCar(){
    this.setState({
      changeCar:!this.state.changeCar
    })
  }

  selectCar(car){
     
    if(car=='car1'){
      this.setState({
        changeCar: false,
        carUrl: 'http://meshart.ca/wp-content/uploads/2015/04/%C2%A9_Nimesh_Devkota_meshart.ca_@nimeshartwork-_all_rights_reserved_MAIN_STREET_BLACK-AND-WHITE-MESHART.CA_1.jpg',
        
      })
    }else{
      this.setState({
        changeCar: false,
        carUrl: 'http://meshart.ca/wp-content/uploads/2015/04/©_Nimesh_Devkota_meshart.ca_@nimeshartwork-_all_rights_reserved_the-english-bay_gorgeous-vancouver-sunset.jpg',
        
      })
    }
    
  }

  showGallery(){
    this.setState({
      gallery: true,
      setting: false
    })
  }

  goLog(uri){
    Actions.log({uri: uri})
  }

  goImagepicker(){
    ImagePicker.showImagePicker((response) => {
      if (!response.didCancel) {
        this.goLog(response.uri)
        }
    });
  }

  showHome(){

  }

  showSetting(){
    this.setState({
      setting: true
    })
  }

  render() {

    return (
      <ImageBackground source={Images.background} style = {styles.backgroundImage}>
          {(this.state.setting)?<View style={{flex:1,}}/>:
          <View style={{flex:1}}>
              <View style={styles.status}/>
              <View style={{flex:1}}>
                  <View style={styles.headerView}>
                    <View style={styles.rightView}>
                      <TouchableOpacity onPress={this.goback.bind(this)} style={styles.back}>
                        <Image source={Images.backArrow} style={styles.back}/>
                      </TouchableOpacity>  
                    </View>
                    <TouchableOpacity style={styles.centerView}>
                      {(this.state.carUrl!='')?<Image source={{uri:this.state.carUrl}} style={styles.car}/>:
                                              <Image source={Images.car2} style={styles.car}/>}
                    </TouchableOpacity>
                    <View style={styles.leftView}>
                      <TouchableOpacity onPress={this.showCar.bind(this)} style={styles.dropdown}>
                        <Image source={Images.dropdown} style={styles.dropdown}/>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={(this.state.changeCar)?styles.switchCarView:{width: 0,height: 0}}>
                    <Text style={styles.carText}>Select Car</Text>
                    <Text onPress={this.selectCar.bind(this,'car1')} style={styles.signText}>Switch to ca1</Text>
                    <Text onPress={this.selectCar.bind(this,'car2')} style={styles.signText}>Switch to car2</Text>
                    </View>

                    <View style={styles.buttonView}>
                      {(this.state.gallery)?
                        <View style={styles.galleryView}>
                          <View style={styles.eachGallery}>
                            <TextInput multiline value='text' style={styles.galleryText}/>
                          </View>
                          <View style={styles.eachGallery}>
                            <TouchableOpacity onPress={this.goImagepicker.bind(this)} style={styles.galleryPhoto}>
                              <Text> photo</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={styles.eachGallery}>
                            <TouchableOpacity style={styles.galleryPhoto}>
                              <Text> video</Text>
                            </TouchableOpacity>
                          </View>
                        </View>:null
                      }
                  </View>  
                </View>  
            </View>      
        }
          
            <View style={styles.tabView}>          
              <TouchableOpacity onPress={this.showHome.bind(this)} style={styles.homeView}>
                <Image source={Images.home} style={styles.home}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.showGallery.bind(this)} style={styles.plusColorView}>
                <Text style={styles.plusColorText}>＋</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.showSetting.bind(this)} style={styles.homeView}>
                <Image source={Images.setting} style={styles.home}/>
              </TouchableOpacity>
            </View>  
      </ImageBackground>
    );
  }
}

AppRegistry.registerComponent('Home', () => Home);
