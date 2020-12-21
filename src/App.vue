<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar
  },
  data:function(){
    return{
      usernameExist:false
    }
    
  },
  methods:{
    init:function(){
    },
 }
}
</script>

<style>

</style>