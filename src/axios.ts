// http/index.js
import axios from 'axios'

//创建axios的一个实例 
var instance = axios.create({
    baseURL: "", //接口统一域
    timeout: 6000, //设置超时
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;',
    }
})

export default instance;
