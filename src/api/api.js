//统一接口地址

import http from '.' //同级的index

//登录
export const login = data => http.post('user/login', data);


//退出


//查询用户信息

export const userInfo = () => http.get('user/info');

//地图数据 员工分布
export const getMap = () => http.get('user/employ-map');