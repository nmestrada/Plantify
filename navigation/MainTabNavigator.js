import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import GalleryScreen from '../screens/GalleryScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const CameraStack = createStackNavigator(
  {
    Camera: CameraScreen,
  },
  config
);

CameraStack.navigationOptions = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-camera'}
    />
  ),
};

CameraStack.path = '';

const ExploreStack = createStackNavigator(
  {
    Links: HomeScreen,
  },
  config
);

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-information-circle'} />
  ),
};

ExploreStack.path = '';

const PlantStack = createStackNavigator(
  {
    Settings: GalleryScreen,
  },
  config
);

PlantStack.navigationOptions = {
  tabBarLabel: 'MyPlants',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-leaf'} />
  ),
};

PlantStack.path = '';

const tabNavigator = createBottomTabNavigator({
  CameraStack,
  ExploreStack,
  PlantStack,
});

tabNavigator.path = '';

export default tabNavigator;
