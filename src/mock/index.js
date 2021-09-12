import Mock from 'mockjs'
import mall from './mail'
Mock.mock('/api/users', 'get', mall.getUsers)

export default Mock
