import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native'
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
//import {createStackNavigator} from 'react-navigation-stack';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import GalleryScreen from '../screens/GalleryScreen';
import { Feather} from '@expo/vector-icons';



//hamburger menu navbar thing
export class NavigationDrawerStructure extends React.Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigation.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            {/*Donute Button Image */}
            <Feather name="menu" size={32} color="black" />
          </TouchableOpacity>
        </View>
      );
    }
  }
   


// stack navigator
  
export const Home = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
      screen: HomeScreen,
        title: 'Home',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
    },
  });
   
export const Camera = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Second: {
      screen: CameraScreen,
        title: 'Camera',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
    headerTintColor: '#fff',
    },
  });
   
export const Gallery = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
      screen: GalleryScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Demo Screen 3',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerTintColor: '#fff',
      }),
    },
  });

  