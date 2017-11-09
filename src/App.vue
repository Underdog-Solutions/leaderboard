<template>
  <v-app :dark="true">
    <v-toolbar fixed :prominent="true" app>
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn> -->
      <v-toolbar-title class="logo">
        <img src="/static/koa_logo_white.png"></img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-content>
        <v-container text-xs-center red--text text--darken-4>
          <h2>Knockout 36 Challenge</h2>
        </v-container>
        <Rank></Rank>
        <v-layout row wrap justify-center>
            36 days left!
          </v-layout>
      </v-content>
    </main>    
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Rank from '@/components/Rank'
  
  export default {
    components: { Rank },

    data () {
      return {
        fixed: false,
        title: 'KOA Kingdom Challenge - Knockout 36'
      }
    }
  }

</script>

<style lang="stylus" scoped>
  .logo img
    width 50%
    margin-top 5px
</style>

