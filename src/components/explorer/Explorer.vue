<template>
  <div id="explorer">
    <explorer-item>
    </explorer-item>
  </div>
</template>

<script>
import ExplorerItem from "./ExplorerItem.vue";

export default {
  components: {
    ExplorerItem
  },
}
</script>

<style lang="scss" scoped>
#explorer {
  width: 100%;
  height: 100%;
  border: none;
}
</style>