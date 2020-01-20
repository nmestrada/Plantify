import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Gallery from '../components/Gallery'

export default function MyGallery() {
  return <Gallery/>;
}

MyGallery.navigationOptions = {
  title: 'Gallery',
};
