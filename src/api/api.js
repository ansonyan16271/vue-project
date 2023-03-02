//统一接口地址

import http from '.' //同级的index

//登录
export const login = data => http.post('user/login', data);


//退出