import {createStore} from 'vuex'
import inboxModule from "@/store/modules/inbox.module";
import archiveModule from "@/store/modules/archive.module";

export default createStore({
    state: {
        inboxState: inboxModule.state,
        archiveState: archiveModule.state,
    },
    mutations: {},
    actions: {},
    modules: {
        inboxModule,
        archiveModule,
    },
    getters: {
        getInboxState: function (state) {
            return state.inboxState.inboxList;
        },
        getArchiveState: function (state) {
            return state.archiveState.archiveList;
        },
    }
})
