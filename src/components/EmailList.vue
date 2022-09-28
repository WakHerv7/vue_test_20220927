<template>
  <div class="right_side_container">
        <h3>{{title}}</h3>
        <h1>Emails selected ({{selectedMailsCount}})</h1>
        <div class="control_buttons_container">
            <label class="check_container">
                <input type="checkbox" v-model="selectAll" @click="selectAllMails(!selectAll, title)">
                <span class="checkmark"></span>
            </label>
            <button class="markAsReadAll" @click="markAsRead()">Mark as read (r)</button>
            <button v-if="title == 'Inbox'" class="ArchiveAll" @click="addtoArchive()">Archive (a)</button>
        </div>

        <div v-if="inboxState.inboxList.loading" class="container">
            <span>LOADING</span>
        </div>
        <div v-if="!inboxState.inboxList.loading && inboxState.inboxList.errorMessage" class="container">
            <span>There is an error !</span>
        </div>
        <ul v-if="!inboxState.inboxList.loading && inboxState.inboxList.inbox.length > 0" class="emails_container">
            <li class="email_item" :class="mail.read ? 'email_disabled': ''"
            v-for="mail in displayedEmails" 
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
            selectAll: false,
            inboxEmails: [],
            archiveEmails: [],
            displayedEmails: []
        }
    },
    props: {
        title: String,
        updatedEmailBool: Boolean
    },

    created: async function () {
        await this.$store.dispatch("inboxModule/getInboxEmails");
        if (!this.inboxState.inboxList.loading) {
            this.inboxState.inboxList.inbox.forEach((item)=> {
                if (item.archived == false) {
                    this.inboxEmails.push(item)
                } else {
                    this.archiveEmails.push(item)
                }
            })
            if (this.title == "Inbox") {
                this.displayedEmails = this.inboxEmails
            } else {
                this.displayedEmails = this.archiveEmails
            }
            this.$emit('update_email_count', this.archiveEmails.length, this.inboxEmails.length)
        }
    },

    computed: {
        ...mapGetters({
            inboxState: "getInboxState"
        }),
    },
    watch: { 
        title: function(newVal) { 
            this.updateDisplayedEmails (newVal)
        },
        updatedEmailBool: function() { 
            this.updateDisplayedEmails ()
            this.$emit('update_email_count', this.archiveEmails.length, this.inboxEmails.length)
        },
      },
    mounted() {
    document.addEventListener("keyup", this.onKeyup);
    },
    beforeUnmount() {
        document.removeEventListener("keyup", this.onKeyup);
    },

    methods: {
        onKeyup(event) {
            if (event.key === "r" || event.key === "R") {
                this.markAsRead();
            }
            if (event.key === "a" || event.key === "A") {
                this.addtoArchive()
            }
        },
        showOneEmail (mail) {
            this.$emit('show_email', mail)
        },
        updateDisplayedEmails (titleValue=this.title) {
            this.inboxEmails = this.inboxState.inboxList.inbox
            this.archiveEmails = this.inboxState.archiveList.archive
            if (titleValue == "Inbox") {
                this.displayedEmails = this.inboxState.inboxList.inbox
            } else {
                this.displayedEmails = this.inboxState.archiveList.archive
            }
            this.selectAll = false
            this.selectAllMails(false)
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
            for (let i = 0; i < this.displayedEmails.length; i++) {
            this.displayedEmails[i].checked = bool                
            }
            if (bool) {
                this.selectedMails = []
                this.selectedMailsCount = 0
                for (let i = 0; i < this.displayedEmails.length; i++) {
                    
                    this.selectedMails.push(this.displayedEmails[i].id)
                    
                }
                this.selectedMailsCount = this.displayedEmails.length               
            } else {
                this.selectedMails = []
                this.selectedMailsCount = 0
            }
            
        },
        markAsRead() {            
            this.selectedMails.forEach((id) => {
                this.$store.dispatch("inboxModule/markEmailAsRead", {id: id, title:this.title});                
                this.updateDisplayedEmails() 
            })
        },
        addtoArchive () {
            this.selectedMails.forEach((id) => {
                this.$store.dispatch("inboxModule/AddToEmailArchives", {id: id, title:this.title});                
                this.updateDisplayedEmails() 
            })
            this.$emit('update_email_count', this.archiveEmails.length, this.inboxEmails.length)
        }
    }
}
</script>

<style scoped>

</style>
