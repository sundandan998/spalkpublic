import request from '../../utils/request'
export default {
// 预约--服务列表
 serviceList(params = {}) {
  return request({
    url: '/service/category/list/',
    method: 'get',
    params: params
  })
},
// 列表详情--获取服务类别详情信息
listDetail(params = {}) {
  return request({
    url: '/service/category/'+params.id+'/detail/',
    method: 'get',
    params: params
  })
},
// 预约 获取指定分类所属的所有产品信息列表
reservation(params = {}) {
  return request({
    url: '/service/'+params.category_id+'/list/',
    method: 'get',
    params: params
  })
},
}
