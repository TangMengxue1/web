<template>
    <div>
        <Header></Header>
    <el-breadcrumb :separator-icon="ArrowRight" class="mbx">
    <el-breadcrumb-item :to="{ path: '/'}">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/news' }">非遗资讯</el-breadcrumb-item>
  </el-breadcrumb>

  <!-- 新闻列表 -->
  <div class="main">
  <div class="news">
    非遗资讯
  </div> 
  <div class="list">
    <n-list hoverable clickable>
    <n-list-item class="item"> 
      <n-thing title="相见恨晚" content-style="margin-top: 10px;">
        <template #description>
          <n-space size="small" style="margin-top: 4px">
            <n-tag :bordered="false" type="info" size="small">
              暑夜
            </n-tag>
            <n-tag :bordered="false" type="info" size="small">
              晚春
            </n-tag>
          </n-space>
        </template>
        奋勇呀然后休息呀<br>
        完成你伟大的人生
      </n-thing>
    </n-list-item>
    <n-list-item class="item">
      <n-thing title="他在时间门外" content-style="margin-top: 10px;">
        <template #description>
          <n-space size="small" style="margin-top: 4px">
            <n-tag :bordered="false" type="info" size="small">
              环形公路
            </n-tag>
            <n-tag :bordered="false" type="info" size="small">
              潜水艇司机
            </n-tag>
          </n-space>
        </template>
        最新的打印机<br>
        复制着彩色傀儡<br>
        早上好我的罐头先生<br>
        让他带你去被工厂敲击
      </n-thing>
    </n-list-item>
     <n-list-item class="item"> 
      <n-thing title="相见恨晚" content-style="margin-top: 10px;">
        <template #description>
          <n-space size="small" style="margin-top: 4px">
            <n-tag :bordered="false" type="info" size="small">
              暑夜
            </n-tag>
            <n-tag :bordered="false" type="info" size="small">
              晚春
            </n-tag>
          </n-space>
        </template>
        奋勇呀然后休息呀<br>
        完成你伟大的人生
      </n-thing>
    </n-list-item>
  </n-list>
    </div>  
 <!-- 分页 -->
  <el-pagination background layout="prev, pager, next" :total="100" />
  </div>
   
</div>
</template>

<script>
export default {
    name:"news",
    setup() {
        
    },
}
</script>

<style scoped>
.card-container {
  background: whitesmoke;
  padding: 20px;
}
.mbx{
 margin-top: 30px;
 margin-bottom: 30px;
 margin-left: 30px;
 font-family: fangsong;
 font-size: 22px !important;
 color:rgb(74, 73, 73) !important;
}

.news{
    font-family: cursive;
    text-align: center;
    margin-top: 56px;
    margin-bottom: 33px;
    font-size: 38px;
}

.news:before, .news:after {
    content: '';
    display: inline-block;
    width: 22px;
    height: 44px;
    vertical-align: top;
    background: url(../assets/img/news/1.png) no-repeat;
}

.news:before {
    background-position:left;
    margin-right: 18px;
}

.news:after{
    background-position: right;
    margin-left: 18px;
}

/* 新闻页 */
.item {
  background-color: rgb(207, 207, 207);
}


.list{
    padding: 20px 50px;
}
.cont{
    padding:45px 70px;
}

.title{
    margin-top: 9px;
    margin-bottom: 17px;
    font-size: 22px;
    line-height: 1.2;
}


</style>