<template>
  <v-app>
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
      <h4 class="daysLeft">{{ daysLeft }} days left!</h4>
    </v-toolbar>
    <main>
      <v-content>
        <v-container>
          <h1 class="knockout red--text text--darken-4" 
            text-xs-center
          >
            <b>KNOCKOUT <span class="knockout--bigger">36</span> CHALLENGE</b>
          </h1>
        </v-container>
        <router-view></router-view>
      </v-content>
    </main>    
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
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
    }
  }

</script>

<style lang="stylus" scoped>
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

