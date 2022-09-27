<template>
  <section class="page_container">
    <div class="left_sidebar">
        <div class="buttons_container">
            <a href="#" @click="goToPage('Inbox')" class="btn_sidebar">Inbox ({{inboxCount}})</a>
            <a href="#" @click="goToPage('Archive')" class="btn_sidebar">Archive</a>
        </div>
        <div class="buttons_container">
            <a href="#" class="btn_sidebar">Logout</a>
        </div>
    </div>
    <EmailList :title=listTitle
    @get_inbox_count=getInboxCount
    @show_email=showEmail>
    </EmailList>    
  </section>
  <ShowEmail :oneEmail=oneEmail 
  v-if="showModal"
  @close_modal=closeModal />
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
      showModal: false,
      oneEmail: {}
    }
  },
  components: {
    EmailList,
    ShowEmail
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>

</style>
