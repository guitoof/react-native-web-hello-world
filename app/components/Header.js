import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { appStyle } from '../styles/styles';

export default class Header extends Component {
  render() {
    return (
      <View style={appStyle.header}>
        <Text style={{color: 'white'}}>Hybrid App</Text>
      </View>
    );
  }
}
