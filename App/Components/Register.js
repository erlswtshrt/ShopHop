var React = require('react-native');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase')

var {
	View,
	Text,
	StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

var LoginContainer = React.createClass ({
	mixins: [ReactFireMixin],
  getInitialState: function() {
    return {user: "yes",
            o2: "no"}
  },
  componentDidMount: function() {
    console.log("gets here!");
    var self = this;
    this.ref = new Firebase('https://shophopusers.firebaseio.com/');

		this.ref.createUser({
		  email    : "johnearle01@gmail.com",
		  password : "j"
		}, function(error, userData) {
		  if (error) {
		    console.log("Error creating user:", error);
		  } else {
		    console.log("Successfully created user account with uid:", userData.uid);
		  }
		});

    this.ref.authWithPassword({
      email    : "johnearle01@gmail.com",
      password : "j"
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        self.setState({user: authData});
      }
    });
  },
  render: function() {
    var self = this;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{self.state.user}</Text>
      </View>
    )
  }
});

module.exports = LoginContainer;