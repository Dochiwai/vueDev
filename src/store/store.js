import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
        if(localStorage.length > 0){
            for(var i = 0; i < localStorage.length; i++){
            if(localStorage.key(i) !== 'loglevel:webpack-dev-server' && localStorage.key(i) !== "")
               arr.push(localStorage.key(i));
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state :{
        todoItmes : storage.fetch()
    },
    mutations:{
        addOneItem (state,todoItem){
            state.todoItmes.push(todoItem);
            localStorage.setItem(todoItem,todoItem);
        },
        removeAll(state){
            localStorage.clear();
            state.todoItmes = [];
        },
        removeOneItem (state,obj){
            localStorage.removeItem(obj.todoItem);
            state.todoItmes.splice(obj.index,1);
        },
    }
});