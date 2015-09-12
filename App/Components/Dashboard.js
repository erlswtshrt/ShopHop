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

var Dashboard = React.createClass ({
  render: function() {
    var self = this;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome, {this.props.user}</Text>
      </View>
    )
  }
});

module.exports = Dashboard;