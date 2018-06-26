import React from 'react';
import { TouchableOpacity ,Image} from 'react-native';
import {TabIconImages} from "../../Commons/assets/images/index"

const typeMap = {
  share: 'md-share-alt',
  search: 'ios-search',
  back: 'ios-arrow-back',
  reload: 'ion-ios-reload',
  delete: 'ios-trash-outline',
};

const iStyle = {
  paddingLeft: 8,
  paddingRight: 8,
};

const creatIcon = props => {
  const { name, usename = false, size = 30, color = 'white' } = props;
  const names = usename ? name : typeMap[name];
  console.log(names)
  const styles = usename ? '' : iStyle;
  let icon=''
  switch(names)
  {
    case 'index':
      icon=TabIconImages.index
      break;
    case 'index-i':
      icon=TabIconImages.index_i
      break;
    case 'class':
      icon=TabIconImages.class
      break;
    case 'class-i':
      icon=TabIconImages.class_i
      break;
    case 'shopping':
      icon=TabIconImages.shopping
      break;
    case 'shopping-i':
      icon=TabIconImages.shopping_i
      break;
    case 'my':
      icon=TabIconImages.my
      break;
    case 'my-i':
      icon=TabIconImages.my_i
      break;
    default:
      icon=require('../../Commons/assets/images/tabIcon/index.png')
  }
  return <Image source={icon}   name={names} style={styles} size={size} color={color} />;
};

const runCallback = options => {
  const { callback } = options;

  const buttons =
    callback && typeof callback === 'function' ? (
      <TouchableOpacity onPress={callback}>
        {creatIcon(options)}
      </TouchableOpacity>
    ) : (
      creatIcon(options)
    );

  return buttons;
};

const NavigationButton = props => {
  const propsLength = props.length;
  let Buttons = null;
  if (propsLength >= 1) {
    props.map(item => {
      Buttons = runCallback(item);
      return null;
    });
  } else {
    Buttons = runCallback(props);
  }
  return Buttons;
};
export default NavigationButton;
