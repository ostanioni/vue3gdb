<template>
  <div id="explorer-item">
    <div id="explorer-item-header">
      dsafsdfsdf
    </div>
    <div id="explorer-item-header">
      <SvgIcon 
        type = "bug"
        fill = "green"
        width = "3rem"
      />
        sdfdsfdsf      
    </div>
  </div>
</template>
<script>
import SvgIcon from "svgs/SvgIcon.vue";

export default {
  name: "ExplorerItem",
  components: {
    SvgIcon,
  },
}
</script>
<style lang="scss" scoped>
#explorer-item {
  width: 100%;
  height: 100%;
  border: none;
}
</style>