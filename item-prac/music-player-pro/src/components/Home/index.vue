<template>
  <div class="home" id="home">
    <songList templateTitle = '推荐' apiType="recommend"/>
    <songList templateTitle = '最新' apiType="newSong"/>
    <songList templateTitle = '收藏' apiType="mySong"/>
  </div>
</template>

<script>
import songList from "./songList.vue";

export default {
  components: {
    songList
  }
};
</script>

<style lang="less">
#home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
</style>

