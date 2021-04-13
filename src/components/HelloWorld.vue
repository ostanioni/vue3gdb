<template>
  <h1 
    v-on:click="socket_deactivate"
  >
    {{ SocketState }}
  </h1>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    socket_deactivate() {
      this.$store.dispatch('socket_toggle');
      console.log("HW: ", this.$store.state.socketIsActive);
    },
  },
  computed: {
    SocketState() {
      return this.$store.state.socketIsActive
    } 
  }
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 2.5rem;
  &:hover {
    cursor: pointer;
  }
}
</style>
