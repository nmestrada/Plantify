import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import MyPlants from '../components/MyPlants'
import Gallery from '../components/Gallery'
import CameraComp from '../components/Camera'
import Camera from '../components/RNCamera'

export default function LinksScreen() {
  return (
      <CameraComp/>
  );
}

LinksScreen.navigationOptions = {
  title: 'Take a picture of your plant',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
