import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {SlideMenu} from './Router';
import {Tabbs} from './Router';
import {HomeStack} from './Router';



export default class App extends Component {
  render() {
    return (
      <Tabbs />
    );
  }
}
