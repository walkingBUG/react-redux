/**
 * 时间：2019-04-02 13:41:17
 * 创建人：walkingBUG
 */ 
import axios from 'axios'
import { Toast } from 'antd-mobile'

axios.interceptors.request.use(function(config) {
    Toast.loading('加载中', 0)
    return config
})

axios.interceptors.response.use(function(config) {
    Toast.hide()
    return config
})