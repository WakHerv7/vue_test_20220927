import { createStore } from 'vuex';
import { Vue } from "vue";
// import inbox from './modules/inbox';
import axios from 'axios';

Vue.use(vuex);

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
        async fetchInboxMails({commit}) {
            const response =  await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(response.data);
            commit('setInboxMails', response.data);
        },
    },
    mutations: {
      increment (state) {
        state.count++
      },
      setInboxMails(state, mails) {
        state.inbox = mails
      },
    }
  })

  export default store