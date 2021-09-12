import axios from 'axios'

const service = axios.create({})

service.interceptors.request.use(
  config => {
    return config
  }
)

service.interceptors.response.use(
  response => {
    const { data } = response
    return data
  }
)

export default service
