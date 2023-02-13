<template>
  <Header></Header>
  <lay-notice-bar
    leftIcon="layui-icon-mute"
    rightIcon="layui-icon-close"
    text="非物质文化遗产是一个国家和民族历史文化成就的重要标志，是优秀传统文化的重要组成部分。"
    mode="closeable"
    background="rgb(132 134 133 / 30%)"
    class="tz"
  ></lay-notice-bar>

  <!-- 主题内容 -->
  <div class="main">
    <div>
      <!-- 轮播图 -->
      <el-carousel :interval="4000" type="card" height="450px">
        <el-carousel-item v-for="item in imgurl" :key="item">
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <img :src="item.url" class="img" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <lay-line border-style="dashed" border-width="5px" theme="rgb(179 104 104)"
      >『新闻资讯』</lay-line
    >

    <!-- 新闻页 -->
    <div class="news">
      <div class="">
        <!-- 轮播图 -->
        <lay-carousel v-model="active1" class="lun">
          <lay-carousel-item id="1">
            <img
              src="../assets/img/index/xw4.jpg"
              alt=""
              style="width: 100%; height: 100%"
            />
          </lay-carousel-item>
          <lay-carousel-item id="2">
            <img
              src="../assets/img/index/xw5.jpg"
              alt=""
              style="width: 100%; height: 100%"
            />
          </lay-carousel-item>
          <lay-carousel-item id="3">
            <img
              src="../assets/img/index/xw6.jpg"
              alt=""
              style="width: 100%; height: 100%"
            />
          </lay-carousel-item>
          <lay-carousel-item id="4">
            <img
              src="../assets/img/index/xw2.jpg"
              alt=""
              style="width: 100%; height: 100%"
            />
          </lay-carousel-item>
        </lay-carousel>
      </div>
    </div>
  </div>

  <!-- 底部 -->
</template>
<script>
//引入图片
import { ref } from "vue";
import { getLunar } from "chinese-lunar-calendar";
export default {
  components: {},
  name: "Index",
  data() {
    return {
      imgurl: [
        { url: require("../assets/img/index/1.jpg") },
        { url: require("../assets/img/index/2.jpg") },
        { url: require("../assets/img/index/3.jpg") },
      ],
      //获取农历时间
      getLunarDay: "",
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      date: new Date().getDate(),
    };
  },
  mounted() {
	// 获取农历
    console.log(this.date)
    this.getLunarDay = getLunar(this.year, this.month, this.date)
    console.log(this.getLunarDay)
  },
  comments: {},
  setup() {
    //获取农历时间
    const active1 = ref("1");
    return {
      active1,
    };
  },
};
</script>
<style scoped>
.tz {
  color: rgb(89, 12, 12);
  margin-top: 12px;
  margin-bottom: 12px;
}

.img {
  width: 100%;
  height: 100%;
}


.lun {
  height: 500px !important;
  width: 40% !important;
  margin-top: 30px;
  margin-left: 40px;
}
</style>