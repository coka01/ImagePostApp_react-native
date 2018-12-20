/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity,
Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

type Props = {};
export default class App extends Component<Props> {

  state = {
    uri: ""
  };

  // 画像選択画面を開く
  openPicker = () => {
    ImagePicker.showImagePicker({}, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
      } else {
        const source = { uri: res.uri };
        // 選択した画像uriをstateに保存
        this.setState(source);
      }
    });
  };

  upload = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.state.uri }} style={styles.image} />
        <TouchableOpacity
          style={styles.button}
          onPress={this.openPicker}>
          <Text>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.upload}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#EEE'
  },
  button: {
    padding: 20,
  }
});
