var React = require('react-native');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var s = require('../Styles/styles');
var Menu = require('./MainMenu');
var FeedContainer = require('./FeedContainer');
var LoginContainer = require('./LoginContainer');
var Row = require('./ConnectionsRowContainer');
var Header = require('./ConnectionsHeader');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
  ActivityIndicatorIOS,
  LayoutAnimation,
  StatusBarIOS,
  ListView,
  ScrollView
} = React;

var ref = new Firebase('https://shophopusers.firebaseio.com/');
var authData = null;
var uid = null;

var Dimensions = require('Dimensions')
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

var styles = StyleSheet.create({
  scrollView: {
    height: screenHeight,
    width: screenWidth
  },
  scrollHeader: {
    height: 90,
    width: screenWidth
  },
  scrollFooter: {
    height: screenWidth/4-5,
    width: screenWidth 
  }
});

var ConnectionsContainer = React.createClass ({
  navigateToConnections: function() {
    var self = this;
    this.props.navigator.push({
      component: ConnectionsContainer,
    });
  },
  navigateToFeed: function() {
    var FeedContainer = require('./FeedContainer');
    var self = this;
    this.props.navigator.push({
      component: FeedContainer,
      title: 'My Feed'
    });
  },
  navigateToBrowse: function() {
    var QRScannerContainer = require('./QRScannerContainer');
    var self = this;
    this.props.navigator.push({
      component: QRScannerContainer,
      title: 'Scanner'
    });
  },
  getInitialState: function() {
    return {  products: [],
              connections: {},
              user: null }
  },
  componentDidMount: function() {
    authData = ref.getAuth();
    if(authData !== null) uid = authData.uid;
    var self=this;
    var connectionsRef = ref.child("mobileusers").child(uid).child("connections");
    connectionsRef.on("value", function(snapshot) {
      self.setState({connections: snapshot.val()});
    });
  },
  render: function() {
    var connections = [];
    for (var property in this.state.connections) {
        if (this.state.connections.hasOwnProperty(property)) {
            connections.push(property);
        }
      }
    var rows = connections.map(function(connection) {
      return <Row />
    })
    return (
      <View>
        <ScrollView style={[s.flex, styles.scrollView]}>
          <View style={[s.flex, styles.scrollHeader]} />
          {rows}
          <View style={[s.flex, styles.scrollFooter]} />
        </ScrollView>
        <Header />
        <Menu navigateToConnections={this.navigateToConnections} navigateToBrowse={this.navigateToBrowse} navigateToFeed={this.navigateToFeed}/>
      </View>)
  }
});

module.exports = ConnectionsContainer;