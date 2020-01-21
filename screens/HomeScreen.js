import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Button,
  Alert,
  ActivityIndicator,
  TouchableHighlightBase
} from 'react-native';
//responsive variables

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
  } from 'react-native-responsive-screen';

//import Layout from '../constants/Layout'
//import * as Permissions from 'expo-permissions';
// import { Camera } from 'expo-camera';
//import CameraComp from '../components/Camera'
//import {RNCamera} from 'react-native-camera'
// import ImagePicker from 'react-native-image-picker'
//import { MonoText } from '../components/StyledText';
import { Header, Left, Icon, Body, Title, Right} from 'native-base'

export default class HomeScreen extends Component {
    constructor(props){
		super(props);
        this.state = { 
			photo: null,
			loading: false
		}
    }
    // handleChoosePhoto = () => {
    //     const options = {
    //       noData: true,
    //     }
    //     ImagePicker.launchImageLibrary(options, response => {
    //       if (response.uri) {
    //         this.setState({ photo: response })
    //       }
    //     })
    // }    

 render() { 
     return (
    <View style={styles.container}>
     <Header style={styles.header}>
         <Left style={{flex:1}}>
             <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
         </Left>
         <Body style={{justifyContent: "center", flex:1, flexGrow: 2}}>
            <Title style={styles.headerText}>Plantify</Title>
        </Body>
        <Right style={{flex:1}}/>
     </Header>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.innerText}>Take or Upload a photo to id Plants</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style= {styles.buttonText}>Take a Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Text style= {styles.buttonText}>Choose a Photo</Text>
        </TouchableOpacity>
      <View style={styles.container}>
          <Text style={styles.innerText}>Native Plants in Your Area!</Text>
      </View>
      <View>
        <TouchableHighlight 
            onPress={() => handleLearnMorePress()}>
          <Image 
            source={{uri:'https://www.audubon.org/sites/default/files/styles/native_plant_desktop/public/native_plants/amelanchier_laevis_dan_mullen.jpg'}}
            style={{width: window.width, height: 100}}
          />
        </TouchableHighlight>
      </View>
      <View style={styles.container}>
          <Text style={styles.innerText}>Plant of the Day!</Text>
          <Image 
            source={{uri:'https://farm8.staticflickr.com/7019/6513774775_bfe89cb120.jpg'}}
            style={{width: window.width, height: 100}}
          />
      </View>

      </ScrollView>

      </View>
  );}
}



function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://www.audubon.org/native-plants/search?zipcode=60626'
  );
}


const styles = StyleSheet.create({
header: {
    backgroundColor: '#A5AA52',
    fontSize: 22,
    height: 80,
    display: "flex",
},
headerText:{
    fontSize: 22,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color: '#fff',
    fontFamily: "AvenirNext-DemiBoldItalic"
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerText:{
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: '#A5AA52',
    margin:10,
},
  contentContainer: {
    paddingTop: 30,
  },
  button: {
    backgroundColor: '#DBF4AD',
    borderRadius: 12,
    color: '#fff',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    width: hp('24%'),
    alignSelf: 'center',
    margin: 10,
  },
  buttonText:{
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
