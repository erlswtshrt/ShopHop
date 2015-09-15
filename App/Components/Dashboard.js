var React = require('react-native');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var s = require('../Styles/styles');

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
    var self=this;
    var ref = this.ref;
    ref = new Firebase('https://shophopusers.firebaseio.com/');
    var usersRef = ref.child("users");
    var userRef = usersRef.child(this.props.uid);
    userRef.on("value", function(snapshot) {
      self.setState({user: snapshot.val()});
    });
  },
  render: function() {
    StatusBarIOS.setHidden(true);
    var self = this;
    return (
      <View style={[s.wrapperCol]}>
        <Image style={[styles.image, s.wrapperCol]} source={require('image!storefrontfilter')}>
          <Text style={[s.textWhite, s.bgNone, s.textXLarge, s.f, s.mtXxxLarge, s.mlXxxLarge]}>Welcome,</Text>
          <Text style={[s.textWhite, s.bgNone, s.textXxLarge, s.f, s.mlXxxLarge]}>{self.state.user.firstName} {self.state.user.lastName}</Text>
          <View style={[s.bgNone, s.wrapperRow]}>
            <View style={[s.bgGreen, s.alignBottom, s.c, {height: 60, width: screenWidth, bottom: screenWidth/3}]}>
              <Text style={[s.textWhite, s.bgNone, s.textCenter, s.textLarge, s.f]}>Start browsing</Text>
            </View>
            <View style={[styles.tile, s.bgMagenta, s.cHor, s.alignBottom]}>
              <Text style={[s.textWhite, s.bgNone, s.textCenter, s.textLarge, s.pLarge, s.f]}>Connect</Text>
              <Image style={[styles.icon, s.mtMedium]} source={require('image!friendsIcon')} />
            </View>
            <View style={[styles.tile, s.bgBlue, s.cHor, s.alignBottom, {left: screenWidth/3}]}>
              <Text style={[s.textWhite, s.bgNone, s.textCenter, s.textLarge, s.pLarge, s.f]}>Feed</Text>
              <Image style={[styles.icon, s.mtMedium]} source={require('image!feedIcon')} />
            </View>
            <View style={[styles.tile, s.bgPurple, s.cHor, s.alignBottom, {left: 2*screenWidth/3}]}>
              <Text style={[s.textWhite, s.bgNone, s.textCenter, s.textLarge, s.pLarge, s.f]}>History</Text>
              <Image style={[styles.icon, s.mtMedium]} source={require('image!historyIcon')} />
            </View>
          </View>
        </Image>
      </View>)
  }
});

module.exports = Dashboard;