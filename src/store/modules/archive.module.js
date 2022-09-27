export default {
    namespaced: true,
    state: {
        archiveList: {
            archive: [],
            archiveCount: 0,
        },
    },
    mutations: {
        UPDATE_ARCHIVE_LIST: function (state, payload) {
            state.archiveList.archive.push(payload)
        }
    },
    actions: {
        updateArchiveList: function ({commit}, payload) {
            return commit("UPDATE_ARCHIVE_LIST", payload);
        }
    }
}