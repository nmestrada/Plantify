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
  } from 'react-native';

export default class CameraComp extends Component {
    constructor() {
        super();
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back
          }
    }
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }
    render() {
        return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
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
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.takePicture}
                style={{ alignSelf: 'center' }}
                >
                <Text>Snap</Text>
                </TouchableOpacity>
            </View>
          </Camera>
        </View>
        )
    }
}