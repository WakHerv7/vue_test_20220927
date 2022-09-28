<template>
  <section   class="modal_container">
      <div @click="closeModal()" class="modal_bg"></div>
      <div class="modal_content">
          <div @click="closeModal()" class="close_modal_btn">Close(Esc)</div>
          <div class="control_buttons_container">
              <button @click="markAsRead()" class="markAsReadAll">Mark as read (r)</button>
              <button @click="addtoArchive()" class="ArchiveAll">Archive (a)</button>
          </div>
          <strong>{{oneEmail.title}}</strong>
          <p>
            {{oneEmail.body}}
          </p>
      </div>
  </section>
</template>

<script>
export default {
  name: 'ShowEmail',
  props: {
      oneEmail: Object,
      title: String
  },
  mounted() {
    document.addEventListener("keyup", this.onKeyup);
  },
  beforeUnmount() {
    document.removeEventListener("keyup", this.onKeyup);
  },
  methods: {
    onKeyup(event) {
        if (event.key === "Escape") {
            this.$emit('close_modal')
        }
        if (event.key === "r" || event.key === "R") {
                this.markAsRead();
        }
        if (event.key === "a" || event.key === "A") {
            this.addtoArchive()
        }
    },
    closeModal() {
      this.$emit('close_modal')
    },
    markAsRead() {
      this.$store.dispatch("inboxModule/markEmailAsRead", {id: this.oneEmail.id, title:this.title});
      this.$emit('update_page')
    },
    addtoArchive () {
      this.$store.dispatch("inboxModule/AddToEmailArchives", {id: this.oneEmail.id, title:this.title});
      this.$emit('update_page')
    }
  }
}
</script>

<style scoped>

</style>
