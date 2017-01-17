import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { appStyle } from '../styles/styles';

export default class HelloWorld extends Component {
  render() {
    const { onPress, color } = this.props;
    const style = StyleSheet.create({
      helloWorld: {
        color: color,
        textAlign: 'center',
      }
    });
    return (
      <View style={appStyle.body}>
        <Text onPress={onPress} style={style.helloWorld}>Hello World</Text>
      </View>
    );
  }
}

HelloWorld.propTypes = {
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
}
