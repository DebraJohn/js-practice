<template>
  <div class="detail" id="detail">
    <Search/>
  </div>
</template>

<script>
import Search from "../Search/Search.vue";

export default {
  name: "Detail",
  components: {
    Search
  }
};
</script>

<style lang="less">
#detail {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>

