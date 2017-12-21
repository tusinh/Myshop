import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, ListView,
  Dimensions, StyleSheet, Image, ScrollView, TextInput, Alert
} from 'react-native';
import Global from '../Global';
import saveCart from '../../api/saveCart';
import getCart from '../../api/getCart';
import sendOrder from '../../api/sendOder';

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}


const url = 'http://192.168.1.87/app/images/product/';
class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartArray: [],
      name: '',
      email: '',
      address: '',

    }
    Global.addProductToCart = this.addProductToCart.bind(this);

  }

  addProductToCart(product) {

    const isExist = this.state.cartArray.some(e => e.product.id_p === product.id_p);
    if (isExist) return false;
    this.setState(
      { cartArray: this.state.cartArray.concat({ product, quantity: 1 }) },
      () => saveCart(this.state.cartArray)

    );
  }

  incrQuantity(productId) {
    const newCart = this.state.cartArray.map(e => {
      if (e.product.id_p !== productId) return e;
      return { product: e.product, quantity: e.quantity + 1 };
    });
    this.setState({ cartArray: newCart },
      () => saveCart(this.state.cartArray)
    );
  }

  decrQuantity(productId) {
    const newCart = this.state.cartArray.map(e => {
      if (e.product.id_p !== productId) return e;
      return { product: e.product, quantity: e.quantity - 1 };
    });
    this.setState({ cartArray: newCart },
      () => saveCart(this.state.cartArray)
    );
  }

  removeProduct(productId) {
    const newCart = this.state.cartArray.filter(e => e.product.id_p !== productId);
    this.setState({ cartArray: newCart },
      () => saveCart(this.state.cartArray)
    );
  }
  onSuccess() {
    Alert.alert(
      'Thông báo',
      'bạn đã đặt hàng thành công',
      [
        { text: 'OK' }
      ],
      { cancelable: false }
    );
  }

  async onSendOrder() {
    try {

      const { name, email, address } = this.state;
      const arrayDetail = this.state.cartArray.map(e => ({
        id: e.product.id_p,
        quantity: e.quantity
      }));
      const kq = await sendOrder(name, email, address, arrayDetail);
      if (kq === 'THEM_THANH_CONG') {
        console.log('THEM THANH CONG');
        return this.onSuccess();
      } else {
        console.log('THEM THAT BAI', kq);
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { main, checkoutButton, checkoutTitle, wrapper,
      productStyle, mainRight, productController,
      txtName, txtPrice, productImage, numberOfProduct,
      txtShowDetail, showDetailContainer, inputStyle } = styles;
    const { cartArray } = this.state;
    const arrTotal = cartArray.map(e => e.product.price_p * e.quantity);
    const total = arrTotal.length ? arrTotal.reduce((a, b) => a + b) : 0;
    return (
      <ScrollView>
        <ListView
          contentContainerStyle={wrapper}
          enableEmptySections
          dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(cartArray)}
          renderRow={cartItem => (
            <View style={productStyle}>
              <Image source={{ uri: `${url}${cartItem.product.images1_p}` }} style={productImage} />
              <View style={[mainRight]}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                  <Text style={txtName}>{toTitleCase(cartItem.product.name_p)}</Text>
                  <TouchableOpacity
                    onPress={() => this.removeProduct(cartItem.product.id_p)}
                  >
                    <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={txtPrice}>{cartItem.product.price_p} $</Text>
                </View>
                <View style={productController}>
                  <View style={numberOfProduct}>
                    <TouchableOpacity
                      onPress={() => this.incrQuantity(cartItem.product.id_p)}
                    >
                      <Text>+</Text>
                    </TouchableOpacity>
                    <Text>{cartItem.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => this.decrQuantity(cartItem.product.id_p)}
                    >
                      <Text>-</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={showDetailContainer}>
                    <Text style={txtShowDetail}>SHOW DETAILS</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          )}
        />
        <View style={{ backgroundColor: "#929fb5" }}>
          <TextInput
            style={inputStyle}
            placeholder="Enter your name"
            value={this.state.name}
            onChangeText={text => this.setState({ name: text })}
          />
          <TextInput
            style={inputStyle}
            placeholder="Enter your email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            style={inputStyle}
            placeholder="Enter your address"
            value={this.state.address}
            onChangeText={text => this.setState({ address: text })}
          />


        </View>

        <TouchableOpacity style={checkoutButton}
          onPress={this.onSendOrder.bind(this)}
        >
          <Text style={checkoutTitle}>TOTAL :{total} $ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
  componentDidMount() {
    getCart()
      .then(cartArray => this.setState({ cartArray }));
  }
}

const { width, heightwindow } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#DFDFDF'
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: '#2ABB9C',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    width, backgroundColor: '#DFDFDF'
  },
  checkoutTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  },
  productStyle: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: 'center'
  },
  mainRight: {
    flex: 3,
    justifyContent: 'space-between'
  },
  productController: {
    flexDirection: 'row'
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  txtName: {
    paddingLeft: 20,
    color: '#A7A7A7',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtPrice: {
    paddingLeft: 20,
    color: '#C21C70',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtShowDetail: {
    color: '#C21C70',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'right',
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  inputStyle: {
    height: 50,
    backgroundColor: '#fff',
    margin: 10,
    // borderRadius: 20,
    paddingLeft: 30
  },
});

export default Cart;