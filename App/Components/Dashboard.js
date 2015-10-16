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
  StatusBarIOS
} = React;

var ref = new Firebase('https://shophopusers.firebaseio.com/');
var authData = null;
var uid = null;

var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  image: {
    height: screenHeight,
    width: screenWidth
  },
  tile: {
    height: screenWidth/3,
    width: screenWidth/3,
  },
  icon: {
    height: 30,
    width: 30
  }
});

var Dashboard = React.createClass ({
  getInitialState: function() {
    var tempUser = {firstName: "", lastName: "", email: ""};
    return {user: tempUser}
  },
  componentDidMount: function() {
    authData = ref.getAuth();
    if(authData !== null) uid = authData.uid;

    var self=this;
    var usersRef = ref.child("mobileusers");
    var userRef = usersRef.child(uid);
    userRef.on("value", function(snapshot) {
      self.setState({user: snapshot.val()});
    });
  },
  render: function() {
    StatusBarIOS.setHidden(true);
    var self = this;
    return (
      <View style={[s.wrapperCol]}>
        <View style={[styles.image, s.wrapperCol]} source={require('image!storefrontfilter')}>
          <Text style={[s.textWhite, s.bgNone, s.textXLarge, s.f, s.mtXxxLarge, s.mlXxxLarge]}>Welcome,</Text>
          <Text style={[s.textWhite, s.bgNone, s.textXxLarge, s.f, s.mlXxxLarge]}>{self.state.user.firstName} {self.state.user.lastName}</Text>
          <Menu />
        </View>
      </View>)
  }
});

module.exports = Dashboard;