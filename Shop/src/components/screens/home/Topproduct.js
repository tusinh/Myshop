import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, Image, Dimensions,TouchableOpacity,ListView 
} from 'react-native';

const url = 'http://192.168.1.87/app/images/product/';
export default class Topproduct extends Component {
    render() {
        const { topProducts } = this.props;
        const navigation = this.props.navigation;
       
        return (
            <View style={styles.container}>
                <View style={styles.titlecontainer}>
                    <Text style={styles.title}>Sản phẩm mới</Text>
                </View>
                <View>                
                    <ListView 
                    contentContainerStyle={styles.body}
                    enableEmptySections
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(topProducts)}
                    renderRow={product => (                                  
                        <View style={styles.productcontainer}>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('ManHinh_Detail',
                     {
                         name:`${product.name}`,
                     price:`${product.price}`,
                     color:`${product.color}`,
                     material:`${product.material}`,
                     description:`${product.description}`,
                     images1:`${product.images[0]}`,
                     images2:`${product.images[1]}`,
                     id:`${product.id}`,
                
                     })} 
                      >
                        <Image
                            style={styles.productImage}
                            source={{ uri: `${url}${product.images[0]}` }}
                        />
                        </TouchableOpacity>
                        <Text style={styles.productname}>{product.name.toUpperCase()}</Text>
                        <Text style={styles.productprice}>{product.price}$</Text>
                    </View>
                   )}
                   
                 /> 
                   
                </View>
            </View>
        );
    }
}
const  window  = Dimensions.get('window');
const productWidth = (window.width - 70) / 2;
const imageHeight = (productWidth / 400) * 430;
var styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "#fcfcff",
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    titlecontainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
        backgroundColor: "#fcfcff"

    },
    title: {
        color: "#d1062b",
        fontSize: 20

    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productcontainer: {
        width: productWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        borderWidth: 0.7,
        borderColor: '#74747c',
        margin:5
    },
    productImage: {
        marginTop:4,
        width: productWidth,
        height: imageHeight
    },
    productname: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        fontWeight: '500'
    },
    productprice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});