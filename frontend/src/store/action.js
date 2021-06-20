import axios from 'axios';

export const BASE_URL = "http://localhost:3000";

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    withCredentials: false
});


function getDefaultHeader() {
    return {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('accessToken')),
    }
}

client.interceptors.request.use((config) => {
    Object.assign(config.headers, getDefaultHeader());
    return config;
});
  
export const actions = {
    async register(ctx, payload) {
        await axios.post(`${BASE_URL}/api/register`, payload);
    },

    logIn(ctx, payload){
        return new Promise((resolve, reject) => {
            client
            .post(`${BASE_URL}/api/login`, payload)
            .then((res)=>{
                ctx.commit('LOGIN', res.data.user);
                localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
                localStorage.setItem('user', JSON.stringify(res.data.user));
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data)
            })
        })
    },

    signOut(ctx){
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        ctx.commit('SIGN_OUT');
    },

    searchRoom(ctx, payload){
        return new Promise((resolve, reject) => {
            client
            .get(`${BASE_URL}/api/search`, payload)
            .then((res)=>{
                ctx.commit('SEARCH_ROOM',{roomType: res.data, dateForm: payload});
                localStorage.setItem('searchRoom', JSON.stringify({roomType: res.data, dateForm: payload}))
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data)
            })
        })
    },

    booking(ctx, payload){
        return new Promise((resolve, reject) => {
            client
            .put(`${BASE_URL}/api/booking/${payload.id}`)
            .then((res)=>{
                payload.ls.roomType[payload.id - 1]['stock'] = payload.ls.roomType[payload.id - 1]['stock'] - 1;
                ctx.commit('SEARCH_ROOM',{roomType: payload.ls.roomType, dateForm: payload.ls.dateForm});
                localStorage.setItem('searchRoom', JSON.stringify({roomType: payload.ls.roomType, dateForm: payload.ls.dateForm}))
                localStorage.setItem('bookingID', JSON.stringify(payload.id))
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data)
            })
        })
    },

    checkOut(ctx, payload){
        return new Promise((resolve, reject) => {
            client
            .post(`https://api.telegram.org/bot1890824080:AAEEeDRORlzEzyQaSYIUnGXjHVqh2JhlfU4/sendMessage?chat_id=-543331111&text=
                                                        Tên khách hàng: ${payload.nickname}            
                                                        Email: ${payload.email}
                                                        Số điện thoaị: 0935562526
                                                        Loại phòng: ${payload.roomType}
                                                        Ngày CheckIn: ${payload.checkIn}
                                                        Ngày CheckOut: ${payload.checkOut}
                                                        Tổng giá tiền: ${payload.total}$`
                        )
            .then((res)=>{
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data)
            })
        })
    }
}


