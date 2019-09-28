import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity,
    CameraRoll,
    ScrollView,
    Button,
    Image
    } from "react-native";

export default class Gallery extends Component{
    constructor() {
        super()
        this.state={
            photos:[]
        }
    }
        _handleButtonPress = () => {
            CameraRoll.getPhotos({
                first: 20,
                assetType: 'Photos',
              })
              .then(r => {
                this.setState({ photos: r.edges });
              })
              .catch((err) => {
                 console.log(err)
              });
            };
         render() {
          return (
            <View>
              <Button title="Load Images" onPress={this._handleButtonPress} />
              <ScrollView>
                {this.state.photos.map((p, i) => {
                return (
                  <Image
                    key={i}
                    style={{
                      width: 300,
                      height: 100,
                    }}
                    source={{ uri: p.node.image.uri }}
                  />
                );
              })}
              </ScrollView>
            </View>
          );
         }
}