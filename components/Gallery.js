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
    Image,
    } from "react-native";
//import { FileSystem, MediaLibrary, Permissions } from 'expo';
import { Header, Left, Icon, Body, Title, Right} from 'native-base'
import {connect} from 'react-redux'

//image stuff
import CacheImage from './CacheImage';
import * as FileSystem from 'expo-file-system';

//firebase functions
import {getImages} from '../firebase/index'

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
    emptyText:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        color: '#A5AA52',
    },
    innerText:{
        fontSize: 15,
        fontWeight: "bold",
        color: '#A5AA52',
    },
});


class Gallery extends Component{
    constructor(){
        super();
        this.state = {
            photos: []
        }
    }
    async componentDidMount() {
        let result = await getImages();
        this.setState({
            photos: result
        })
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
                <Title style={styles.headerText}>Your Plants</Title>
            </Body>
            <Right style={{flex:1}}/>
        </Header>
    {this.state.photos.length? 
        <ScrollView>
        {this.state.photos.map( photo => (
        <View key={photo.uri} style={{flex: 1, flexDirection: 'row', margin: 10}}>
            <CacheImage uri={photo.uri}/>
            <View style={{flexDirection:'column'}}>
                <Text style={styles.innerText}>Plant Family: Replace with real data</Text>
                <Text style={styles.innerText}>Plant Species: Unknown</Text>
                <Text style={styles.innerText}>Date Taken: Now</Text>
            </View>
        </View>
        ))}
        </ScrollView> :
        <View >
            <Text style={styles.emptyText}>No Plants Yet!</Text>
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