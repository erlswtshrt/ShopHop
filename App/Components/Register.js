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

var RegisterContainer = React.createClass ({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return { loading: false }
  },
  login: function() {
    this.props.changeAppState(0);
  },
  register: function() {
    var ref = this.ref;
    ref = new Firebase('https://shophopusers.firebaseio.com/');
    var firstName = this.state.firstName;
    var lastName = this.state.lastName;
    var email = this.state.email;
    var self = this;

    ref.createUser({
      email    : this.state.email,
      password : this.state.password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        var usersRef = ref.child("users");
        usersRef.child(userData.uid).set({ 
          firstName: firstName,
          lastName: lastName,
          email: email
        });
        self.props.changeAppState(0);
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
                placeholder="First name"
                style={s.textInputLarge}
                onChangeText={(firstName) => this.setState({firstName})}
                value={this.state.firstName}
              />
              <TextInput
                placeholder="Last name"
                style={s.textInputLarge}
                onChangeText={(lastName) => this.setState({lastName})}
                value={this.state.lastName}
              />
              <TextInput
                placeholder="Email address"
                style={s.textInputLarge}
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
              <TextInput
                placeholder="Confirm password"
                style={s.textInputLarge}
              />
              <TouchableHighlight
                style={[s.buttonLarge, s.bgBlue, s.mb50]}
                onPress={this.register}>
                  <Text style={[s.textWhite, s.f, s.textLarge]}>Register</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[s.buttonLarge, s.bgGreen]}
                onPress={this.login}>
                  <Text style={[s.textWhite, s.f, s.textLarge]}>Log In</Text>
              </TouchableHighlight>
            </Image>
        </View>
      )
    }
  }
});

module.exports = RegisterContainer;