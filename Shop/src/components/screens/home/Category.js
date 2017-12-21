import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ListView } from 'react-native';


const { width, height } = Dimensions.get('window');


export default class Category extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        const { types } = this.props;
        const { wrapper, textStyle, imageStyle, cateTitle, category } = styles;
        const navigation = this.props.navigation;

        return (
            <View style={wrapper}>
                <View style={{ justifyContent: 'center', height: 50 }}>
                    <Text style={textStyle} >DANH SÁCH THỂ LOẠI</Text>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'space-around'}} >

                    {/* <ListView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'space-around', }}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => */}
                           { types.map(e => (
                            <TouchableOpacity   key={e.id}>
                                <View style={category}>
                                    <Text style={cateTitle}>{e.name}</Text>
                                </View>
                            </TouchableOpacity>
                             )) } 

                        {/* } */}
                    {/* /> */}

                </View>
            </View>
        );
    }
   
}

//933 x 465
const categorytWidth = (width - 60) / 2;
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    category: {
        width: categorytWidth,
        backgroundColor: "#7138c1",
        borderWidth: 0.7,
        borderColor: '#74747c',
        margin: 5,
        padding: 5,
        justifyContent: "center",
        alignItems: 'center'
    },

    cateTitle: {

        fontSize: 20,
        fontFamily: 'Avenir',
        color: "#fff",
    }
});