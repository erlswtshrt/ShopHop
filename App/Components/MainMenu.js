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
    height: screenWidth/5 + 100,
    width: screenWidth/5,
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
        pan: new Animated.ValueXY({ x: 0, y: 250 })
    };
  },
  render: function() {
    StatusBarIOS.setHidden(true);
    var self = this;
    return (
      <View style={[s.bgNone, s.wrapperRow]}>
        <TouchableHighlight
                  style={[styles.tile, s.bgMagenta, s.cHor, s.alignBottom100]}
                  onPress={this.props.navigateToConnections}>
          <Image style={[styles.icon, s.mtXxLarge]} source={require('image!connectIcon')} />
        </TouchableHighlight>
        <View style={[styles.tile, s.bgRed, s.cHor, s.alignBottom100, {left: 1*screenWidth/5}]}>
          <Image style={[styles.icon, s.mtXxLarge]} source={require('image!historyIcon')} />
        </View>
        <View style={[styles.tile, s.bgOrange, s.cHor, s.alignBottom100, {left: 2*screenWidth/5}]}>
          <Image style={[styles.icon, s.mtXxLarge]} source={require('image!profileIcon')} />
        </View>
        <TouchableHighlight
                  style={[styles.tile, s.bgGreen, s.cHor, s.alignBottom100, {left: 3*screenWidth/5}]}
                  onPress={this.props.navigateToBrowse}>
          <Image style={[styles.icon, s.mtXxLarge]} source={require('image!browseIcon')} />
        </TouchableHighlight>
        <TouchableHighlight
                  style={[styles.tile, s.bgBlue, s.cHor, s.alignBottom100, {left: 4*screenWidth/5}]}
                  onPress={this.props.navigateToFeed}>
          <Image style={[styles.icon, s.mtXxLarge]} source={require('image!feedIcon')} />
        </TouchableHighlight>
      </View>);
  }
});

module.exports = MainMenu;