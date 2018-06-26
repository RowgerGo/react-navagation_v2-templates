/*
* 传入支付数字，返回此金额连续支付次数
* */
function checkPayTimes(num) {
  const cookie_pay_num=getCookie('cookie_pay_num')
  const cookie_pay_times=getCookie('cookie_pay_times')
  setCookie('cookie_pay_num',num)
  if(cookie_pay_num){
    if(cookie_pay_num==num){
      setCookie('cookie_pay_times',parseFloat(cookie_pay_times)+1)
      return parseFloat(cookie_pay_times)+1
    }else {
      setCookie('cookie_pay_times',1)
      return 1
    }
  }else {
    setCookie('cookie_pay_times',1)
    return 1
  }

}
//取小数不四舍五入,两位或者四位
function to_fixed_num(value,num){
  switch(num)
  {
    case 2:
      return parseFloat(Number(value.toString().match(/^\d+(?:\.\d{0,2})?/))).toFixed(2)
      break;
    case 4:
      return parseFloat(Number(value.toString().match(/^\d+(?:\.\d{0,4})?/))).toFixed(4)
      break;
    default:
      return parseFloat(Number(value.toString().match(/^\d+(?:\.\d{0,4})?/))).toFixed(4)
  }
}
//判断是否为手机号
function isPhoneAvailable(str) {
  const myreg=/^[1][3,4,5,6,7,8][0-9]{9}$/;
  if (!myreg.test(str)) {
    return false;
  } else {
    return true;
  }
}
function isMoneyAvailable(str) {
  const reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
  if (!reg.test(str)) {
    return false;
  } else {
    return true;
  }
}
function formats(time) {
  var date = new Date(time);//如果date为13位不需要乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
  return Y+M+D+h+m+s;
}
 function get7days() {
  var dd = new Date();
  dd.setDate(dd.getDate() - 7); //获取AddDayCount天后的日期
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1; //获取当前月份的日期
  var d = dd.getDate();
  var hms = dd.getHours() + ':' + dd.getMinutes() + ':' + (dd.getSeconds() < 10 ? '0' + dd.getSeconds() : dd.getSeconds());
  return iosDate(y + "-" + m + "-" + d + ' ' + hms);

}
 function getToday() {
  var dd = new Date();
  dd.setDate(dd.getDate()); //获取AddDayCount天后的日期
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1; //获取当前月份的日期
  var d = dd.getDate();
  var hms = '00' + ':' + '00' + ':' + '00';
  return iosDate(y + "-" + m + "-" + d + ' ' + hms);
}
 function get3MonthBefor() {
  var resultDate, year, month, date, hms;
  var currDate = new Date();
  year = currDate.getFullYear();
  month = currDate.getMonth() + 1;
  date = currDate.getDate();
  hms = currDate.getHours() + ':' + currDate.getMinutes() + ':' + (currDate.getSeconds() < 10 ? '0' + currDate.getSeconds() : currDate.getSeconds());
  switch (month) {
    case 1:
    case 2:
    case 3:
      month += 9;
      year--;
      break;
    default:
      month -= 3;
      break;
  }
  month = (month < 10) ? ('0' + month) : month;
  resultDate = year + '-' + month + '-' + date + ' ' + hms;

  return iosDate(resultDate);
}
 function getPreMonth(date) {
  var date = new Date(); //        1    2    3    4    5    6    7    8    9   10    11   12月
  var daysInMonth = new Array([0], [31], [28], [31], [30], [31], [30], [31], [31], [30], [31], [30], [31]);
  var strYear = date.getFullYear();
  var strDay = date.getDate();
  var strMonth = date.getMonth() + 1;
  if (strYear % 4 == 0 && strYear % 100 != 0) { //一、解决闰年平年的二月份天数   //平年28天、闰年29天//能被4整除且不能被100整除的为闰年
    daysInMonth[2] = 29;
  }
  if (strMonth - 1 == 0) //二、解决跨年问题
  {
    strYear -= 1;
    strMonth = 12;
  } else {
    strMonth -= 1;
  }
  strDay = Math.min(strDay, daysInMonth[strMonth]); //三、前一个月日期不一定和今天同一号，例如3.31的前一个月日期是2.28；9.30前一个月日期是8.30

  if (strMonth < 10) //给个位数的月、日补零
  {
    strMonth = "0" + strMonth;
  }
  if (strDay < 10) {
    strDay = "0" + strDay;
  }
  var datastr, hms;
  var currDate = new Date();
  hms = currDate.getHours() + ':' + currDate.getMinutes() + ':' + (currDate.getSeconds() < 10 ? '0' + currDate.getSeconds() : currDate.getSeconds());
  datastr = strYear + "-" + strMonth + "-" + strDay + ' ' + hms;
  return iosDate(datastr);

}
function iosDate(date) {
  var arr = date.split(/[- : \/]/);
  return new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
}

export{
  to_fixed_num,
  isPhoneAvailable,
  isMoneyAvailable,
  formats,
  get7days,
  getToday,
  get3MonthBefor,
  getPreMonth,
};
