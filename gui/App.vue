<template>
  <div id="app">
    <Navigation />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navigation from './layout/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
#app{
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  main{
    position: fixed;
    z-index: 20;
    right: 0;
    top: 30px;
    bottom: 20px;
    left: 50px;
    overflow-y: scroll;
    padding: 5px 15px;
  }
}
</style>
