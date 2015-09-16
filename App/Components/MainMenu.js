var React = require('react-native');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var s = require('../Styles/styles');

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
  Animated
} = React;

var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  tile: {
    height: screenWidth/4 + 100,
    width: screenWidth/4,
    opacity: 0.95
  },
  icon: {
    height: 30,
    width: 30
  }
});

var SPRING_CONFIG = {tension: 5, friction: 2.5};


var MainMenu = React.createClass ({
  componentDidMount: function() {
    Animated.spring(this.state.pan, {
          ...SPRING_CONFIG,
          toValue: { x: 0, y: 0 }
    }).start();
  },
  getInitialState: function() {
    return {
        pan: new Animated.ValueXY({ x: 0, y: 300 })
    };
  },
  render: function() {
    StatusBarIOS.setHidden(true);
    var self = this;
    return (
      <Animated.View style={[s.bgNone, { transform: this.state.pan.getTranslateTransform() }, s.wrapperRow]}>
        <View style={[styles.tile, s.bgMagenta, s.cHor, s.alignBottom100]}>
          <Image style={[styles.icon, s.mtXxxLarge]} source={require('image!connectIcon')} />
        </View>
        <View style={[styles.tile, s.bgBlue, s.cHor, s.alignBottom100, {left: screenWidth/4}]}>
          <Image style={[styles.icon, s.mtXxxLarge]} source={require('image!feedIcon')} />
        </View>
        <View style={[styles.tile, s.bgPurple, s.cHor, s.alignBottom100, {left: 2*screenWidth/4}]}>
          <Image style={[styles.icon, s.mtXxxLarge]} source={require('image!historyIcon')} />
        </View>
        <View style={[styles.tile, s.bgGreen, s.cHor, s.alignBottom100, {left: 3*screenWidth/4}]}>
          <Image style={[styles.icon, s.mtXxxLarge]} source={require('image!browseIcon')} />
        </View>
      </Animated.View>);
  }
});

module.exports = MainMenu;