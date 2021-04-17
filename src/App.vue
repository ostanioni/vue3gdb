<template>
<div>
  <main-layout></main-layout>
  <!--
  <hello-world msg="Hello, World!"></hello-world>
  <web-socket></web-socket>
  -->
</div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
// import WebSocket from './components/WebSocket.vue'
import MainLayout from 'layouts/MainLayout.vue'

const components = {
  // HelloWorld,
  // WebSocket,
  MainLayout,
}
export default {
  components,
}
</script>

<style lang="scss" src="./styles/global.scss">

</style>
