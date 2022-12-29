import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [
        createPersistedState({
            paths: ["userLogined","userEmail"],
            storage:window.sessionStorage
        })
    ],
    state :{
        userLogined : false,
        userEmail : ''
    },
    mutations:{
        userLogined (state){
            state.userLogined = true;
        },
        userSave(state,email){
            state.email = email;
        },
        userLogout(state){
            state.userLogined = false;
            state.userEmail='';
        },
    },
    getters:{
        isUserLogined(state){
            return state.userLogined
        },
        getUserEmail(state){
            return state.userEmail
        }
    }
});
