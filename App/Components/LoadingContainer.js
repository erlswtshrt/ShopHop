var React = require('react-native');
var s = require('../Styles/styles');

var {
  Animated,
  Easing,
  View,
  Text,
  ActivityIndicatorIOS,
  StyleSheet,
  LayoutAnimation
} = React;

var styles = StyleSheet.create({
  transition: {
    opacity: 0
  }
});

var SPRING_CONFIG = {tension: 2, friction: 3};

var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;



var LoadingContainer = React.createClass ({
  getInitialState: function() {
    return {
        pan: new Animated.ValueXY({ x: 0, y: -screenHeight })
    };
  },
  componentDidMount: function() {
    Animated.spring(this.state.pan, {
          ...SPRING_CONFIG,
          toValue: { x: 0, y: 0 }
    }).start();
  },
  componentDidUnmount: function() {
    Animated.spring(this.state.pan, {
          ...SPRING_CONFIG,
          toValue: { x: 0, y: screenHeight }
    }).start();
  },
  render: function() {
    return (
      <Animated.View style={[s.wrapper, { transform: this.state.pan.getTranslateTransform() }, s.bgPurple]}>
        <ActivityIndicatorIOS color='#ffffff' size="large"/>
        <Text style={[s.textWhite, s.f, s.mXxLarge, s.textLarge]}>Fetching profile...</Text>
      </Animated.View>);
  } 
});

module.exports = LoadingContainer;