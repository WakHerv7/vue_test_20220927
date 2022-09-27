<template>
  <section @click="closeModal()" class="modal_container">
      <div class="modal_content">
          <div @click="closeModal()" class="close_modal_btn">Close(Esc)</div>
          <div class="control_buttons_container">
              <button class="markAsReadAll">Mark as read (r)</button>
              <button class="ArchiveAll">Archive (a)</button>
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
  methods: {
    closeModal() {
      this.$emit('close_modal')
    }
  }
}
</script>

<style scoped>

</style>
