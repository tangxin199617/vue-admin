"use strict";
import axios from "axios";
import qs from 'qs'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router'

axios.defaults.baseURL = ''
axios.defaults.headers['Authorization'] = '';
axios.defaults.headers.post['Content-Type']  = 'application/x-www-form-urlencoded;charset=UTF-8';

let config = {
    baseURL: '//api.crmt.info/',
    timeout: 10000
}

const service = axios.create(config);

service.interceptors.request.use(
    function (config) {
        let { method, headers, params, data } = config
        let { language, adminInfo } = store.state

        if (headers['Authorization'] !== 'noToken') {
            headers['Authorization'] = adminInfo.token ? `bearer ${adminInfo.token}` : '';
        } else {
            delete headers['Authorization']
        }
        switch (method) {
            case 'get':
                // params.lang = language
                break;
            case 'post':
                // data.lang = language
                if (config.headers['Content-Type'] != 'multipart/form-data') {
                    config.data = qs.stringify(data)
                }
                break;
            default:
                break;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    function (response) {
        let {
            status,
            msg
        } = response.data
        switch (status) {
            case 200:
                break;
            case 405:
                Message.closeAll()
                Message.error('登录状态失效')
                router.replace({
                    path: '/login'
                })
                break;
            case 406:
                Message.closeAll()
                Message.error('无操作权限')
                break;
            default:
                if (status !=200 && msg) {
                    Message.closeAll()
                    Message.error(msg)
                }
                break;
        }
        return response;
    },
    function (error) {
        Message.closeAll()
        Message.error('网络请求超时，请刷新页面重试')
        return Promise.reject(error);
    }
)

export default service