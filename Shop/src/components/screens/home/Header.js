import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity, Image, TextInput
} from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <View style={ao.container}>
                <View style={ao.dong1}>
                    <TouchableOpacity onPress={this.props.openM} >
                        <Image style={{ width: 30, height: 30 }} source={require('../../images/menutrang.png')} />
                    </TouchableOpacity>
                    <Text style={ao.shopping}
                    >SHOPPING
                    </Text>
                    <Image style={{ width: 120, height: 40 }} source={require('../../images/logo1.png')} />
                </View>
                <View>
                    <TextInput
                        style={ao.textinput}
                        onChangeText={(text) => this.setState({ text })}
                        placeholder="tim kiem ..."
                        underlineColorAndroid="transparent"
                        value={this.state.text}
                    />
                </View>
            </View>
        );
    }
}
var ao = StyleSheet.create({
    container: {
        height: 80, backgroundColor: "#4ca4e8", padding: 10, justifyContent: "space-around"
    },
    dong1: {
        flexDirection: "row", justifyContent: "space-between"
    },
    shopping: { color: "#fff", fontWeight: 'bold', },
    textinput: { height: 35, backgroundColor: "#fff", borderColor: 'gray', borderWidth: 1, paddingLeft: 10 }
});
{/* <TouchableOpacity style={{ backgroundColor: 'yellow' }}
onPress={this.props.openM} >
<Text>chuyen toi menu</Text>
</TouchableOpacity> */}