<template>
  <div id="app">
    <m-header></m-header>
    <tabs></tabs>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
  import MHeader from './components/header/header.vue'
  import Tabs from './components/tabs/tabs.vue'
  import Player from './components/player/player.vue'
export default {
  name: 'app',
  components: {
    MHeader,
    Tabs,
    Player
  }
}
</script>

<style>

</style>
