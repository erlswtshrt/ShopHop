var React = require('react-native');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var s = require('../Styles/styles');
var Menu = require('./MainMenu');
var Row = require('./FeedRowContainer');
var Header = require('./Header');

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
    height: 50,
    width: screenWidth
  },
  scrollFooter: {
    height: screenWidth/5-5,
    width: screenWidth 
  }
});

var FeedContainer = React.createClass ({
  navigateToConnections: function() {
    var ConnectionsContainer = require('./ConnectionsContainer');
    var self = this;
    this.props.navigator.push({
      component: ConnectionsContainer,
    });
  },
  navigateToFeed: function() {
    var self = this;
    this.props.navigator.push({
      component: FeedContainer,
      title: 'Feed'
    });
  },
  getInitialState: function() {
    return {  products: [] }
  },
  componentDidMount: function() {
    authData = ref.getAuth();
    if(authData !== null) uid = authData.uid;

    var self=this;
    var connectionsRef = ref.child("mobileusers").child(uid).child("connections");
    var products = [];

    connectionsRef.on("value", function(connections) {
      self.setState({connections: connections.val()});

      for (var connection in connections.val()) {
        if (connections.val().hasOwnProperty(connection)) {
            productsRef = ref.child("mobileusers").child(connection).child("products");
            productsRef.on("value", function(pids) {
              
              for (var pid in pids.val()) {
                if (pids.val().hasOwnProperty(pid)) {
                  var productRef = ref.child("products").child(pid);
                  productRef.on("value", function(snapshot) {
                    products.push(snapshot.val());
                    self.setState({products: products});
                  });
                }
              }
            });
        }
      }
    });
  },
  render: function() {
    var rows = this.state.products.map(function(product) {
      return <Row designer={product.brand} category={product.category} name={product.name} location={product.store} />
    })
    return (
      <View>
        <ScrollView style={[s.flex, styles.scrollView]}>
          <View style={[s.flex, styles.scrollHeader]} />
          {rows}
          <View style={[s.flex, styles.scrollFooter]} />
        </ScrollView>
        <Header title="My Feed" color="blue" />
        <Menu navigateToConnections={this.navigateToConnections} navigateToFeed={this.navigateToFeed}/>
      </View>)
  }
});

module.exports = FeedContainer;