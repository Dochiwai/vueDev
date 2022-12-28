import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [
        createPersistedState({
            paths: ["userLogined"],
            storage:window.sessionStorage
        })
    ],
    state :{
        userLogined : false
    },
    mutations:{
        userLogined (state){
            state.userLogined = true;
        },
    },
    getters:{
        isUserLogined(state){
            console.log(state + " !")
            return state.userLogined
        }
    }
});
