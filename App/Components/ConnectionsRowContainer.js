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
  textLarge: {
    fontSize: 18,
    paddingLeft: 10,
    paddingTop: 10
  },
  textMedium: {
    fontSize: 14,
    paddingLeft: 10
  }
});

var FeedRowContainer = React.createClass ({
  render: function() {
    var textStyle = [s.textGreen, s.mtLarge, styles.textLarge, s.f];

    return (
      <View style={[styles.rowContainer, s.bgWhite]}>
        <View style={[s.wrapperRow]}>
          <View style={[s.flex]}>
            <Text style={[s.f, s.textMagenta, styles.textLarge, s.mtSmall]}>Sarah Smith</Text>
            <Text style={[s.f, s.textDarkBlue, styles.textMedium]}>Los Gatos, CA</Text>
            <Text style={[s.textNavy, styles.textMedium, s.f, s.mtSmall]}>Fun design slogan</Text>
          </View>
          <Image style={[styles.image]} source={require('image!productImage')} />
        </View>
      </View>)
  }
});

module.exports = FeedRowContainer;