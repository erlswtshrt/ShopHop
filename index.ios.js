/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var LoginContainer = require('./App/Components/LoginContainer');
var Dashboard = require('./App/Components/Dashboard')
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var {
  AppRegistry,
  Image,
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
} = React;

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  }
});

var ShopHop = React.createClass({
  getInitialState: function() {
    return {  user: null,
              overlay: false}
  },
  setUser: function(_user) {
    this.setState({user: _user})
  },
  render: function() {
    var self = this;
    console.log(this.state.user);

    if(this.state.user === null) {
      return (
        <View style={styles.wrapper}>
          <LoginContainer user={this.state.user} setUser={this.setUser} />
        </View>
      )
    } else {
      return (
        <NavigatorIOS style={styles.wrapper}
          initialRoute={{
            title: 'Dashboard',
            component: Dashboard,
            passProps: {  user: this.state.user,
                          setUser: this.setUser }
          }} />)
    }
  }
});

AppRegistry.registerComponent('ShopHop', () => ShopHop);
