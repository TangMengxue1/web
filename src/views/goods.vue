<template>
  <Header></Header>
  <!-- <GoodsHeader></GoodsHeader> -->
  <el-breadcrumb :separator-icon="ArrowRight" class="mbx">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/goods' }">非遗商城</el-breadcrumb-item>
  </el-breadcrumb>

  <div class="news">非遗商城</div>
  <img src="../assets/img/购物车空.svg"  style="position: relative; left: 10%" alt="" width="50" @click="$router.push({name:'CAR'})" />

  <!-- <a href="/goods/car" style="position: relative; left: 10%"
    >
    <img src="../assets/img/购物车空.svg" alt="" width="50" @click="$router.push({name:'CAR'})" /></a> -->
  <div class="main">
    <div class="goods">
      <n-card :title="item.name" size="huge" v-for="item in Data" :key="item">
        <template #cover>
          <n-image width="100" :src="item.img" />
        </template>
        <p>{{ item.price }}￥</p>
        <n-button round style="margin-right: 40px; margin-top: 10px">
          商品详情
        </n-button>
        <n-button round> 加入购物车 </n-button>
      </n-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  name: "goods",
  setup() {
    let Data = ref([]);
    axios
      .post("http://127.0.0.1:3380/api/goods/")
      .then((res) => {
        //console.log(res.data);
        Data.value = res.data;
        console.log(Data.value);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(Data.value);
    return {
      Data,
    };
  },
  methods: {},
};
</script>

<style scoped>
.mbx {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
  font-family: fangsong;
  font-size: 22px !important;
  color: rgb(74, 73, 73) !important;
}

.main {
  margin-top: 70px;
  margin-left: 10%;
  margin-right: 10%;
  background-color: white;
}

.news {
  font-family: cursive;
  text-align: center;
  margin-top: 56px;
  margin-bottom: 33px;
  font-size: 38px;
}

.news:before,
.news:after {
  content: "";
  display: inline-block;
  width: 22px;
  height: 44px;
  vertical-align: top;
  background: url(../assets/img/news/1.png) no-repeat;
}

.news:before {
  background-position: left;
  margin-right: 18px;
}

.news:after {
  background-position: right;
  margin-left: 18px;
}

.n-card {
  max-width: 320px;
  margin: 20px 20px 30px 20px;
}

.goods {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
}

p {
  font-size: 20px;
}
</style>
