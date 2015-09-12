var React = require('react-native');
var s = require('../Styles/styles');

var {
  View,
  Text,
  ActivityIndicatorIOS,
  LayoutAnimation
} = React;

var LoadingContainer = React.createClass ({
  componentWillMount: function() {
    LayoutAnimation.linear();
  },
  componentWillUnmount: function() {
    LayoutAnimation.linear();
  },
  render: function() {
    return (
      <View style={[s.wrapper, s.bgPurple]}>
        <ActivityIndicatorIOS color='#ffffff' size="large"/>
        <Text style={[s.textWhite, s.f, s.mXxLarge, s.textXLarge]}>Fetching profile...</Text>
      </View>);
  } 
});

module.exports = LoadingContainer;