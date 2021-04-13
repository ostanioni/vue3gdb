<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 1.5rem;
}
</style>
