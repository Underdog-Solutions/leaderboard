<template>
  <v-app dark>
    <!-- <v-toolbar fixed :prominent="true" app>
      <v-toolbar-title class="logo" @click="goHome">
        <img src="/static/koa_logo_white.png"></img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <h4 class="daysLeft">{{ daysLeft }} days left!</h4>
    </v-toolbar> -->

    <main class="main-app">
      <v-content class="main-app__content">
        <v-container>
          <v-layout row align-center justify-center>
            <h1 class="knockout red--text text--darken-4" 
              text-xs-center
              @click="go('Rank')"
            >
              <b>TRAIN <span class="knockout--bigger">36</span></b>
            </h1>
            <v-icon color="red darken-4" @click="go('Add')">add</v-icon>
          </v-layout>
        </v-container>
        <router-view></router-view>
      </v-content>
    </main>    
    <!-- <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer> -->
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        fixed: false,
        title: 'KOA Kingdom Challenge - Knockout 36',
        daysLeft: 36
      }
    },

    methods: {
      go (name) {
        this.$router.push({ name })
      },

      goHome () {
        this.$router.push({ name: 'Rank' })
      }
    }
  }

</script>

<style lang="stylus" scoped>
  .main-app
    background-image url('./assets/koa-bk-2.jpg')
    background-size cover
    width 100%
    background-repeat no-repeat
  
  .main-app__content
    background-color rgba(0,0,0,0.7)
    height 100%

  .logo img
    width 50%
    margin-top 5px
  
  .knockout
    font-size 5em
    font-weight 700
    margin-top 0.35em
    text-align center

    &--bigger
      font-size 1.5em
  
  .daysLeft
    margin-top 20px
</style>

