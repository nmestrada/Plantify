import React from 'react';
import { Image, StyleSheet } from 'react-native';
import shorthash from 'shorthash';
import * as FileSystem from 'expo-file-system';

const styles = StyleSheet.create({
    image: {
        height: 20,
        width: 20,
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
    const path = `${FileSystem.cacheDirectory}${name}`;
    const image = await FileSystem.getInfoAsync(path);
    if (image.exists) {
      console.log('read image from cache');
      this.setState({
        source: {
          uri: image.uri,
        },
      });
      return;
    }

    console.log('downloading image to cache');
    const newImage = await FileSystem.downloadAsync(uri, path);
    this.setState({
      source: {
        uri: newImage.uri,
      },
    });
  };

  render() {
    return <Image style={{width: 150, height: 100}} source={this.state.source} />;
  }
}

