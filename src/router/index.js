import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/cs',
    //   name: 'cs',
    //   component: () => import('@/pages/index/cs')
    // },
    // 注册
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/pages/register/Register')
    },
    // 注册结果页
    {
      path: '/result',
      name: 'Result',
      component: () => import('@/pages/register/RegisterResult')
    },
    // 邀请码
    {
      path: '/code',
      name: 'Code',
      component: () => import('@/pages/register/InvitationCode')
    },

    // 服务列表
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/index/Index')
    },
    // 服务详情
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('@/pages/index/IndexDetail')
    },
    //选择服务
    {
      path: '/select',
      name: 'SelectService',
      component: () => import('@/pages/index/SelectService')
    },
    //确认预约
    {
      path: '/confirmreservation',
      name: 'ConfirmReservation',
      component: () => import('@/pages/index/ConfirmReservation')
    },
    // 预约结果
    {
      path: '/payresult',
      name: 'PayResult',
      component: () => import('@/pages/index/PayResult')
    },
    //选择订单
    {
      path: '/selectorder',
      name: 'SelectOrder',
      component: () => import('@/pages/index/SelectOrder')
    },

    // 我的
    {
      path: '/mine',
      name: 'Mine',
      component: () => import('@/pages/mine/Mine')
    },
    // 邀请新人
    {
      path: '/invite',
      name: 'InvitePeople',
      component: () => import('@/pages/mine/invite-people/InvitePeople')
    },
    // 邀请记录
    {
      path: '/record',
      name: 'InvitationRecord',
      component: () => import('@/pages/mine/invite-people/InvitationRecord')
    },
    //  资产中心
    {
      path: '/assets',
      name: 'Assets',
      component: () => import('@/pages/mine/assets-center/AssetsCenter')
    },
    // 资产详情
    {
      path: '/assetdetail/:code',
      name: 'AssetDetail',
      component: () => import('@/pages/mine/assets-center/AssetDetail')
    },
    // 冻结转让
    {
      path: '/freezetransfer/:order_id',
      name: 'FreezeTransfer',
      component: () => import('@/pages/mine/assets-center/FreezeTransfer')
    },
    // 可用转让
    {
      path: '/availabletransfer',
      name: 'AvailableTransfer',
      component: () => import('@/pages/mine/assets-center/AvailableTransfer')
    },
    // 确认转让
    {
      path: '/confirm',
      name: 'ConfirmTransfer',
      component: () => import('@/pages/mine/assets-center/ConfirmTransfer')
    },
    // 转让--订单详情
    {
      path: '/transferdetail/:code',
      name: 'TransferDetail',
      component: () => import('@/pages/mine/assets-center/TransferDetail')
    },
    //订单详情-待受理
    {
      path: '/orderpending',
      name: 'OrderPending',
      component: () => import('@/pages/mine/order/OrderPending')
    },
    // 我的订单
    {
      path: '/myorder',
      name: 'MyOrder',
      component: () => import('@/pages/mine/order/MyOrder')
    },

    // 订单详情
    {
      // path: '/orderdetail/:id',
      path: '/orderdetail',
      name: 'OrderDetail',
      component: () => import('@/pages/mine/order/OrderDetail')
    },
    // 上传体检报告
    {
      path: '/uploadreport',
      name: 'UploadReport',
      component: () => import('@/pages/mine/order/UploadReport')
    },
    //受服务人信息
    {
      path: '/serviced',
      name: 'ServicedInformation',
      component: () => import('@/pages/mine/order/ServicedInformation')
    },
    // 体检报告
    {
      path: '/report',
      name: 'MedicalReport',
      component: () => import('@/pages/mine/order/MedicalReport')
    },
    // 预约信息
    {
      path: '/reservation',
      name: 'ReservationInformation',
      component: () => import('@/pages/mine/order/ReservationInformation')
    },
    // 收货地址
    {
      path: '/address',
      name: 'ShippingAddress',
      component: () => import('@/pages/mine/shipping-address/ShippingAddress')
    },
    // 新建地址
    {
      path: '/newaddress',
      name: 'NewAddress',
      component: () => import('@/pages/mine/shipping-address/NewAddress')
    },
    // 地址详情
    {
      path: '/addressdetail',
      name: 'AddressDetail',
      component: () => import('@/pages/mine/shipping-address/AddressDetail')
    },
    // 安全中心
    {
      path: '/safety',
      name: 'SafetyCenter',
      component: () => import('@/pages/mine/safety-center/SafetyCenter')
    },
    // 证书详情
    {
      path: '/certificate',
      name: 'CertificateDetail',
      component: () => import('@/pages/mine/certificate/CertificateDetail')
    },
    // 我的积分
    {
      path: '/scores',
      name: 'MyScores',
      component: () => import('@/pages/mine/my-scores/MyScores')
    },
    // 转入
    {
      path: '/into',
      name: 'TransferInto',
      component: () => import('@/pages/mine/my-scores/TransferInto')
    },
    // 转出
    {
      path: '/out',
      name: 'TransferOut',
      component: () => import('@/pages/mine/my-scores/TransferOut')
    },
    // 转出确认
    {
      path: '/turnconfirm',
      name: 'TurnConfirm',
      component: () => import('@/pages/mine/my-scores/TurnConfirm')
    },
    // 转账结果
    {
      path: '/turnresult',
      name: 'TurnResult',
      component: () => import('@/pages/mine/my-scores/TurnResult')
    },
    // 明细
    {
      path: '/details',
      name: 'PointsDetails',
      component: () => import('@/pages/mine/my-scores/PointsDetails')
    },
    // 明细详情
    {
      path: '/creditdetails',
      name: 'CreditDetails',
      component: () => import('@/pages/mine/my-scores/CreditDetails')
    },
    // 代理商列表
    {
      path: '/agent',
      name: 'Agent',
      component: () => import('@/pages/mine/agent/Agent')
    },
    // 代理商详情
    {
      path: '/agentdetail/:id',
      name: 'AgentDetail',
      component: () => import('@/pages/mine/agent/AgentDetail')
    },
    // 修改手机号
    {
      path: '/tel',
      name: 'ModifyTel',
      component: () => import('@/pages/mine/safety-center/ModifyTel')
    },
    // 修改支付密码
    {
      path: '/modify',
      name: 'ModifyPwd',
      component: () => import('@/pages/mine/safety-center/ModifyPwd')
    },
    // 设置支付密码
    {
      path: '/set',
      name: 'SetPwd',
      component: () => import('@/pages/mine/safety-center/SetPwd')
    },
    // 安全验证
    {
      path: '/verification',
      name: 'SafetyVerification',
      component: () => import('@/pages/mine/safety-center/SafetyVerification')
    },
    // 忘记密码
    {
      path: '/forget',
      name: 'Forget',
      component: () => import('@/pages/mine/safety-center/forgetPwd')
    },
  ]
})
