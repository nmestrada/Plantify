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
     const {photo} = this.state;
     return (
    <View style={styles.container}>
     {/* <View style={styles.header}>
         <Text style={styles.headerText}>Plantify</Text>
     </View> */}
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
          <Text style={styles.innerText}>Choose photo to Identify</Text>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style= {styles.buttonText}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Text style= {styles.buttonText}>Choose a Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Text style= {styles.buttonText}>Gallery</Text>
        </TouchableOpacity>
      <View style={styles.container}>
          <Text>Useful Links:</Text>
      </View>
      <View>
        <TouchableHighlight 
            onPress={() => LinkingIOS.openURL('https://www.audubon.org/native-plants/search?zipcode=60626')}>
          <Image 
            source={{uri:'https://www.audubon.org/sites/default/files/styles/native_plant_desktop/public/native_plants/amelanchier_laevis_dan_mullen.jpg'}}
            style={{width: window.width, height: 100}}
          />
        </TouchableHighlight>
      </View>

      </ScrollView>

      </View>
  );}
}



// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/development-mode/'
//   );
// }


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
    margin: 10,
    fontWeight: "bold",
    color: '#fff'
},
  contentContainer: {
    paddingTop: 30,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  button: {
    backgroundColor: '#DBF4AD',
    borderRadius: 12,
    color: '#fff',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    width: hp('24%'),
    alignSelf: 'center'
  },
  buttonText:{
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
