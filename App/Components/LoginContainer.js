var React = require('react-native');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var s = require('../Styles/styles');
var LoadingContainer = require('./LoadingContainer');
var FeedContainer = require('./FeedContainer');
var Dashboard = require('./Dashboard')
var Register = require('./Register');

var {
	View,
	Text,
	TextInput,
	StyleSheet,
  Image,
	TouchableHighlight,
  ActivityIndicatorIOS,
  LayoutAnimation,
  Modal
} = React;

var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  image: {
    height: screenHeight,
    width: screenWidth
  }
});

var LoginContainer = React.createClass ({
	mixins: [ReactFireMixin],
	getInitialState: function() {
		return {  loading: false }
	},
  register: function() {
    this.props.navigator.push({
      component: Register
    });
  },
  authenticate: function() {
    var self = this;
    this.ref = new Firebase('https://shophopusers.firebaseio.com/');
    this.setState({loading: true})
    this.ref.authWithPassword({
      email    : this.state.email,
      password : this.state.password
    }, function(error, authData) {
      if (error) {
      } else {
        self.props.navigator.push({
          component: FeedContainer,
          passProps: {  uid: authData.uid },
          title: 'Feed'
        }, self.setState({loading: false}));
      }
    });
  },
  render: function() {
      return (
        <View style={[s.wrapperCol]}>
          <Modal
            animated={true}
            transparent={true}
            visible={this.state.loading}>
                <View style={[s.wrapper, s.bgPurple]}>
                  <ActivityIndicatorIOS color='#ffffff' size="large"/>
                  <Text style={[s.textWhite, s.f, s.mXxLarge, s.textLarge]}>Fetching profile...</Text>
                </View>
          </Modal>
          <View style={[s.wrapperCol]}>
            <Image style={[styles.image, s.c, s.wrapperStretch]} source={require('image!storefront')} >
              <TextInput
                placeholder="Email address"
                style={[s.textInputLarge, s.mbSmall]}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
              <TextInput
                placeholder="Password"
                style={s.textInputLarge}
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
              />
              <TouchableHighlight
                style={[s.buttonLarge, s.bgBlue, s.mb50]}
                onPress={this.authenticate}>
                  <Text style={[s.textWhite, s.f, s.textLarge]}>Log In</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[s.buttonLarge, s.bgGreen]}
                onPress={this.register}>
                  <Text style={[s.textWhite, s.f, s.textLarge]}>Register</Text>
              </TouchableHighlight>
            </Image>
          </View>
        </View>
      )
  }
});

module.exports = LoginContainer;