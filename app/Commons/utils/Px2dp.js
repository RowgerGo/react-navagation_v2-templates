import {
  AsyncStorage,
  Platform,
} from 'react-native';

export default {
  async isLogin() {
    const data = await AsyncStorage.getItem('TOKEN');
    // console.log(data);
    if (data === null) {
      console.log('false');
      global.TOKEN = false;
      return false;
    } else {
      console.log('true');
      global.TOKEN = true;
      return true;
    }
  }
}

// 设计图上的比例，宽度
const basePx = Platform.OS === 'ios' ? 750 : 720;

exports.px2dp = function px2dp(px: number): number {
  return px / basePx * (global.SCREEN_WIDTH);
};
