var React = require('react-native');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var s = require('../Styles/styles');
var Menu = require('./MainMenu');

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
  ListView
} = React;

var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    height: 100,
    width: screenWidth,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  image: {
    height: 100,
    width: 100
  },
  leftBorder: {
    height: 100,
    width: 12,
  },
  textLarge: {
    fontSize: 18,
    paddingLeft: 5,
  },
  textMedium: {
    fontSize: 14,
    paddingLeft: 5
  }
});

var Dashboard = React.createClass ({
  render: function() {
    return (
      <View style={[styles.rowContainer, s.bgWhite]}>
        <View style={[s.wrapperRow]}>
          <View style={[styles.leftBorder, {this.props.color}]}/>
          <View style={[s.flex]}>
            <Text style={[s.textGreen, styles.textLarge, s.f]}>Summer Dress</Text>
            <Text style={[s.textNavy, styles.textMedium, s.f]}>By Ted Baker</Text>
            <Text style={[s.f, s.textNavy, styles.textMedium, s.mtXxLarge]}>Sarah Smith @ Valleyfair Mall</Text>
          </View>
          <Image style={[styles.image]} source={require('image!productImage')} />
        </View>
      </View>)
  }
});

module.exports = Dashboard;