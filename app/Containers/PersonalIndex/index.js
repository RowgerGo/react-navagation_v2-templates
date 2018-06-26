import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {ListRow} from 'teaset'
import MyBackButton from "../../Component/MyBackButton"
export default class PersonalIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }
  GoTo=(url)=>{
    this.props.navigation.navigate(url)
  }
  render() {
    return (
      <View style={styles.container}>
        <MyBackButton left={false}/>
        <View
        style={{
          flex: 1,
          width:"100%",
          marginTop:STATUS_BAR_NAV_BAR_HEIGHT
        }}
        >
          <ListRow title='个人信息' accessory='indicator' detail='Detail'
             onPress={()=>this.GoTo('UserInfo')}
          />
          <ListRow title='我的团队' accessory='indicator' detail='Detail'
                   onPress={()=>this.GoTo('MyTeam')}
          />
        </View>
        <Text style={styles.welcome}>
          Welcome to Personalndex!
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
    backgroundColor: '#FFD39B',
    width:"100%"
  },
});
