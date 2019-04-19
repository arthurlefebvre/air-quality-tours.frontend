<template>
  <div id="app">
    <Navbar/>
    <br>
    <router-view/>
    
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

<style>
  h1 {
    color: #fe6221;
  }

  
</style>


