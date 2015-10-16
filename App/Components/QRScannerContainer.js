var React = require('react-native');
var QRCodeScreen = require('./QRCodeScreen');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
} = React;

var ref = new Firebase('https://shophopusers.firebaseio.com/');
var authData = null;
var uid = null;

if(authData !== null) {
    uid = authData.uid;
}

var QRScannerContainer = React.createClass({
  componentDidMount: function() {
    authData = ref.getAuth();
    if(authData !== null) uid = authData.uid;
  },
  render: function() {
    return (
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={this._onPressQRCode.bind(this)}>
          <Text>Read QRCode</Text>
        </TouchableOpacity>
      </View>
    );
  },

  _onPressQRCode: function() {
    this.props.navigator.push({
      component: QRCodeScreen,
      title: 'QRCode',
      passProps: {
        onSucess: this._onSucess,
      },
    });
  },

  _onSucess: function(result) {
    var usersRef = ref.child("mobileusers");
    var userRef = usersRef.child(uid)
    var productsRef = userRef.child("products");
    productsRef.child(result).set({ 
      pid: result,
    });
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

module.exports = QRScannerContainer;