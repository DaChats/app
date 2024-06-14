import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Platform, PermissionsAndroid } from 'react-native';

class HomeScreen extends Component {
  componentDidMount() {
    this.requestMicrophonePermission();
  }

  async requestMicrophonePermission() {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Mikrofon Engedély',
            message: 'Az alkalmazás használatához szükség van a mikrofon hozzáférésére.',
            buttonPositive: 'Engedélyezés',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Mikrofon engedély megadva');
        } else {
          console.log('Mikrofon engedély megtagadva');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    return <WebView source={{ uri: 'https://app.dachats.online/' }} />;
  }
}

export default HomeScreen;