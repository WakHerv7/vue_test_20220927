import axios from 'axios';

const state = {
    inbox: [
        {
            id: 1,
            title: 'Todo One'
        },
        {
            id: 2,
            title: 'Todo Two'
        }
    ]
};

const getters = {
    allInboxMails: (state) => state.inbox
};

const actions = {
    async fetchInboxMails({commit}) {
        const response =  await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data);
        commit('setInboxMails', response.data);
    },
    
};
const mutations = {
    setInboxMails: (state, mails) => (state.inbox = mails),
};

export default {
    state,
    getters,
    actions,
    mutations
}