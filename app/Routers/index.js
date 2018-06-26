import HomeIndex from '../Containers/HomeIndex/index'
import ClassifyHomeIndex from '../Containers/ClassifyHomeIndex/index'
import PersonalIndex from '../Containers/PersonalIndex/index'
import ShoppingCart from '../Containers/ShoppingCart/index'
import UserInfo from "../Containers/PersonalIndex/UserInfo"
import MyTeam from "../Containers/PersonalIndex/MyTeam"
import ShopsOrder from "../Containers/PersonalIndex/ShopsOrder"

const PersonalModules={
  PersonalIndex,
  UserInfo,
  MyTeam,
  ShopsOrder
}


module.exports = {
  HomeIndex,
  ClassifyHomeIndex,
  PersonalModules,
  ShoppingCart,
  UserInfo,
  MyTeam,
  ShopsOrder,
}