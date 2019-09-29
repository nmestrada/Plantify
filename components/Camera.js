import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import React , {Component} from 'react'
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
import axios from 'axios';

export default class CameraComp extends Component {
    constructor() {
        super();
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            photo: ''
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
            const options = { quality: 1, base64: true, fixOrientation: true, 
            exif: true};
            await this.camera.takePictureAsync(options).then(photo => {
                photo.exif.Orientation = 1;            
                console.log(photo.uri);
                this.setState({
                    photo: photo.uri
                })          
            });   
        }
        await this.identifyPlant(this.state.photo); 
        
    }
    async identifyPlant(photo) {
        try{
            const {data} = await axios.post('https://2b8df552.ngrok.io/getAPIResponse', `${photo}`);
            console.log('identify plant!', data);
            Alert.alert(
                'Hello'
              );
        }catch(err){
            console.log(err)
        } 
    }
    render() {
        return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} ref={(ref) => {this.camera = ref}} type={this.state.type}>
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
		
	}
});