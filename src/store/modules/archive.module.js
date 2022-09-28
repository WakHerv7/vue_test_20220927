export default {
    namespaced: true,
    state: {
        archiveList: {
            archive: [],
            archiveCount: 0,
        },
    },
    mutations: {
        UPDATE_ARCHIVE_LIST: function (state, email) {
            state.archiveList.archive.push(email)
        }
    },
    actions: {
        updateArchiveList: function ({commit}, email) {
            return commit("UPDATE_ARCHIVE_LIST", email);
        }
    }
}