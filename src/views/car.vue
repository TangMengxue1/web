<template>
  <Header></Header>
  <el-breadcrumb :separator-icon="ArrowRight" class="mbx">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/goods' }">非遗商城</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/goods/car' }">购物车</el-breadcrumb-item>
  </el-breadcrumb>
</template>



<script>
export default{
    name:"car",
}
</script>

<style>
.mbx {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
  font-family: fangsong;
  font-size: 22px !important;
  color: rgb(74, 73, 73) !important;
}


.n-card {
  max-width: 320px;
  margin: 20px 20px 30px 20px;
}


</style>