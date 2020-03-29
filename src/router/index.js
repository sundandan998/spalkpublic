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

    // 邀请记录
    {
      path: '/record',
      name: 'InvitationRecord',
      component: () => import('@/pages/mine/invite-people/InvitationRecord')
    },
    // 个人中心
    {
      path: '/personcenter',
      name: 'PersonCenter',
      component: () => import('@/pages/mine/person-center/PersonCenter')
    },
    // 修改个人信息
    {
      path: '/edit',
      name: 'EditInformation',
      component: () => import('@/pages/mine/person-center/EditInformation')
    },
    // 专属管家
    {
      path: '/housekeeper',
      name: 'Housekeeper',
      component: () => import('@/pages/mine/housekeeper/Housekeeper')
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
    // 代理商用户
    {
      path: '/agentuser',
      name: 'AgentUser',
      component: () => import('@/pages/mine/agent/AgentUser')
    },
    // 用户详情
    {
      path: '/userdetail',
      name: 'UserDetail',
      component: () => import('@/pages/mine/agent/UserDetail')
    },
    // 邀请管理
    {
      path: '/invite',
      name: 'InvitePeople',
      component: () => import('@/pages/mine/agent/InvitePeople')
    },
    // 安全中心
    {
      path: '/safety',
      name: 'SafetyCenter',
      component: () => import('@/pages/mine/safety-center/SafetyCenter')
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
    // // 健康管家--用户订单
    {
      path: '/healthorder',
      name: 'HealthOrder',
      component: () => import('@/pages/mine/health-steward/health-order/HealthOrder')
    },
    // // 健康管家--用户订单详情
    {
      path: '/healthorderdetail',
      name: 'HealthOrderDetail',
      component: () => import('@/pages/mine/health-steward/health-order/HealthOrderDetail')
    },
    // // 健康管家--取消订单
    {
      path: '/cancelorder',
      name: 'CancelOrder',
      component: () => import('@/pages/mine/health-steward/health-order/CancelOrder')
    },
    //健康管家--安排
    {
      path: '/arrangement',
      name: 'Arrangement',
      component: () => import('@/pages/mine/health-steward/health-order/Arrangement')
    },
    // 证书管理
    {
      path: '/certificatemanagement',
      name: 'CertificateManagement',
      component: () => import('@/pages/mine/health-steward/certificate-management/CertificateManagement')
    },
    // 上传证书
    {
      path: '/uploadinformation',
      name: 'UploadInformation',
      component: () => import('@/pages/mine/health-steward/certificate-management/UploadInformation')
    },
    // 填写证书信息
    {
      path: '/fillformation',
      name: 'FillInformation',
      component: () => import('@/pages/mine/health-steward/certificate-management/FillInformation')
    },
    // 服务机构--用户订单
    {
      path: '/serviceorder',
      name: 'ServiceOrder',
      component: () => import('@/pages/mine/health-steward/service-agency/ServerOrder')
    },
    // 服务机构--用户订单详情
    {
      path: '/servicedetail',
      name: 'ServiceDetail',
      component: () => import('@/pages/mine/health-steward/service-agency/ServiceDetail')
    },
  ]
})
