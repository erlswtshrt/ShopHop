var React = require('react-native');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var s = require('../Styles/styles');
var LoadingContainer = require('./LoadingContainer');

var {
	View,
	Text,
	TextInput,
	StyleSheet,
  Image,
	TouchableHighlight,
  ActivityIndicatorIOS,
  LayoutAnimation
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
		return { loading: false }
	},
  register: function() {
    this.props.changeAppState(1);
  },
  authenticate: function() {
    this.setState({loading: true})
  	var self = this;
    this.ref = new Firebase('https://shophopusers.firebaseio.com/');

    this.ref.authWithPassword({
      email    : this.state.email,
      password : this.state.password
    }, function(error, authData) {
      if (error) {
      } else {
        self.props.setUser(authData);
      }
    });
  },
  render: function() {
    var self = this;
    if(this.state.loading) {
      return (<LoadingContainer />  );
    } else {
      return (
        <View style={[s.wrapper]}>
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
      )
    }
  }
});

module.exports = LoginContainer;