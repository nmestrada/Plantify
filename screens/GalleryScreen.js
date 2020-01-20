import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Gallery from '../components/Gallery'

export default function MyGallery(props) {
  return <Gallery {...props}/>;
}

MyGallery.navigationOptions = {
  title: 'Gallery',
};
