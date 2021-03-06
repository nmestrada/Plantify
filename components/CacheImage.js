import React from 'react';
import { Image, StyleSheet, CameraRoll} from 'react-native';
import shorthash from 'shorthash';
import * as FileSystem from 'expo-file-system';
//firebase functions
import {addImageToDB} from '../firebase/index'

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        borderRadius: 5,
        margin: 5
    }
})

export default class CacheImage extends React.Component {
  constructor(){
      super();
      this.state = {
            source: null,
        }
    }

  componentDidMount = async () => {
    const { uri } = this.props;
    const name = shorthash.unique(uri);
    console.log(name);
    const path = `${FileSystem.documentDirectory}${name}.jpg`;
    const image = await FileSystem.getInfoAsync(path);
    if (image.exists) {
      console.log('read image from cache');
      this.setState({
        source: {
          uri: image.uri,
        },
      });
      console.log('image uri',this.state.source)
      return;
    }

    console.log('downloading image to cache');
    const newImage = await FileSystem.downloadAsync(uri, path);
    this.setState({
      source: {
        uri: newImage.uri,
      },
    });
    await addImageToDB(newImage.uri)
    console.log(newImage.uri)
  };

  render() {
    return <Image style={styles.image} source={this.state.source} />;
  }
}

