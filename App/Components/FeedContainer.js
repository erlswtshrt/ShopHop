var React = require('react-native');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var s = require('../Styles/styles');
var Menu = require('./MainMenu');
var Row = require('./FeedRowContainer');
var Header = require('./Header');

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
  ScrollView
} = React;

var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  scrollView: {
    height: screenHeight,
    width: screenWidth
  }
});

var FeedContainer = React.createClass ({

  render: function() {
    var self = this;
    return (
      <View>
        <ScrollView style={[s.flex, styles.scrollView]}>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </ScrollView>
        <Header />
        <Menu />
      </View>)
  }
});

module.exports = FeedContainer;