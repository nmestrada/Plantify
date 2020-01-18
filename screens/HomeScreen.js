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
import Layout from '../constants/Layout'
import * as Permissions from 'expo-permissions';
// import { Camera } from 'expo-camera';
import CameraComp from '../components/Camera'
import {RNCamera} from 'react-native-camera'
// import ImagePicker from 'react-native-image-picker'
import { MonoText } from '../components/StyledText';

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
     <View style={styles.header}>
         <Text style={styles.headerText}>Plantify</Text>
     </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.innerText}>Choose photo to Identify</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 100, height: 100 }}
          />
        )}
        <TouchableOpacity style={styles.button}>
            <Button  title="Upload" />
        </TouchableOpacity>
      </View>
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

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
header: {
    backgroundColor: '#003114',
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,
    height: 50,
},
headerText:{
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color: '#fff'
},
  container: {
    flex: 1,
    backgroundColor: '#3e836d',
  },
  innerText:{
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    color: '#fff'
},
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
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
    backgroundColor: '#0c381f',
    borderRadius: 12,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
  },
});
