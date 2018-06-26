import { observable,action } from 'mobx'
class ObservableInfoStore {
  @observable PayHtml =''
  @action setPayHtml(val){
    this.PayHtml=val
  }
}


const infostore = new ObservableInfoStore()
export default infostore
