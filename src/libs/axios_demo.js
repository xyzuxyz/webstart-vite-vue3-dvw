import axios from "axios";
import Cookies from 'js-cookie'

// 配置base
const baseURL = ""

export const queryService = axios.create({
    baseURL: baseURL,
});

queryService.interceptors.request.use(
    function(config) {

        // 发送请求前会做的事情
        const token = ()=>{
            return Cookies.get("token")
        }

        config.headers['Content-Type'] = "application/json"
        config.headers['Authorization'] = token()

        return config;
    },
    function(error) {
        // 请求错误要做的事情
        return Promise.reject(error);
    }
);

queryService.interceptors.response.use(
    function(response) {
        // 2xx的状态码会激活的函数

        // // 判断状态码
        // if(response.data.code == 401){
        //     location.href = "/login"
        // }

        return response.data;
    },
    function(error) {
        // 非2xx状态码会激活的函数
        return Promise.reject(error);
    }
);
