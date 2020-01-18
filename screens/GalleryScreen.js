import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Gallery from '../components/Gallery'
import Camera from '../components/Camera'

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <Gallery/>;
}

SettingsScreen.navigationOptions = {
  title: 'Your saved Plants',
};