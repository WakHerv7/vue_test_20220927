import axios from "axios";

// =================== START HELPER FUNCTIONS ===========
let set_read_value = (email, payload) => {
    if (email.id === payload.id) {
        return {
            ...email,
            read: !email.read
        }
    } else return email;
}
let set_archive_value = (email, payload, state) => {
    if (email.id === payload.id) {
        state.archiveList.archive.push(email)
        state.archiveList.archiveCount++
        return {
            ...email,
            archived: !email.archived
        }
    } else return email;
}
// =================== END HELPER FUNCTIONS ===========

export default {
    namespaced: true,
    state: {
        inboxList: {
            loading: false,
            inbox: [],
            inboxCount: 0,            
            errorMessage: null
        },
        archiveList: {
            archive: [],
            archiveCount: 0,
        }
    },
    mutations: {
        GET_INBOX_REQUEST: function (state) {
            state.inboxList.loading = true;
        },
        GET_INBOX_SUCCESS: function (state, payload) {
            state.inboxList.loading = false;
            state.inboxList.inbox = payload.inbox;
            state.inboxList.inboxCount = payload.inboxCount;
        },
        GET_INBOX_FAILED: function (state, payload) {
            state.inboxList.loading = false;
            state.inboxList.errorMessage = payload.error
        },
        MARK_AS_READ: function (state, payload) {                    
            if (payload.title == "Inbox") {
                state.inboxList.inbox = state.inboxList.inbox.map(email => {
                    return set_read_value(email, payload)
                });
            } else {
                state.archiveList.archive = state.archiveList.archive.map(email => {
                    return set_read_value(email, payload)
                });
            }            
        },
        ARCHIVE_EMAIL: function (state, payload) {
            if (payload.title == "Inbox") {
                state.inboxList.inbox = state.inboxList.inbox.map(email => {
                    return set_archive_value(email, payload, state)
                });
            } else {
                state.archiveList.archive = state.archiveList.archive.map(email => {
                    return set_archive_value(email, payload, state)
                });
            }
            state.inboxList.inbox = state.inboxList.inbox.filter(email => email.id !== payload.id)
            state.inboxList.inboxCount--
            
        }
    },
    actions: {
        getInboxEmails: async function ({commit}) {
            try {
                commit("GET_INBOX_REQUEST");
                let dataURL = `https://jsonplaceholder.typicode.com/posts`;
                let response = await axios.get(dataURL);
                for (let i = 0; i < response.data.length; i++) {
                    response.data[i]["checked"] = false;
                    response.data[i]["read"] = false;
                    response.data[i]["archived"] = false;
                  }
                commit("GET_INBOX_SUCCESS", {inbox: response.data, inboxCount: response.data.length});
            } catch (error) {
                commit("GET_INBOX_FAILED", {error: error});
            }
        },
        markEmailAsRead: function ({commit}, payload) {
            return commit("MARK_AS_READ", payload);
        },
        AddToEmailArchives: function ({commit}, payload) {
            return commit("ARCHIVE_EMAIL", payload);
        }
    }
}