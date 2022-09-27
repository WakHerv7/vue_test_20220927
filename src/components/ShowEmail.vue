<template>
  <section  @click="closeModal()" class="modal_container">
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
      oneEmail: Object
  },
  mounted() {
    document.addEventListener("keyup", this.onKeyup);
  },
  beforeUnmount() {
    document.removeEventListener("keyup", this.onKeyup);
  },
  methods: {
    onKeyup(event) {
        if (event.key === "Esc") {
            this.$emit('close_modal')
        }
    },
    closeModal() {
      this.$emit('close_modal')
    },
    markAsRead() {
      //
    },
    addtoArchive () {
      //
    }
  }
}
</script>

<style scoped>

</style>
