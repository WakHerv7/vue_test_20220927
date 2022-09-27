<template>
  <EmailIndex/>
</template>

<script>
import EmailIndex from './components/EmailIndex.vue'

require('@/assets/css/style.css')
require('@/assets/css/checkbox_style.css')

export default {
  name: 'App',
  components: {
    EmailIndex,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
