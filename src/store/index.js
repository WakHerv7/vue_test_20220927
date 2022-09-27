import {createStore} from 'vuex'
import inboxModule from "@/store/modules/inbox.module";

export default createStore({
    state: {
        inboxState: inboxModule.state,
    },
    mutations: {},
    actions: {},
    modules: {
        inboxModule,
    },
    getters: {
        getInboxState: function (state) {
            return state.inboxState.inboxList;
        },
    }
})
