import React, { Component } from 'react';
import { StyleSheet, View,Text ,StatusBar} from 'react-native';
export default class HomeIndex extends Component {
  static navigationOptions = {
    header: null,
    headerTitle: '首页',
    headerStyle: {
      backgroundColor: 'white',
      borderBottomWidth: 0,
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      shadowRadius: 0,
      elevation: 0,
    },
  }
  constructor(props) {
    super(props);
    RouteUtils.init(this.props.navigation)
    this.state = {
      product_index2: { },
    }
  }
  componentDidMount() {

  }

  render() {
    // const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <View>
          <Text> Welcome to Personalndex!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD39B',
    width:"100%"
  },
});
