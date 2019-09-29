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
  ActivityIndicator
} from 'react-native';
import * as Permissions from 'expo-permissions';
// import { Camera } from 'expo-camera';
import CameraComp from '../components/Camera'
import {RNCamera} from 'react-native-camera'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends Component {
    constructor(props){
		super(props);
        this.state = { 
			identifedAs: '',
			loading: false
		}
    }
    takePicture = async function(){
		
		if (this.camera) {

			// Pause the camera's preview
			this.camera.pausePreview();
            
            // Set the activity indicator
			this.setState((previousState, props) => ({
				loading: true
			}));
			
			// Set options
			const options = {
                base64: true
            };
			
			// Get the base64 version of the image
			const data = await this.camera.takePictureAsync(options)
			console.log(data)
			// Get the identified image
		}
	}

 render() { return (
    <View style={styles.container}>
     <View style={styles.header}>
         <Text style={styles.headerText}>Plantify</Text>
     </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.innerText}>Welcome!</Text>
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
});
