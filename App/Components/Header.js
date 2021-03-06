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

var SPRING_CONFIG = {tension: 7, friction: 2.5};

var styles = StyleSheet.create({
  bar: {
    height: 150,
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
        pan: new Animated.ValueXY({ x: 0, y: -250 })
    };
  },
  render: function() {
    var barStyle = [styles.bar, s.flex, s.bgBlue, s.c, s.alignTop100, { transform: this.state.pan.getTranslateTransform() }];
    switch(this.props.color) {
        case "green":
            barStyle = [styles.bar, s.flex, s.bgGreen, s.c, s.alignTop100, { transform: this.state.pan.getTranslateTransform() }];       
            break;
        case "magenta":
            barStyle = [styles.bar, s.flex, s.bgMagenta, s.c, s.alignTop100, { transform: this.state.pan.getTranslateTransform() }];
            break;
        case "blue":
            barStyle = [styles.bar, s.flex, s.bgBlue, s.c, s.alignTop100, { transform: this.state.pan.getTranslateTransform() }];
            break;
        case "purple":
            barStyle = [styles.bar, s.flex, s.bgPurple, s.c, s.alignTop100, { transform: this.state.pan.getTranslateTransform() }];
            break;
        default:
            break;
    }

    return (
        <Animated.View style={barStyle}>
          <Text style={[s.f, s.textLarge, s.textWhite, s.mt100]}>{this.props.title}</Text>
        </Animated.View>);
  }
});

module.exports = Header;