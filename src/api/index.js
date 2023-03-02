import axios from '@/utils/request';


const http = {
    get: (url, params) => axios.get(url, { params }),
    post: (url, params) => axios.post(url, params)
};

export default http;