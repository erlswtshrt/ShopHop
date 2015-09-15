/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var LoginContainer = require('./App/Components/LoginContainer');
var Register = require('./App/Components/Register');
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
              appState: 0 }
  },
  setUser: function(_user) {
    this.setState({user: _user})
  },
  changeAppState(_newAppState) {
    this.setState({appState: _newAppState});
  },
  render: function() {
    var self = this;
    switch(this.state.appState) {
      case 0:
          if(this.state.user === null) {
            return (
              <View style={styles.wrapper}>
                <LoginContainer changeAppState={this.changeAppState} user={this.state.user} setUser={this.setUser} />
              </View>
            )
          } else {
            return (
              <NavigatorIOS style={styles.wrapper} navigationBarHidden={true}
                initialRoute={{
                  component: Dashboard,
                  passProps: {  uid: this.state.user.uid,
                                setUser: this.setUser }
                }} />)
          }
          break;
      case 1:
          return (
              <View style={styles.wrapper}>
                <Register changeAppState={this.changeAppState} />
              </View>
            );
      default:
          break;
    }

  }
});

AppRegistry.registerComponent('ShopHop', () => ShopHop);
