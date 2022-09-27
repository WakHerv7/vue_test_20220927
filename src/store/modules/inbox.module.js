import axios from "axios";

export default {
    namespaced: true,
    state: {
        inboxList: {
            loading: false,
            inbox: [],
            inboxCount: 0,
            errorMessage: null
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
        }
    }
}