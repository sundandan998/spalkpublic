// vant框架
import {PasswordInput, NumberKeyboard, Popup, List, PullRefresh, Dialog, 
  GoodsAction, Tab, Tabs, AddressList,Button,Card,Stepper,RadioGroup, 
  Radio,AddressEdit,NoticeBar,Swipe, SwipeItem, Row, Col,Area, Uploader} from 'vant'
import { Slider,Steps,Step,DropdownMenu, DropdownItem,Dropdown} from 'element-ui'
const external = {
  install: function (Vue) {
    Vue.use(PasswordInput).use(NumberKeyboard)
    Vue.use(Popup)
    Vue.use(List)
    Vue.use(PullRefresh)
    Vue.use(Dialog)
    Vue.use(GoodsAction)
    Vue.use(Tab)
    Vue.use(Tabs)
    Vue.use(AddressList)
    Vue.use(Slider)
    Vue.use(Button)
    Vue.use(Card)
    Vue.use(Stepper)
    Vue.use(RadioGroup).use(Radio)
    Vue.use(AddressEdit)
    Vue.use(NoticeBar)
    Vue.use(Swipe).use(SwipeItem)
    Vue.use(Row).use(Col)
    Vue.use(Area)
    Vue.use(Uploader)
    Vue.use(Steps)
    Vue.use(Step)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(Dropdown)
  }
}
export default external
