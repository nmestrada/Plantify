import React from 'react'
import {SafeAreaView} from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import GalleryScreen from '../screens/GalleryScreen'
import { ScrollView } from 'react-native-gesture-handler';


const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{flex:1}}>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
)

const DrawerNavigator = createDrawerNavigator({
    Home: HomeScreen,
    Camera: CameraScreen,
    Gallery: GalleryScreen
}, {
    contentComponent: CustomDrawerComponent
}
);
export default DrawerNavigator;