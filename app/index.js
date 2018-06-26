import React, { Component } from 'react';
import {View, Image, StyleSheet, Platform, BackHandler, ToastAndroid, AsyncStorage} from "react-native"
import { createBottomTabNavigator,createStackNavigator } from 'react-navigation';
import {HomeIndex,ShoppingCart,ClassifyHomeIndex,PersonalModules} from "./Routers/index"
import { Provider, observer } from 'mobx-react'
import RootStore from './Mobx/RootStore'
import { RouteConfigs, TabNavigatorConfig, StackNavigatorConfig } from './config';

const HomeIndexStack = createStackNavigator({
  Home: {
    screen:HomeIndex
  }
});
const PersonalIndexStack = createStackNavigator({
  PersonalIndex:  {
    screen:PersonalModules.PersonalIndex,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
});
const TabNavigator=createBottomTabNavigator({
  HomeIndex:  {
    screen: HomeIndex,
    path: 'HomeIndex',
    navigationOptions: props => {
      return RouteConfigs({
        iconame: 'index',
        label: '首页',
        header: null,
        props,
      });
    },
  },
  ClassifyHomeIndex:{
    screen: ClassifyHomeIndex,
    path: 'ClassifyHomeIndex',
    navigationOptions: props => {
      return RouteConfigs({
        iconame: 'class',
        label: '分类',
        props,
      });
    },
  },
  ShoppingCart: {
    screen: ShoppingCart,
    path: 'ShoppingCart',
    navigationOptions: props => {
      return RouteConfigs({
        iconame: 'shopping',
        label: '购物车',
        props,
      });
    },
  },
  PersonalIndex: {
    screen: PersonalIndexStack,
    path: 'PersonalIndex',
    navigationOptions: props => {
      return RouteConfigs({
        iconame: 'my',
        label: '个人中心',
        props,
      });
    },
  },
},TabNavigatorConfig({
    initialRouteName: 'HomeIndex',
  }),
);
const RoutersStack=createStackNavigator({
  TabNavigator:{
      screen:TabNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
  },
  UserInfo:  {
    screen:PersonalModules.UserInfo,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  ShopsOrder:  {
    screen:PersonalModules.ShopsOrder,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  MyTeam:  {
    screen:PersonalModules.MyTeam,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
})

export default class App extends Component {
  componentWillMount(){

  }
  componentDidMount() {

  }
  render () {
    return (
      <Provider rootStore={new RootStore()}>
        <RoutersStack />
      </Provider>
    )
  }
}



const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#eee',
    height:49,
  },
});