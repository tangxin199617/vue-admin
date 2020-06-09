// post传参 -> data
// get传参 -> { params }
import axios from '@/utils/axios'
export default {
    // 登录
    login(data, cb) {
        axios({url:'api/admin/login', method: 'post', data, headers:{ Authorization: 'noToken'}})
        .then(res => {
            cb(res)
        })
    },
    // get传参
    get_manager(params, cb) {
        axios.get('api/get_manager', {params})
        .then(res => {
            cb(res)
        })
    },
    //post传参
    transactionStatistics(data, cb) {
        axios.post('api/admin/transactionStatistics', data)
        .then(res => {
            cb(res)
        })
    },
}