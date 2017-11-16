<template>
  <v-container fluid text-xs-center>
    <v-layout row wrap justify-space-between>
      <v-flex
        v-for="(item, index) in list" :key="index"
        xl2 lg3 md3 sm5 xs12
      >
        <v-progress-circular
          :size="200"
          :width="17"
          :rotate="-90"
          :value="item.classesAttended * 2.78"
          :color="progressColor(item.classesAttended)"
          class="my-3"
        >
          <h2 class="addClass"
            @click="addClass(index)"
          >
            {{ item.classesAttended }}
          </h2>
        </v-progress-circular>
        <h4 class="mb-5">{{ item.firstName }} {{ item.lastName }}</h4>
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
        classesAttended: 45,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 5,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 11,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 20,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 30,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 20,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 30,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 20,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 0,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 20,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 30,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 45,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 5,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 11,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 20,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 30,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 20,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 30,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 10,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 36,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 9,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 9,
        firstName: 'Jill',
        lastName: 'Smith',
        paid: true
      }, {
        classesAttended: 30,
        firstName: 'Jill',
        lastName: 'Smith'
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
    addClass (index) {
      console.log('add', index)
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
      } else if (val >= 36) {
        return 'green'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .addClass
    margin-bottom 0
    &:hover
      cursor crosshair
</style>
