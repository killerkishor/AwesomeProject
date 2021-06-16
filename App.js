import React from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const App = ({params}) => (
  <WebView source={{uri: 'http://192.168.43.174:4200/'}} />
);

export default App;
