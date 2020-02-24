import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: []
    },
    getters:{
        getUsers: state => {
            return state.users
        }
    },
    mutations: {
        setUsers(state, users) {
            // example of modifying before storing
            state.users = users
        }
    },
    actions:{
        showUsers(store) {
            const path = 'http://localhost:8888/api/user/';
            axios.get(path)
                .then((res) => {
                    console.log(res.data)
                    store.commit('setUsers', res.data);
                    return store.state.users;
                });
        },
    }
})