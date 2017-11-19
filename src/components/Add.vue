<template>
  <v-container>
    <v-snackbar color="teal darken-2"
      v-model="success"
      top
      right
      :timeout="2000"
    >
      Participant added!      
      <v-icon>check_circle</v-icon>
    </v-snackbar>

    <v-snackbar
      color="error"
      top
      right
      :timeout="2000"
      v-model="error"
    >
      Error adding. Try again. If error continues, text BJ at 808.343.7636
      <v-icon>warning</v-icon>
    </v-snackbar>

    <v-snackbar
      color="warning"
      top right
      :timeout="3000"
      v-model="required"
    >
      Please fill out both fields.
      <v-icon>warning</v-icon>
    </v-snackbar>

    <!-- <v-alert
      color="warning"
      icon="warning"
      dismissible
      v-model="error"
    >
      {{ this.newPerson.firstName }} {{ this.newPerson.lastName }} already in system.
    </v-alert> -->

    <v-form>
      <v-text-field
        label="First Name"
        v-model="newPerson.firstName"
      >
      </v-text-field>
      
      <v-text-field
        label="Last Name"
        v-model="newPerson.lastName"
      >
      </v-text-field>

      <v-btn block large color="teal" @click="submit" class="ml-0 mb-5">
        Add Participant
      </v-btn>
    </v-form>

    <h4 class="text-xs-center red--text bold">PARTICIPANTS</h4>

    <div class="items">
      <div class="item" v-for="ppl in pplRef" :key="ppl['.key']">
        <div class="need-row">
          <v-btn flat icon color="red" @click.prevent="remove(ppl)">
            <v-icon>close</v-icon>
          </v-btn>
          <h5 class="mt-2 browser-list--unstyled">
            {{ ppl.firstName | capitalize }} {{ ppl.lastName | capitalize }}
          </h5>
        </div>
      </div>
    </div>

  </v-container>
</template>

<script>
import firebase from '@/firebase'
const db = firebase.database()

export default {
  name: 'add',

  data () {
    return {
      newPerson: {
        firstName: '',
        lastName: ''
      },
      success: false,
      error: false,
      duplicate: false,
      required: false
    }
  },

  firebase: {
    pplRef: db.ref('ppl').orderByChild('firstName')
  },

  methods: {
    submit () {
      if (!this.newPerson.firstName || !this.newPerson.lastName) {
        this.required = true
        return
      }

      this.$firebaseRefs.pplRef.push({
        firstName: this.newPerson.firstName.toLowerCase(),
        lastName: this.newPerson.lastName.toLowerCase(),
        classCount: 0,
        startDate: new Date()
      }).then((result) => {
        this.success = true
        this.newPerson.firstName = ''
        this.newPerson.lastName = ''

        setTimeout(() => {
          this.success = false
        }, 3000)
      }).catch(() => {
        this.error = true
      })
    },

    remove (ppl) {
      if (confirm('Click "OK" to confirm removal')) {
        this.$firebaseRefs.pplRef.child(ppl['.key']).remove()
      } else {
        console.log('test')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .bold
    font-weight bold
  
  .need-row
    display flex
    flex-direction row

  .items
    display flex
    flex-wrap wrap
  
  .item
    flex 0 0 25%
    box-sizing border-box
    
</style>


