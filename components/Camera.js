import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import React , {Component} from 'react'
import {addPlant} from '../redux/store'
import {connect} from 'react-redux'
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
    Alert
  } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Header, Left, Icon, Body, Title, Right, Spinner} from 'native-base'
import * as FileSystem from 'expo-file-system';
import shorthash from 'shorthash';
import {addImageToDB} from '../firebase/index'

//Clarifai 
import Clarifai from 'clarifai'
import MyPlants from './MyPlants';

class CameraComp extends Component {
    constructor(props) {
        super();
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            photo: '',
            loading: false
          }
    }
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }
    async snapPhoto() {       
        console.log('Button Pressed');
        if (this.camera) {
            console.log('Taking photo');
            this.setState({loading: true})
            const options = { quality: 1, base64: true, fixOrientation: true, 
            exif: true};
            await this.camera.takePictureAsync(options).then(photo => {
                photo.exif.Orientation = 1;            
                this.setState({
                    photo: photo
                });
            });
        }
        let uri = this.state.photo.uri;
        let family = await this.identifyImage(this.state.photo.base64);
        await this.cacheImage(uri, family)
        //this used to add to redux
        //this.props.addPlant({photo, plantInfo})
    }
    async cacheImage(uri, family) {
        const name = shorthash.unique(uri);
        console.log(name);
        const path = `${FileSystem.documentDirectory}${name}.jpg`; 
        //add new image to fileSystem
        console.log('downloading image to cache');
        const newImage = await FileSystem.downloadAsync(uri, path);
        //add new image to firebase
        await addImageToDB({uri: newImage.uri, family: family})
        console.log('image added to firebase')
    }
    async identifyImage(imageData){

		// Initialise Clarifai api

		const app = new Clarifai.App({
			apiKey: '821d4107bd7546ff8ba10be7576032e2'
		});

		// Identify the image
        let response = await app.models.predict({id:'Plants', version:'604de064a5f545358faa2f0fcdd165a8'}, {base64: imageData});
        const plantInfo = response.outputs[0].data.concepts[0].name;
        this.displayAnswer(plantInfo)
        return plantInfo;
    }
    displayAnswer = (input) => {
        this.setState({loading: false})
        Alert.alert(
            'Your Plant is in the family:',
            input
            );
        return input
    }
    render() {
        return (
        <View style={{ flex: 1 }}>
            <Header style={styles.header}>
                <Left style={{flex:1}}>
                    <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
                </Left>
                <Body style={{justifyContent: "center", flex:1, flexGrow: 2}}>
                    <Title>Take a Picture!</Title>
                </Body>
                <Right style={{flex:1}}/>
            </Header>
          <Camera style={{ flex: 1 }} ref={(ref) => {this.camera = ref}} type={this.state.type}>
          {this.state.loading? 
            <View>
                <Spinner color="white" />
                <Text style={styles.loadingText}>Predicting....</Text>
            </View>
            :
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: .3,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Ionicons color="white" size={64} name="ios-reverse-camera"/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.snapPhoto.bind(this)}
                style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    marginLeft: 60
                  }}
                >
                    <MaterialCommunityIcons name="circle-slice-8" size={64} color="white" />
                </TouchableOpacity>
            </View>
        }
          </Camera>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
	captureButton: {
		
    },
    header: {
        backgroundColor: '#A5AA52',
        fontSize: 22,
        height: 80,
        display: "flex",
    },
    loadingText: {
        textAlign: "center",
        color: 'white',
        fontSize: 30,
    }
});

const mapDispatchToProps = dispatch => {
    return {
        addPlant: (photo) => dispatch(addPlant(photo))
    };
};

export default connect(null, mapDispatchToProps)(CameraComp)