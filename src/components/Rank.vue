<template>
  <v-container fluid>
    <div class="items">
      <div class="item"
        v-for="(item, index) in list" :key="item['.key']"
        >
        <div class="need-row mb-0">
          <v-menu class="mt-0">
            <div class="need-row ml-3" slot="activator">
              <h5 class="name mt-0 bold">
                {{ item.firstName | capitalize }} {{ item.lastName.charAt(0) | capitalize }}.
              </h5>
            </div>                             
            <!-- Increment list -->
            <v-list class="mt-4">
              <v-list-tile @click="modifyClass(item, 'add')">
                <v-list-tile-title>Add Class</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="modifyClass(item, 'minus')">
                <v-list-tile-title>Remove Class</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-progress-linear
            height="10"
            :value="item.classCount * 2.78"
            :color="progressColor(item.classCount)"
            background-color="grey darken-4"
            class="progressBar"          
          >
          </v-progress-linear>

          <div class="mt-0 need-row classCount ml-5">
            <h4 class="bold">{{ item.classCount }}</h4> 
            <h5 class="mt-1 ml-1"> / 36</h5>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import firebase from '@/firebase'
const db = firebase.database()

export default {
  name: 'Rank',

  data () {
    return {
      value: 36,
      showMenu: false,
      options: [
        { title: 'Add Class' },
        { title: 'Remove Class' }
      ]
    }
  },

  firebase: {
    pplRef: db.ref('ppl')
  },

  computed: {
    list: function () {
      const copy = this.pplRef
        // .filter((i) => i.paid === true)
      return copy.sort((a, b) => b.classCount - a.classCount)
    }
  },

  methods: {
    modifyClass (ppl, action) {
      const modClass = action === 'add' ? ppl.classCount + 1 : ppl.classCount - 1
      this.$firebaseRefs.pplRef
        .child(ppl['.key'])
        .child('classCount')
        .set(modClass)
    },

    progressColor: function (val) {
      if (val === 0) {
        return 'amber'
      } else if (val <= 10) {
        return 'purple darken-1'
      } else if (val <= 20) {
        return 'blue darken-1'
      } else if (val <= 30) {
        return 'teal lighten-1'
      } else if (val >= 30) {
        return 'green'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  h1, h2, h3, h4, h5, h5
    color white
    margin 0

  .need-row
    display flex
    flex-direction row
  
  .items
    display flex
    flex-wrap wrap
    justify-content space-around

  .items .item
    flex 0 0 45%
    box-sizing border-box
    padding 5px 0
   
  .name
    text-align left
    width 150px
  
  .classCount
    width 150px
    justify-content flex-end

  .progressBar
  
  .bold
    font-weight bold

  @media screen and (max-width: 560px)
    .name
      width 75px

</style>
