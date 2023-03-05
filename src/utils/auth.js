
const toKenKey = 'token';

//token存

export const setToken = token => sessionStorage.setItem(toKenKey, token);

//取

export const getToken = () => sessionStorage.getItem(toKenKey);

//删

export const removeToken = () => sessionStorage.removeItem(toKenKey);