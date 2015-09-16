var React = require('react-native');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var s = require('../Styles/styles');
var Menu = require('./MainMenu');
var Row = require('./FeedRowContainer');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
  ActivityIndicatorIOS,
  LayoutAnimation,
  StatusBarIOS,
  ListView,
  ScrollView,
  Animated
} = React;

var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

var SPRING_CONFIG = {tension: 5, friction: 2.5};

var styles = StyleSheet.create({
  bar: {
    height: 50,
    width: screenWidth,
    opacity: 0.95
  }
});

var Header = React.createClass ({
  componentDidMount: function() {
    Animated.spring(this.state.pan, {
          ...SPRING_CONFIG,
          toValue: { x: 0, y: 0 }
    }).start();
  },
  getInitialState: function() {
    return {
        pan: new Animated.ValueXY({ x: 0, y: -200 })
    };
  },
  render: function() {
    var self = this;
    return (
        <View style={[styles.bar, s.flex, s.bgBlue, s.c, s.alignTop]}>
          <Text style={[s.f, s.textLarge, s.textWhite]}>Feed</Text>
        </View>);
  }
});

module.exports = Header;