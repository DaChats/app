import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class HomeScreen extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://app.dachats.online/' }}
      />
    );
  }
}