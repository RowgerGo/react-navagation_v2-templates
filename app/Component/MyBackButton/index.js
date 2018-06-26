import React from 'react';
import { withNavigation } from 'react-navigation';
import {NavigationBar,Toast} from "teaset"
import {inject, observer} from "mobx-react";


@inject('rootStore')
@observer
class MyBackButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backUrl:this.props.backUrl?this.props.backUrl:null,
    }
  }
  handleClick=(url)=>{


    this.props.navigation.goBack(null)

  }
  componentDidMount() {

  }
  componentWillUnmount(){

  }

  render() {
    const url=this.props.backTo?this.props.backTo:null
    const title=this.props.title||'个人中心'
    const left=this.props.left
    return  <NavigationBar title={title}
            style={{backgroundColor: '#1c1c20',zIndex:100000}}
            leftView={left?<NavigationBar.BackButton title='返回'
               onPress={() => {this.handleClick(url)}}
            />:null}
    />
  }
}
export default withNavigation(MyBackButton);