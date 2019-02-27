<template>
  <div class="Search" id="Search">
    <v-icon type="search" class="searchIcon"></v-icon>
    <input
      @keyup.enter="getSearchResult"
      type="text"
      class="searchInput"
      placeholder="搜索你喜欢的音乐"
      id="searchInput"
    >
  </div>
</template>

<script>
import $ from "jquery";

import Vue from "vue";
import vueBeauty from "vue-beauty";
import "vue-beauty/package/style/vue-beauty.min.css";
Vue.use(vueBeauty);

export default {
  name: "Search",
  methods: {
    getSearchVal(e) {
      return e.target.value;
    },
    getSearchResult(e) {
      const val = this.getSearchVal(e);
    }
  }
};
</script>

<style lang="less">
#Search {
  position: fixed;
  top: 0;
  left: 0;
  width: 35px;
  height: 35px;
  position: absolute;
  background-color: #fff;
  transition: 0.2s linear;
  overflow: hidden;
  display: flex;
  align-content: center;
  border-radius: 0 5px 5px 0;
  &:hover {
    width: 200px;
    transition: 0.2s linear;
    box-shadow: 1px 1px 4px #bbb;
  }
  .searchIcon {
    font-size: 18px;
    font-weight: bold;
    line-height: 35px;
    margin-left: 8px;
  }
  .searchInput {
    margin: 3.5px 11px;
  }
}
</style>

