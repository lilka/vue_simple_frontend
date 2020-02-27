import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { getField, updateField } from 'vuex-map-fields';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
        updatedUser:{
            id: '',
            name: '',
            surname: '',
            age: '',

        },
    },
    getters:{
        getUsers: state => {
            return state.users
        },
        getUser: state => props => {
            const id = props.id
            const user = state.users.find(u => u.id == id) || {}
            state.updatedUser.id = user.id
            state.updatedUser.name = user.name
            state.updatedUser.surname = user.surname
            state.updatedUser.age = user.age
            return user
        },
        getField,
    },
    mutations: {
        setUsers(state, users) {
            state.users = users
        },


        updateField,
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

        editUser(){
            this.state.updatedUser.age  = Number(this.state.updatedUser.age)
            const path = `http://localhost:8888/api/user/${this.state.updatedUser.id}`;
            axios.put(path, this.state.updatedUser).then(r => console.log(r))
        },

    }
})