<template>
  <div class="right_side_container">
        <h3>{{title}}</h3>
        <h1>Emails selected ({{selectedMailsCount}})</h1>
        <div class="control_buttons_container">
            <label class="check_container">
                <input type="checkbox" v-model="selectAll" @click="selectAllMails(!selectAll)">
                <span class="checkmark"></span>
            </label>
            <button class="markAsReadAll" @click="markAsRead()">Mark as read (r)</button>
            <button class="ArchiveAll">Archive (a)</button>
        </div>

        <div v-if="inboxState.loading" class="container">
            <span>LOADING</span>
        </div>
        <div v-if="!inboxState.loading && inboxState.errorMessage" class="container">
            <span>There is an error !</span>
        </div>
        <ul v-if="!inboxState.loading && inboxState.inbox.length > 0" class="emails_container">
            <li class="email_item" :class="mail.read ? 'email_disabled': ''"
            v-for="mail in inboxState.inbox" 
            :key="mail.id" 
            >
                <label class="check_container">
                    <input type="checkbox" v-model="mail.checked" @click="updateSelectCount(mail.id, mail.checked)">
                    <span class="checkmark"></span>
                </label>
                <span @click="showOneEmail(mail)">{{ mail.title }}</span>
              
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'EmailList',
    data () {
        return {
            readCount: 0,
            selectedMails: [],
            selectedMailsCount: 0,
            selectAll: false
        }
    },
    props: {
        title: String
    },

    created: async function () {
        await this.$store.dispatch("inboxModule/getInboxEmails");
        if (!this.inboxState.loading) {
            this.$emit('get_inbox_count', this.inboxState.inbox.length)
        }
    },

    computed: {
        ...mapGetters({
            inboxState: "getInboxState"
        })
    },

    methods: {
        showOneEmail (mail) {
            this.$emit('show_email', mail)
        },
        updateSelectCount (id, bool) {
            if (!bool) {                
                this.selectedMails.push(id)
                this.selectedMailsCount++
            } else {
                this.selectedMails = this.selectedMails.filter((item_id) => item_id != id)
                this.selectedMailsCount--
                
            }
        },
        selectAllMails(bool) {
            for (let i = 0; i < this.inboxState.inbox.length; i++) {
                this.inboxState.inbox[i].checked = bool                
            }
            if (bool) {
                this.selectedMails = []
                for (let i = 0; i < this.inboxState.inbox.length; i++) {
                    
                    this.selectedMails.push(this.inboxState.inbox[i].id)
                }                
            } else {
                this.selectedMails = []
            }
        },
        markAsRead() {
            for (let i = 0; i < this.inboxState.inbox.length; i++) {
                this.inboxState.inbox[i].read = false
            } 
            this.selectedMails.forEach((id) => {
                for (let i = 0; i < this.inboxState.inbox.length; i++) {
                    if(this.inboxState.inbox[i].id == id) {
                        this.inboxState.inbox[i].read = true
                    }
                } 
            })
        }
    }
}
</script>

<style scoped>

</style>
