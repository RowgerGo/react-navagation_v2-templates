/**
 * Created by Administrator on 7/14 0014.
 */
import {AsyncStorage} from "react-native"
import { Toast } from 'teaset';
import encrypt from './Md5Encrypt'




export default class HttpUtils {

  static get(url) {
    return new Promise((resolve,reject)=> {
      let api='http://api.xxxxx.cn/';
      fetch(api + url)
        .then(response => response.json())
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          if(error.code === "0") {
            reject(error.msg);
          }
        })
    })
  }
  static  post(data) {
    let _ticket=false;

    return new Promise((resolve, reject) => {

      let api=global.seller_dev?'http://xxxxx.cn/':'http://xxxxx.com/'
      AsyncStorage.getItem('ticket',(error,text)=>{
        if(text=== null ){
           //RouteUtils.to('Login')
        }else{
 
          if (data != null) {
            data.token=text.replace(/^\"|\"$/g,'');// 去掉ticket两边的引号
            data.sign = encrypt(data);
          }
          let formData = new FormData();
          for (let k in data) {
            formData.append(k, data[k]);
          }
          fetch(api, {
            method: 'POST',
            headers: {

            },
            body: formData,
          })
            .then(response => response.json())
            .then(result => {
             // console.log(text)

              if (result.status === '2') {
                // Toast.fail(result.info);
                // setTimeout(() => {
                //   RouteUtils.navigator.navigate('Login', { user: 'Luojie' })
                // }, 2000)
              }
              // console.log(url+'-----:'+JSON.stringify(result));
              resolve(result);
            })
            .catch(error => {
              // alert(error);
              reject(error);
            })

        }
      });

    })
  }
  static  login(data) {
    let _ticket='';

    return new Promise((resolve, reject) => {
      let api=global.seller_dev?'http://xxxxx.cn/':'http://xxxxx.com/'
      if (data != null) {
        data.ticket=_ticket
        data.sign = encrypt(data);
      }
      let formData = new FormData();
      for (let k in data) {
        formData.append(k, data[k]);
      }
      fetch(api, {
        method: 'POST',
        headers: {

        },
        body: formData,
      })
        .then(response => response.json())
        .then(result => {
          if (result.status === 2) {
            Toast.fail(result.msg);
            setTimeout(() => {
              RouteUtils.navigator.navigate('LoginPage', { user: 'Luojie' })
            }, 2000)
          }
          // console.log(url+'-----:'+JSON.stringify(result));
          resolve(result);
        })
        .catch(error => {
          // alert(error);
          reject(error);
        })
    })
  }

}
