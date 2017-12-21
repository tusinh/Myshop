import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';


const  window  = Dimensions.get('window');
export default class Quangcao extends Component {
    render() {

        const { wrapper, textStyle, imageStyle, cateTitle } = styles;

        return (
            <View style={wrapper}>        
                <View style={{ justifyContent: 'flex-end', flex: 4 }} >             
                        <Image source={require('../../images/qc1.jpg')} style={imageStyle} />       
                </View>
            </View>
        );
    }
}
const imageWidth = window.width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    wrapper: {
        width: window.width - 20,
        // width:330,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 5
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }
});