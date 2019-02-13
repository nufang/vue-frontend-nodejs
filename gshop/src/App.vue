<template>
  <div id="app">
    <div class="container">
      <router-view/>
      <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  mounted () {
   //this.$store.dispatch('getAddress');
    this.getAddress();
    this.getUserInfo();
  },
  methods:{
    ...mapActions(['getAddress','getUserInfo'])
  },
  name: 'App',
  components: {FooterGuide},

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: left;
}
</style>
