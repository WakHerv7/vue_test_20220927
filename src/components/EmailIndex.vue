<template>
  <section class="page_container">
    <div class="left_sidebar">
        <div class="buttons_container">
            <a href="#" @click="goToPage('Inbox')" class="btn_sidebar">Inbox ({{inboxCount}})</a>
            <a href="#" @click="goToPage('Archive')" class="btn_sidebar">Archive ({{archiveCount}})</a>
        </div>
        <div class="buttons_container">
            <a href="#" class="btn_sidebar">Logout</a>
        </div>
    </div>
    <EmailList 
    :title=listTitle
    :updatedEmailBool = updatedEmailBool
    @get_inbox_count=getInboxCount
    @show_email=showEmail
    @update_email_count=updateEmailCount>
    </EmailList>    
  </section>
  <ShowEmail 
  :title=listTitle
  :oneEmail=oneEmail 
  v-if="showModal"
  @close_modal=closeModal
  @update_page=updateEmailBoolValue />
</template>

<script>
  import EmailList from './EmailList.vue'
  import ShowEmail from './ShowEmail.vue'
  

export default {
  name: 'EmailIndex',
  data () {
    return {
      listTitle: 'Inbox',
      inboxCount: 0,
      archiveCount: 0,
      showModal: false,
      oneEmail: {},
      updatedEmailBool: false
    }
  },
  components: {
    EmailList,
    ShowEmail
  },
  methods: {
    updateEmailBoolValue () {
      this.updatedEmailBool = !this.updatedEmailBool
    },
    goToPage (title) {
        this.listTitle = title
    },
    getInboxCount(value) {
      console.log(value)
      this.inboxCount = value
    },
    showEmail (mail) {
      this.oneEmail = mail
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    updateEmailCount(valueArch, valueInbox) {
      this.archiveCount = valueArch
      this.inboxCount = valueInbox
    }
  }
}
</script>

<style scoped>

</style>
