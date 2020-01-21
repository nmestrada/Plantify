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
//import { FileSystem, MediaLibrary, Permissions } from 'expo';
import { Header, Left, Icon, Body, Title, Right} from 'native-base'
import {connect} from 'react-redux'

//image stuff
import CacheImage from './CacheImage';
import * as FileSystem from 'expo-file-system';

//const PHOTOS_DIR = FileSystem.documentDirectory + 'photos';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    header: {
        backgroundColor: '#A5AA52',
        fontSize: 22,
        height: 80,
        display: "flex",
    },
    headerText:{
        fontSize: 22,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold",
        color: '#fff',
        fontFamily: "AvenirNext-DemiBoldItalic"
    },
});


class Gallery extends Component{
    async componentDidMount() {
        let result = await CameraRoll.getPhotos({
            first: 20,
            assetType: 'All'
          })
        //console.log(result)
    }
    render(){
    console.log('in Gallery Component', this.props.plants)
    console.log(FileSystem.documentDirectory)
    return (
    <View style={styles.container}>
        <Header style={styles.header}>
            <Left style={{flex:1}}>
                <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
            </Left>
            <Body style={{justifyContent: "center", flex:1, flexGrow: 2}}>
                <Title style={styles.headerText}>Images</Title>
            </Body>
            <Right style={{flex:1}}/>
        </Header>
    {this.props.plants.length? 
        <ScrollView>
        {this.props.plants.map( plant => (
        <View key={plant.plantInfo} style={{flex: 1, flexDirection: 'row'}}>
            <CacheImage uri={plant.photo}/>
            <Text>{plant.plantInfo}</Text>
        </View>
        ))}
        </ScrollView> :
        <View >
            <Text>No Plants Yet!</Text>
            {/* <Image source={{uri: 'file:///var/mobile/Containers/Data/Application/89477697-5FE3-40A0-870F-DD756C0835A3/Library/Caches/ExponentExperienceData/%2540nmestrad%252FPlantr/Z2m3JES.jpg'}}/> */}
        </View>
    }
    </View>
    )}
}

const mapStateToProps = state => {
    return {
        plants: state
    }
}
export default connect(mapStateToProps)(Gallery)