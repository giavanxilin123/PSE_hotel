import Vue from 'vue';
import Vuex from 'vuex';
import { BASE_URL, actions } from './action';
import { mutations } from './mutation';
Vue.use(Vuex);

const user = JSON.parse(localStorage.getItem('user'));
const searchRoom = JSON.parse(localStorage.getItem('searchRoom'));

export default new Vuex.Store({
  state: {
    BASE_URL,
    user: user || {}, 
    searchRoom: searchRoom || {}
  },
  mutations,
  actions,
});
