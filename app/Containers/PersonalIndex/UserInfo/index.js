import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MyBackButton from "../../../Component/MyBackButton"

export default class UserInfo extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={styles.container}>
        <MyBackButton left={true} title={"个人信息"}/>
        <Text style={styles.welcome}>
          Welcome to UserInfo!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
});
