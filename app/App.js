import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { connect }  from 'react-redux';
import { appStyle } from './styles/styles';
// dumb components
import Header     from './components/Header';
import Body from './components/Body';
// actions
import {
  toggleColor,
} from './actions/actions';

/** The app entry point */
class ReactNativeWebHelloWorld extends Component {
  render() {
    // injected by connect call
    const {dispatch, color, data} = this.props;

    return (
      <View style={appStyle.reactNativeWeb}>
        <Header />
        <Body
          onPress={() => dispatch(toggleColor())}
          color={color}
        />
      </View>
    );
  }
}

ReactNativeWebHelloWorld.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(ReactNativeWebHelloWorld);
