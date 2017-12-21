import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView, TouchableOpacity, Dimensions
} from 'react-native';
import Header from './home/Header';
import Topproduct from './home/Topproduct';
import Quangcao from './home/Quangcao';
import Category from './home/Category';
import DienThoai from './home/DienThoai';
import LapTop from './home/LapTop';

const { heighttopbar } = Dimensions.get('window');
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      topProducts: [],
     
    }
  }
 
  openMenu() {
    this.props.navigation.navigate('DrawerOpen');
  }
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#c7c9d8" }}>
        <Header openM={this.openMenu.bind(this)} />
        <Quangcao />
        <Category navigation={navigation} types={this.state.types}   />
        <DienThoai navigation={navigation}/>
        <LapTop navigation={navigation}/>

        <Topproduct navigation={navigation} topProducts={this.state.topProducts} />
        

      </ScrollView>
    );
  }
  componentDidMount() {

    fetch('http://192.168.1.87/app/index.php')
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson);
        const { type, product } = responseJson;       
        this.setState({ types: type, topProducts: product });
        // console.log("we have data category");
        // console.log(this.state.types);
      })
      .catch(error => {
        console.error(error);
      });

  }
}


