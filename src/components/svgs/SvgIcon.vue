<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width = "width"
    :viewBox = "viewBox"
    :fill = "fill"
  >
    <path :d="path"/>
  </svg>
</template>
<script>
import {getSVGParams} from "svgs/getSVGParams";

export default {
  name: "SvgIcon",
  data() {
    return {
      x: 0,
    }
  },
  props: {
    type: {
      type: String,
      required: true,
      // default: "chevronDown",
    },
    width: {
      type: String,
      required: true,
      default: "25px",
    },
    fill: {
      type: String,
      required: true,
      default: "#eee",
    },
    rotate: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    return getSVGParams(props.type);
  },
}
</script>

<style lang="scss" scoped>

</style>