import Mock from 'mockjs'

Mock.mock(
  '/api/users',
  'get',
  () => {
    return Mock.mock({
      status: 200,
      msg: '请求成功',
      // 产生3条数据
      'data|3': [
        {
          // 随机产生名称
          // 1.函数写法
          // name: Mock.Random.cname(),
          // 2.@canme写法
          name: '@cname',
          // 随机产生20-50的年龄
          age: '@integer(20,50)'
        }
      ]
    })
  }
)

export default Mock
