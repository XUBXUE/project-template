import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 60000,
  withCredentials: true
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// const errorHandle = (status, other) => {
//   switch (status) {
//     case 400:
//       Message.error("信息校验失败");
//       break;
//     case 401:
//       Message.error("认证失败");
//       break;
//     case 403:
//       Message.error("token校验失败");
//       break;
//     case 404:
//       Message.error("请求的资源不存在");
//       break;
//     default:
//       Message.error(other);
//       break;
//   }
// };

// instance.interceptors.response.use(
//   // 响应包含以下信息data,status,statusText,headers,config
//   (res) => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
//   (err) => {
//     Message.error(err);
//     const { response } = err;
//     if (response) {
//       errorHandle(response.status, response.data);
//       return Promise.reject(response);
//     }
//     Message.error("请求失败");
//     return true;
//   }
// );

export default instance
