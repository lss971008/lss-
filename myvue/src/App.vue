<template>
    <div id="app">
      <navv></navv>
      <denglu></denglu>
    </div>
</template>  
<script>
    import login from './vue/denglu.vue'
    import nav from './vue/nav.vue'
    export  default{
        components:{
            "denglu":login,
            "navv":nav
        }
    }
</script>
<style>
  #app{
    width:50%;
    background:red;
    margin:0 auto;
  }
</style>