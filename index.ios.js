/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var YelpScannerList = require('./YelpScannerList');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = React;

var YelpScanner = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'YelpScanner',
          component: YelpScannerList,
          passProps: {}
        }}
        itemWrapperStyle={styles.itemWrapper}
        tintColor='#008888'
      />
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    backgroundColor: '#eaeaea',
  },
});

AppRegistry.registerComponent('YelpScanner', () => YelpScanner);

module.exports = YelpScanner;