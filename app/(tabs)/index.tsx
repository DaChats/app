import React, { Component } from 'react';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

export default class HomeScreen extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://app.dachats.online/'}}
        style={{marginTop: 20}}
      />
    );
  }
}