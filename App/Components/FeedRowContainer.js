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
    height: 150,
    width: screenWidth,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  image: {
    height: 150,
    width: 150
  },
  leftBorder: {
    height: 150,
    width: 10,
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
    var color = 'Green'
    var borderStyle = [styles.leftBorder, s.bgRed];
    var textStyle = [s.textRed, styles.textLarge, s.f];
    switch(this.props.category) {
        case "Men\'s Casualwear":
            borderStyle = [styles.leftBorder, s.bgRed];
            textStyle = [s.mtLarge, s.textRed, styles.textMedium, s.f];
            break;
        case "Women\'s Casualwear":
            borderStyle = [styles.leftBorder, s.bgPurple];
            textStyle = [s.mtLarge, s.textPurple, styles.textMedium, s.f];
            break;
            break;
        case "Men\'s Accessories":
            borderStyle = [styles.leftBorder, s.bgBlue];
            textStyle = [s.mtLarge, s.textBlue, styles.textMedium, s.f];
            break;
        case "Women\'s Accessories":
            borderStyle = [styles.leftBorder, s.bgMagenta];
            textStyle = [s.mtLarge, s.textMagenta, styles.textMedium, s.f];
            break;
        default:
            break;
    }

    return (
      <View style={[styles.rowContainer, s.bgWhite]}>
        <View style={[s.wrapperRow]}>
          <View style={borderStyle}/>
          <View style={[s.flex]}>
            <Text style={[s.f, s.textNavy, styles.textLarge, s.mtSmall]}>Sarah Smith</Text>
            <Text style={[s.f, s.textDarkBlue, styles.textMedium]}>at {this.props.location}</Text>
            <Text style={textStyle}>{this.props.name}</Text>
            <Text style={[s.textNavy, styles.textMedium, s.f]}>{this.props.designer}</Text>
          </View>
          <Image style={[styles.image]} source={require('image!productImage')} />
        </View>
      </View>)
  }
});

module.exports = FeedRowContainer;