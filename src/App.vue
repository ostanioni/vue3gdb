<template>
<div>
  <hello-world msg="Hello, World!"></hello-world>
  <web-socket></web-socket>
</div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import WebSocket from './components/WebSocket.vue'

const components = {
  HelloWorld,
  WebSocket
}
export default {
  components,
}
</script>

<style lang="scss" src="./styles/global.scss">

</style>
