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
import { FileSystem, MediaLibrary, Permissions } from 'expo';
import {connect} from 'react-redux'

//const PHOTOS_DIR = FileSystem.documentDirectory + 'photos';

class Gallery extends Component{
         render() {
          return (
            <View>
              <ScrollView>
                {this.props.plants.map((plant, i) => {
                return (
                <View key={plant.id} style={{flex: 1, flexDirection: 'row'}}>
                    <Image
                      style={{
                        width: 150,
                        height: 100,
                      }}
                      source={{ uri:plant.photo}}
                    />
                    <Text>{plant.plantInfo}</Text>
                </View>
                );
              })}
              </ScrollView>
            </View>
          );
         }
}

const mapStateToProps = state => {
    return {
        plants: state
    }
}
export default connect(mapStateToProps)(Gallery)