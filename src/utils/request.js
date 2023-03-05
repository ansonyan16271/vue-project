import axios from 'axios'
import { Message } from 'element-ui';
import { getToken } from './auth';

axios.defaults.baseURL = 'http://49.235.128.49:5058/api/';

//请求拦截器
axios.interceptors.request.use(config => {
    config.headers['token'] = getToken();
    return config;
});

//响应拦截器
axios.interceptors.response.use(res => {
    //对相应的数据处理
    let { code, msg } = res.data;
    if (code !== 20000) {
        Message({
            message: msg || '服务器不给力',
            type: 'warning',
            duration: 2000
        });
    }
    return res;
}, err => {
    //判断错误代码
    return Promise.reject(err)
});


export default axios;