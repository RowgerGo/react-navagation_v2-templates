// import  React , { Component } from 'react';
import { Dimensions, PixelRatio, Platform, Alert,AsyncStorage } from 'react-native';
import {Theme} from 'teaset';

import FontSize from './TextSize';
import Colors from './Colors';
import { px2dp } from './Px2dp';
import RouteUtils from './RouteUtils'
import HttpUtils from './HttpUtils'


const { height, width } = Dimensions.get('window');
// 系统是iOS
global.iOS = (Platform.OS === 'ios');
// 系统是安卓
global.Android = (Platform.OS === 'android');
// 获取屏幕宽度
global.SCREEN_WIDTH = width;
// 获取屏幕高度
global.SCREEN_HEIGHT = height;
// 获取屏幕分辨率
global.PixelRatio = PixelRatio.get();
// 最小线宽
global.pixel = 1 / PixelRatio;
// 常用颜色
global.COLORS = Colors;
// 适配字体
global.FONT_SIZE = FontSize;
// 用户登录状态
global.TOKEN = false;
// 屏幕适配
global.px2dp = px2dp;
// 图片压缩

// 弹出框
global.Alert = Alert;
// 路由
global.RouteUtils = RouteUtils;
// fetch封装
global.HttpUtils = HttpUtils;
//
global.NAV_BAR_HEIGHT_IOS = 44;
global.NAV_BAR_HEIGHT_ANDROID = 50;
global.STATUS_BAR_HEIGHT = 20;
global.NAV_BAR_HEIGHT = global.iOS ? global.NAV_BAR_HEIGHT_IOS : global.NAV_BAR_HEIGHT_ANDROID

global.STATUS_BAR_NAV_BAR_HEIGHT=Theme.navBarContentHeight + Theme.statusBarHeight

global.statusBarHeight=Theme.statusBarHeight

global._ticket=null;

Theme.set({
  primaryColor: '#f55e5d',
  backButtonTitle: '返回',
});

global._ticket=null;

//控制正式还是测试，true表示是开发环境，false表示是线上环境，
global.seller_dev=false;
global.Version=1.5
//手动控制是pos机用，true表示是，false表示否。当为true的时候，应该把OEC相关的隐藏掉
global.isPos=false
// true为ios上线版本，false为开发版本
global.isAppStore=true
