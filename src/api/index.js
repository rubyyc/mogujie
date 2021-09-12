import request from '@/utils/request'
// 发起请求
export const getUsers = () => request({
  url: '/api/users',
  method: 'get'
})
