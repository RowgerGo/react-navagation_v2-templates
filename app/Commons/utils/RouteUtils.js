/**
 * Created by Rowger on 2017/11/1.
 * 路由管理类
 */
import {DeviceEventEmitter} from 'react-native'
export default class RouteUtils {
  static navigator = null;
  static lastActionTime = 0;
  static routeStack = [];

  /**
   * 添加到导航栈中
   * @param navigation
   */
  static addStack(navigation) {
    if (RouteUtils.routeStack.indexOf(navigation.state.key) === -1) {
      DeviceEventEmitter.emit('StackTopChange', navigation.state.key);
      RouteUtils.routeStack.push(navigation.state.key);
      console.log('从Route添加name', navigation, '数量', RouteUtils.routeStack.length)
    }
  }

  static addStackTopChangeListener(callBack) {
    return DeviceEventEmitter.addListener('StackTopChange', callBack)
  }

  /**
   * 从导航栈中移除
   * @param navigation
   */
  static remove(navigation) {
    const index = RouteUtils.routeStack.indexOf(navigation.state.key);
    if (index !== -1) {
      RouteUtils.routeStack.splice(index, 1);
      DeviceEventEmitter.emit('StackTopChange', RouteUtils.routeStack[RouteUtils.routeStack.length - 1]);
      console.log('从Route移除name', navigation, '数量', RouteUtils.routeStack.length)
    }
  }

  static init(nav) {
    RouteUtils.navigator = nav;
  }
  static back(routeName,delay = true){
    console.log('routeName'+routeName)
    const nowTime = Date.parse(new Date());
    if ((nowTime - RouteUtils.lastActionTime) <= 500 && delay) {
      return
    }
    console.log(RouteUtils.navigator)
    RouteUtils.lastActionTime = nowTime;
    RouteUtils.navigator.goBack();
  }
  static to(routeName, params, action, delay = true) {
    // 防止重复点击
    console.log('routeName'+routeName)
    const nowTime = Date.parse(new Date());
    if ((nowTime - RouteUtils.lastActionTime) <= 500 && delay) {
      return
    }
    RouteUtils.lastActionTime = nowTime;
    RouteUtils.navigator.navigate(routeName, params, action);
  }
}
