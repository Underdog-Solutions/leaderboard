<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap justify-center>
      <v-flex
        v-for="(item, index) in list" :key="index"
        xl1 lg2 md2 sm4 xs6
      >

        <v-progress-circular
          v-bind:size="150"
          v-bind:width="15"
          v-bind:rotate="-90"
          v-bind:value="item.classesAttended * 2.78"
          color="teal"
        >
          <h4 class="teal--text text--lighten-2 text-xs-center addClass"
            @click="addClass"
          >
            {{ item.classesAttended }}
          </h4>
          {{ item.firstName }} {{ item.lastName }}
        </v-progress-circular>        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Rank',

  data () {
    return {
      value: 36,
      rawList: [{
        classesAttended: 36,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 5,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 8,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 5,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 10,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }]
    }
  },

  computed: {
    list: function () {
      return this.rawList
        .filter((i) => i.paid === true)
        .sort((a, b) => b.classesAttended - a.classesAttended)
    }
  },

  methods: {
    addClass () {
      console.log('add')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .addClass
    &:hover
      cursor crosshair
</style>
