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
	TouchableHighlight,
  ActivityIndicatorIOS,
  LayoutAnimation
} = React;

var LoginContainer = React.createClass ({
	mixins: [ReactFireMixin],
	getInitialState: function() {
		return { loading: false }
	},
  componentWillMount: function() {
    LayoutAnimation.linear();
  },
  componentWillUnmount: function() {
    LayoutAnimation.linear();
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
        <View style={[s.wrapperStretch, s.bgBlueGreen]}>
          <TextInput
  			    style={s.textInputLarge}
  			    onChangeText={(email) => this.setState({email})}
  			    value={this.state.email}
  			  />
  				<TextInput
  			    style={s.textInputLarge}
  			    secureTextEntry={true}
  			    onChangeText={(password) => this.setState({password})}
  			    value={this.state.password}
  			  />
  			  <TouchableHighlight
  	        style={[s.buttonLarge, s.bgDarkBlue]}
  	        onPress={this.authenticate}>
  	          <Text style={[s.textWhite, s.f, s.textLarge]}>Start shopping!</Text>
  	      </TouchableHighlight>
        </View>
      )
    }
  }
});

module.exports = LoginContainer;