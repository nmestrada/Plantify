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
import { Header, Left, Icon, Body, Title, Right} from 'native-base'
import axios from 'axios';

class CameraComp extends Component {
    constructor(props) {
        super();
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            photo: '',
            id: 0
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
                this.setState({
                    photo: photo,
                    id: ++this.state.id
                });
            });
        }
        let photo = this.state.photo.uri;
        let id = this.state.id;
        let plantInfo = await this.identifyPlant(this.state.photo.base64); 
        this.props.addPlant({id, photo, plantInfo})
    }
    async identifyPlant(photo) {
        try{
            const {data} = await axios.post('https://07c0205f.ngrok.io/getAPIResponse', {photo: photo});
            console.log(typeof data);
            let prediction = this.sortResults(data);
            Alert.alert(
                'Your Plant is:',
                prediction
              );
            return prediction;
        }catch(err){
            console.log(err)
        } 
    }
    sortResults = (data) => {
        const tagsArr = data.result.tags;
        const resultArr = tagsArr.map(tag => {
            if(tag.confidence >50)
            return tag.tag.en;
        });
        return resultArr.join(' ');
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
		
    },
    header: {
        backgroundColor: '#A5AA52',
        fontSize: 22,
        height: 80,
        display: "flex",
    },
});

const mapDispatchToProps = dispatch => {
    return {
        addPlant: (photo) => dispatch(addPlant(photo))
    };
};

export default connect(null, mapDispatchToProps)(CameraComp)