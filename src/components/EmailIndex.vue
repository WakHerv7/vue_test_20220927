<template>
  <section class="page_container">
    <div class="left_sidebar">
        <div class="buttons_container">
            <a href="#" @click="goToPage('Inbox')" class="btn_sidebar">Inbox</a>
            <a href="#" @click="goToPage('Archive')" class="btn_sidebar">Archive</a>
        </div>
        <div class="buttons_container">
            <a href="#" class="btn_sidebar">Logout</a>
        </div>
    </div>
    <EmailList :title=listTitle></EmailList>    
  </section>
  <!-- <section class="modal_container">
      <div class="modal_content">
          <div class="close_modal_btn">Close(Esc)</div>
          <div class="control_buttons_container">
              <button class="markAsReadAll">Mark as read (r)</button>
              <button class="ArchiveAll">Archive (a)</button>
          </div>
          <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</strong>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, vitae mollitia! Labore quod sit libero facere vel amet veritatis tempora est impedit non, sed dolorem quidem itaque, rem, commodi quasi.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, vitae mollitia! Labore quod sit libero facere vel amet veritatis tempora est impedit non, sed dolorem quidem itaque, rem, commodi quasi.
          </p>
      </div>
  </section> -->
</template>

<script>
  import EmailList from './EmailList.vue'

export default {
  name: 'EmailIndex',
  data () {
    return {
      listTitle: 'Inbox'
    }
  },
  components: {
    EmailList,
  },
  methods: {
    goToPage (title) {
        this.listTitle = title
    }
  }
}
</script>

<style scoped>

</style>
