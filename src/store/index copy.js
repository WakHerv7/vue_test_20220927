// import Vuex from 'vuex';
import { createStore } from 'vuex';
// import { Vue } from "vue";
// import inbox from './modules/inbox';
import axios from 'axios';

// Vue.use(Vuex);

// action types
export const INBOX = "fetchInboxMails";
///mutations
export const SET_INBOX = "setInboxMails";

let store = createStore({
    // modules: {
    //     inbox
    // }
    state () {
      return {
        inbox:[]
      }
    },
    getters: {
        allInboxMails(state) {
            return state.inbox
        }
    },
    actions : {
        // async fetchInboxMails({commit}) {
        [INBOX](context){
            return axios.get('https://jsonplaceholder.typicode.com/posts').then(({ data }) => {
            console.log(data);
            context.commit(SET_INBOX, data);
            })
        },
    },
    mutations: {
      setInboxMails(state, mails) {
        state.inbox = mails
      },
    }
  })

  export default store