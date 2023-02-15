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
  <div  class="list">
    <n-list hoverable clickable v-for="item in Data" :key="item">
    <n-list-item class="item" v-on:click="go(item.url)"> 
      <div class="li">
      <n-image class="im"
    width="350"
:src= "item.img"  
  />
      <n-thing title="" content-style="margin-top: 10px; font-size:16px;">
       <h2>{{ item.title }}</h2>
        <template #description>
          <n-space size="small" style="margin-top: 4px">
            <n-tag :bordered="false" type="info" size="large">
              {{ item.keyword1 }}
            </n-tag>
            <n-tag :bordered="false" type="info" size="large">
              {{ item.keyword2 }}
            </n-tag>
          </n-space>
        </template>
        <n-ellipsis :line-clamp="4" style="max-width: 400px">
    {{ item.con }}
  </n-ellipsis>
       
      </n-thing>
      </div>
    </n-list-item>
  </n-list>
    </div>  
 <!-- 分页 -->

  <el-pagination background layout="prev, pager, next" :total="100" />
  </div>
   
</div>

<AppFooter></AppFooter>
</template>


// export default {
//     name:"news",
//     data() {
//       return Data
//   },
//     methods: {
//     go(url) {
//     window.location.href='url';
//     console.log('1');
//      }
//     },
// }


<script>
import axios from 'axios';
import { ref } from "vue";
export default {
  name: "news",
  setup() { 
   
    let Data =ref([]);
          axios.post('http://127.0.0.1:3380/api/news/')
					.then( res => {
            //console.log(res.data);
						Data.value=res.data;
            console.log(Data.value);
					})
					.catch( err => {
						console.log(err);
					})
    
          console.log(Data.value);
    return {
     Data
    };
  },
  methods:{
    go(url) {
    window.location.href=url;
    console.log('1');
     }
  }
    
};

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
.item{
  box-shadow: rgba(77, 77, 77, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  margin-top: 20px;
  background-color: rgb(233, 232, 232);
  display: flex;
  
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


.im{
  display:inline-block;
  margin-right: 50px;
}


.li{
  
  display: flex;
}
</style>