<template>
  <div class="template" :class="apiType">
    <div class="title">{{ templateTitle }}</div>
    <div class="songList">
      <div class="songListItem" v-for="(item,index) in songListData" :key="index">
        <router-link
          :to="{path: '/detail'}"
        >{{index+1}}. {{item.data.songname}} -- {{item.data.singer[0].name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";

export default {
  data() {
    return {
      songListData: []
    };
  },
  name: "songList",
  props: {
    templateTitle: String,
    apiType: String
  },
  methods: {
    // 获取数据
    getList(data) {
      const recommendListData = data.songlist.slice(0, 15);
      for (let i = 0; i < recommendListData.length; i++) {
        this.songListData.push(recommendListData[i]);
      }
    },
    getApiData(apiType, successFn, errorFn) {
      const url = this.getApiType(apiType);
      // axios
      //   .get(
      //     "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8%C2%ACice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923"
      //   )
      //   .then(successFn);
      url &&
        $.ajax({
          url: url,
          type: "get",
          dataType: "jsonp",
          jsonp: "jsonpCallback",
          scriptCharset: "GBK", //解决中文乱码
          success: successFn && successFn,
          error: errorFn && errorFn
        });
    },
    getApiType(apiType) {
      switch (apiType) {
        case "recommend":
          return "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=36&_=1520777874472";
        case "newSong":
          return "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923";
        default:
          break;
      }
    }
  },
  created: function() {
    this.getApiData(this.apiType, this.getList);
  },
  watch: {
    $route(to, from) {
      console.log(to)
      this.$router.push({ path: to.path });
    }
  }
};
</script>


<style lang="less">
.template {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  padding: 30px;
  overflow: hidden;
  .title {
    font-size: 30px;
    text-align: center;
    margin: 20px auto;
  }
  .songList {
    width: 100%;
    height: 90%;
    .songListItem {
      margin: 10px 0;
    }
  }
}
.recommend {
  background-color: #5b79ce;
  color: #eaeaea;
}
.newSong {
  background-color: #96abe6;
  color: #fff !important;
}
.mySong {
  background-color: #e6e6e6;
  color: #444 !important;
}
</style>

