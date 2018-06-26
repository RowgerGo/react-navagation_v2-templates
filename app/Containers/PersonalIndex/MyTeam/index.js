import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MyBackButton from "../../../Component/MyBackButton"

export default class MyTeam extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyBackButton left={true} title={"我的团队"}/>
        <Text style={styles.welcome}>
          Welcome to MyTeam!
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
    backgroundColor: '#F5FCFF',
  },
});
