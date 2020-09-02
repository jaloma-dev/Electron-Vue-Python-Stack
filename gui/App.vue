<template>
  <div id="app">
    <Titlebar />
    <Navigation />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navigation from './layout/Navigation.vue';
import Titlebar from './layout/Titlebar.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Titlebar
  }
}
</script>

<style lang="scss">
@import './assets/styles/_vars.scss';
#app{
  background-color: map-get($colors, "shade-dark");
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  main{
    background-color: map-get($colors, "shade-lighter");
    position: fixed;
    right: 0;
    top: 40px;
    bottom: 0;
    left: 50px;
    overflow-y: auto;
    padding: 5px 15px;
  }
}
</style>
