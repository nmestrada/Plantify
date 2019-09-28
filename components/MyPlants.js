import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity
    } from "react-native";

import axios from 'axios';

export default class MyPlants extends Component {
    constructor(){
        super()
        this.state ={
            loading: true,
            plants:[]
        }
    }
    async componentDidMount() {
        const apiKey = 'acc_1892ce407d60f55';
        const apiSecret = '3860e0543a9f8fe4947d64549f6a5832';
        const imageUrl = 'https://docs.imagga.com/static/images/docs/sample/japan-605234_1280.jpg';
        const url = 'https://api.imagga.com/v2/tags?image_url='+encodeURIComponent(imageUrl)

        // request.get('https://api.imagga.com/v2/tags?image_url='+encodeURIComponent(imageUrl), function (error, response, body) {
        // console.log('Status:', response.statusCode);
        // console.log('Headers:', JSON.stringify(response.headers));
        // console.log('Response:', body);
        // console.log(error);
        // }).auth(apiKey, apiSecret, true);
        try{
            let {data} = await axios.get('https://api.imagga.com/v2/tags?image_url=https://imagga.com/static/images/tagging/wind-farm-538576_640.jpg',{
                auth: {
                    username: apiKey,
                    password: apiSecret
                  },
            })
              console.log(data)
        }catch(err){
            console.log(err)
        }
        
    }
    render() {
        return (
        <View>
            <Text>Your Found Plants</Text>
        </View>
        )
    }
}