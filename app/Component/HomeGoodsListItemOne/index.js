/**
 * 商品列表 一排单个横放
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Integral from '../../commons/assets/Home/Home_integral.png';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f2f3f5',
  },
  title: {
    width: '100%',
    height: px2dp(90),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomWidth: px2dp(1),
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  titleImg: {
    width: px2dp(412),
    height: px2dp(50),
  },
  titleRight: {
    width: px2dp(160),
    height: px2dp(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleImgRight: {
    width: px2dp(65),
    height: px2dp(25),
  },
  themeCont: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  themeContDiv: {
    width: '100%',
    height: px2dp(186),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: px2dp(10),
    backgroundColor: '#fff',
  },
  themeContLeft: {
    width: px2dp(250),
    height: px2dp(250),
  },
  themeContRight: {
    padding: px2dp(10),
    width: px2dp(465),
  },
  themeRightTitle: {
    fontSize: FONT_SIZE(14),
  },
  themeRightMiddle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: px2dp(10),
    marginBottom: px2dp(10),
  },
  themeRightNum: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contImg: {
    width: px2dp(250),
    height: px2dp(250),
  },
  themeRightNumL: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: px2dp(4),
    backgroundColor: '#ef7e06',
    borderRadius: px2dp(10),
  },
  themeRightNumR: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#ff0e0d',
    borderRadius: px2dp(10),
    padding: px2dp(4),
  },
  IntegralImg: {
    width: px2dp(32),
    height: px2dp(23),
  },
  white: {
    color: '#fff',
  },

});

export default class HomeGoodsListItemOne extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props)
    this.state = {
      classarr: ['1'],
    }
  }
  componentDidMount() {
  }
  _press(selectId) {
    const data = {
      id: selectId,
    }
    RouteUtils.to('GoodsDetails', data)
  }
  render() {
    // const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={( ) => this._press(2)}
        >
          <View style={styles.themeCont}>
            {this.state.classarr.map((item)=> (
              <View style={styles.themeContDiv}>
                <View style={styles.themeContLeft}>
                  <Image style={styles.contImg} source={{ uri: 'http://image.yx18g.com/Pic/Public/upload/users/2017-12-07/5a28b38a220bc.png' }} alt="" />
                </View>
                <View style={styles.themeContRight}>
                  <Text style={styles.themeRightTitle}>
                    启迪 不沾杯口红胡萝卜色红樱桃色铂金三色可选搭配唇线笔组合共2件
                  </Text>
                  <View style={styles.themeRightMiddle}>
                    <Text>￥359.00</Text>
                    <Text>月销0</Text>
                  </View>
                  <View style={styles.themeRightNum}>
                    <View style={styles.themeRightNumL}>
                      <Text style={styles.white}>VIP:￥</Text>
                      <Text style={styles.white}>369.00</Text>
                    </View>
                    <View style={styles.themeRightNumR}>
                      <Image style={styles.IntegralImg} source={Integral} alt="" />
                      <Text style={styles.white}>积分3</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

