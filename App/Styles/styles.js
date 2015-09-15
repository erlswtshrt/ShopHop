'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var blue 		  = '#059ece'
var lightBlue = '#4bc8dd'
var darkBlue 	= '#4b74b5'
var blueGreen = '#6accc0'
var green 		= '#42c697'
var orange 		= '#f4b571'
var magenta 	= '#d6639d'
var purple 		= '#916fb5'
var red 		  = '#ef6c6c'
var yellow 	  = '#f7db63'
var white		  = '#ffffff'
var navy      = '#3D4957'

module.exports = StyleSheet.create({

// background color
bgBlue: {
    backgroundColor: blue,
},
bgLightBlue: {
    backgroundColor: lightBlue,
},
bgDarkBlue: {
    backgroundColor: darkBlue,
},
bgBlueGreen: {
    backgroundColor: blueGreen,
},
bgGreen: {
    backgroundColor: green,
},
bgOrange: {
    backgroundColor: orange,
},
bgMagenta: {
    backgroundColor: magenta,
},
bgPurple: {
    backgroundColor: purple,
},
bgRed: {
    backgroundColor: red,
},
bgYellow: {
    backgroundColor: yellow,
},
bgNavy: {
    backgroundColor: navy,
},

// margin
mSmall: {
	margin: 5,
},
mMedium: {
	margin: 8,
},
mLarge: {
	margin: 10,
},
mXLarge: {
	margin: 15,
},
mXxLarge: {
	margin: 20,
},
mXxxLarge: {
	margin: 30,
},

// margin
mtSmall: {
  marginTop: 5,
},
mtMedium: {
  marginTop: 8,
},
mtLarge: {
  marginTop: 10,
},
mtXLarge: {
  marginTop: 15,
},
mtXxLarge: {
  marginTop: 20,
},
mtXxxLarge: {
  marginTop: 30,
},

// margin
mbSmall: {
  marginBottom: 5,
},
mbMedium: {
  marginBottom: 8,
},
mbLarge: {
  marginBottom: 10,
},
mbXLarge: {
  marginBottom: 15,
},
mbXxLarge: {
  marginBottom: 20,
},
mbXxxLarge: {
  marginBottom: 30,
},

mb50: {
  marginBottom: 50,
},

// margin
mlSmall: {
	marginLeft: 5,
},
mlMedium: {
	marginLeft: 8,
},
mlLarge: {
	marginLeft: 10,
},
mlXLarge: {
	marginLeft: 15,
},
mlXxLarge: {
	marginLeft: 20,
},
mlXxxLarge: {
	marginLeft: 30,
},

// margin
mrSmall: {
	marginRight: 5,
},
mrMedium: {
	marginRight: 8,
},
mrLarge: {
	marginRight: 10,
},
mrXLarge: {
	marginRight: 15,
},
mrXxLarge: {
	marginRight: 20,
},
mrXxxLarge: {
	marginRight: 30,
},

// margin
pSmall: {
	padding: 5,
},
pMedium: {
	padding: 8,
},
pLarge: {
	padding: 10,
},
pXLarge: {
	padding: 15,
},
pXxLarge: {
	padding: 20,
},
pXxxLarge: {
	padding: 30,
},

// margin
plSmall: {
	paddingLeft: 5,
},
plMedium: {
	paddingLeft: 8,
},
plLarge: {
	paddingLeft: 10,
},
plXLarge: {
	paddingLeft: 15,
},
plXxLarge: {
	paddingLeft: 20,
},
plXxxLarge: {
	paddingLeft: 30,
},

// margin
prSmall: {
	paddingRight: 5,
},
prMedium: {
	paddingRight: 8,
},
prLarge: {
	paddingRight: 10,
},
prXLarge: {
	paddingRight: 15,
},
prXxLarge: {
	paddingRight: 20,
},
prXxxLarge: {
	paddingRight: 30,
},

// margin
pbSmall: {
  paddingBottom: 5,
},
pbMedium: {
  paddingBottom: 8,
},
pbLarge: {
  paddingBottom: 10,
},
pbXLarge: {
  paddingBottom: 15,
},
pbXxLarge: {
  paddingBottom: 20,
},
pbXxxLarge: {
  paddingBottom: 30,
},

// font
f: {
	fontFamily: 'Avenir-Book',
},

// border radius
brSmall: {
	borderRadius: 5,
},
brMedium: {
	borderRadius: 8,
},
brLarge: {
	borderRadius: 10,
},
brXLarge: {
	borderRadius: 15,
},

// text color
textWhite: {
    color: white,
},
textBlue: {
    color: blue,
},
textLightBlue: {
    color: lightBlue,
},
textDarkBlue: {
    color: darkBlue,
},
textBlueGreen: {
    color: blueGreen,
},
textGreen: {
    color: green,
},
textOrange: {
    color: orange,
},
textMagenta: {
    color: magenta,
},
textPurple: {
    color: purple,
},
textRed: {
    color: red,
},
textYellow: {
    color: yellow,
},
textNavy: {
    color: navy,
},

// font size
textSmall: {
	fontSize: 12,
},
textMedium: {
	fontSize: 16,
},
textLarge: {
	fontSize: 20,
},
textXLarge: {
	fontSize: 22,
},
textXxLarge: {
	fontSize: 26,
},
textXxxLarge: {
	fontSize: 32,
},
text50: {
  fontSize: 50,
},

// wrapper
wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },

 // wrapper
c: {
    justifyContent: 'center',
    alignItems: 'center',
 },

  // wrapper
cHor: {
    alignItems: 'center',
 },

 // wrapper
wrapperStretch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
 },

 wrapperRow: {
  flex: 1,
  flexDirection: 'row',
 },

 wrapperCol: {
  flex: 1,
  flexDirection: 'column',
 },

alignBottom: {
  position: 'absolute',
  bottom: 0
},

 h10: {
 	height: 10,
 },
  h20: {
 	height: 20,
 },
  h30: {
 	height: 30,
 },
  h40: {
 	height: 40,
 },
  h50: {
 height: 50,
 },
 h120: {
  height: 120,
 },

w120: {
  width: 120,
},

textCenter: {
  textAlign: 'center',
},

bgNone: {
  backgroundColor: 'transparent'
},

 // text input
 textInputLarge: {
  	height: 45, 
  	backgroundColor: '#ffffff',
    fontFamily:'Avenir-Book',
    fontSize: 18,
  	marginLeft: 30,
  	marginRight: 30,
  	paddingLeft: 15,
  	paddingRight: 15,
  	padding: 5,
    opacity: 0.95
},

  buttonLarge: {
  	height: 45,
    fontSize: 18,
  	justifyContent: 'center',
  	alignItems: 'center',
  	marginLeft: 30,
  	marginRight: 30,
  	margin: 5,
  	padding: 10,
    opacity: 0.95
  }

});