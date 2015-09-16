'use strict';

var React = require('react-native');
var LoginContainer = require('./App/Components/LoginContainer');

var {
  NavigatorIOS,
  StyleSheet,
  AppRegistry
} = React;

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  }
});

var ShopHop = React.createClass({
  render: function() {
    return (
      <NavigatorIOS style={styles.wrapper} navigationBarHidden={true} initialRoute={{ component: LoginContainer }} />
    )
  }
});

AppRegistry.registerComponent('ShopHop', () => ShopHop);
