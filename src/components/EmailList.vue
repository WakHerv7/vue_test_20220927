<template>
  <div class="right_side_container">
        <h3>{{title}}</h3>
        <h1>Emails selected</h1>
        <div class="control_buttons_container">
            <label class="check_container">
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
            </label>
            <button class="markAsReadAll">Mark as read (r)</button>
            <button class="ArchiveAll">Archive (a)</button>
        </div>
        <!-- <ul class="emails_container">
            <li class="email_item">
                <label class="check_container">
                    <input type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                </label>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
            </li>
            <li class="email_item email_disabled">
                <label class="check_container">
                    <input type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                </label>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
            </li>
        </ul> -->
        <ul class="emails_container">
            <li class="email_item email_disabled"
            v-for="mail in allInboxMails" 
            :key="mail.id" 
            >
                <label class="check_container">
                    <input type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                </label>
                <span>{{ mail.title }}</span>
              
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
name: 'EmailList',
props: {
    title: String
},
methods:{
    ...mapActions(['fetchInboxMails']),
},
    created () {
    //     this.fetchInboxMails()
            // return this.$store.getters.allInboxMails
            // this.$store.commit('increment'),
            console.log(this.$store.state.count)
    },
    computed: {
        // ...mapGetters(['allInboxMails'])
        // this.$store.commit('increment'),
        // console.log(this.$store.state.count)
    },
}
</script>

<style scoped>

</style>
