<template>
    <div>
    <div class="head">
    <div class="head-top">
      <img class="im" src="../assets/img/index/logo.png" alt="" />
      <div class="infor">
        <span>{{year}}-{{month}}-{{ date }}</span>
        <span>农历{{ getLunarDay.dateStr }}</span>
        <span>{{ getLunarDay.solarTerm }}</span>
        <a href="/login"
          ><img src="@/assets/img/index/注册登录.png" alt=""
        /></a>
        <a href=""><img src="@/assets/img/index/退出登录.png" alt="" /></a>
      </div>
      <!-- <span class="title">华夏非遗</span> -->
    </div>
    <div class="head-bt">
      <a href="/">首页</a>
      <a href="/news">非遗资讯</a>
      <a href="/project">非遗名录</a>
      <a href="/goods">非遗商城</a>
    </div>
  </div>
    </div>
</template>

<script>
import { getLunar } from "chinese-lunar-calendar";
export default {
  name: "headers",
  data() {
    return {
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
  },
};
</script>

<style scoped>
.head {
  left: 0;
  top: 0;
  right: 0;
  background: url(../assets/img/index/opacity-b25.png);
}

.tz {
  color: rgb(89, 12, 12);
  margin-top: 12px;
  margin-bottom: 12px;
}

.head-top {
  height: 90px;
  width: 100%;
}

.head-top .infor {
  color:#f0f2f5;
  font-weight:600;
  font-size: 25px;
  font-family: fangsong;
  float: right;
  height: 90px;
  width: 550px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.head-top a {
}
.head-top .infor img {
  height: 40px;
  width: 40px;
}
.head-bt {
  display: flex;
  justify-content: space-around;
  height: 70px;
  box-shadow: rgba(90, 90, 90, 0.35) 0px 5px 15px;
}

.head-bt a {
  height: 100%;
  font-size: 30px;
  font-weight: 500;
  color: rgb(53, 52, 52);
  text-decoration: none;
  line-height: 70px;
  font-family: cursive;
}
.head-bt a:hover {
  color: rgb(96, 57, 58);
  border-bottom: 5px solid rgb(99, 23, 23);
}
.im {
  display: inline;
  width: 70px;
  height: 70px;
  margin-top: 10px;
  margin-left: 70px;
}
.img {
  width: 100%;
  height: 100%;
}

.title {
  margin: 0px;
  padding: 0px;
}

.lun {
  height: 500px !important;
  width: 40% !important;
  margin-top: 30px;
  margin-left: 40px;
}
</style>