<template>
  <div id="app1">
    <div id="main-menu">
      main menu
    </div>
    <div id="panel">panel</div>
    <div id="footer">footer</div>
    <div id="content">
      <Explorer/>
    </div>
  </div> 
</template>
<script>
import Explorer from "explorer/Explorer.vue";

export default {
  name: "MainLayout",
  components: {
    Explorer,
  },
  data(){
    return {
      n: 1,
    }
  },
};
</script>
<style lang="scss" scoped>
#app1 {
  display: grid;
  grid-auto-columns: 3rem 1fr;
  grid-template-rows: 1.5rem calc(100vh - 3rem) 1.5rem;
  border: 1px solid red;
}
#main-menu {
  grid-row: 1/2;
  grid-column: 1/3;
  border: 1px solid red;
}
#panel {
  grid-row: 2/3;
  grid-column: 1/2;
  border: 1px solid red;
}
#footer {
  grid-row: 3/4;
  grid-column: 1/3;
  border: 1px solid red;
}
#content {
  grid-row: 2/3;
  grid-column: 2/3;
  border: 1px solid red;
}
</style>