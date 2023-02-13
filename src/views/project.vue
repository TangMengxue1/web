<template>
  <div>
    <Header></Header>
    <el-breadcrumb :separator-icon="ArrowRight" class="mbx">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/project' }"
        >非遗名录</el-breadcrumb-item
      >
    </el-breadcrumb>

    <div class="news">非遗名录</div>

    <div class="title">
      <div class="h30">国家级非物质文化遗产代表性项目名录</div>
      <div class="p">
        <p style="text-align: justify; text-indent: 2em">
          <br />
        </p>
        <p>
          建立非物质文化遗产代表性项目名录，对保护对象予以确认，以便集中有限资源，对体现中华民族优秀传统文化，具有历史、文学、艺术、科学价值的非物质文化遗产项目进行重点保护，是非物质文化遗产保护的重要基础性工作之一。联合国教科文组织《保护非物质文化遗产公约》（以下简称《公约》）要求“各缔约国应根据自己的国情”拟订非物质文化遗产清单。建立国家级非物质文化遗产名录，是我国履行《公约》缔约国义务的必要举措。《中华人民共和国非物质文化遗产法》明确规定：“国家对非物质文化遗产采取认定、记录、建档等措施予以保存，对体现中华民族优秀传统文化，具有历史、文学、艺术、科学价值的非物质文化遗产采取传承、传播等措施予以保护。”“国务院建立国家级非物质文化遗产代表性项目名录，将体现中华民族优秀传统文化，具有重大历史、文学、艺术、科学价值的非物质文化遗产项目列入名录予以保护。”
        </p>
        <p>
          国务院先后于2006年、2008年、2011年、2014年和2021公布了五批国家级项目名录（前三批名录名称为“国家级非物质文化遗产名录”，《中华人民共和国非物质文化遗产法》实施后，第四批名录名称改为“国家级非物质文化遗产代表性项目名录”），共计1557个国家级非物质文化遗产代表性项目（以下简称“国家级项目”），按照申报地区或单位进行逐一统计，共计3610个子项。为了对传承于不同区域或不同社区、群体持有的同一项非物质文化遗产项目进行确认和保护，从第二批国家级项目名录开始，设立了扩展项目名录。扩展项目与此前已列入国家级非物质文化遗产名录的同名项目共用一个项目编号，但项目特征、传承状况存在差异，保护单位也不同。
        </p>
        <p>
          国家级名录将非物质文化遗产分为十大门类，其中五个门类的名称在2008年有所调整，并沿用至今。十大门类分别为：民间文学，传统音乐，传统舞蹈，传统戏剧，曲艺，传统体育、游艺与杂技，传统美术，传统技艺，传统医药，民俗。每个代表性项目都有一个专属的项目编号。编号中的罗马数字代表所属门类，如传统音乐类国家级项目“侗族大歌”的项目编号为“Ⅱ-28”。
        </p>
        <p>
          <br />
        </p>
      </div>
      <div class="t_more b16"></div>
    </div>
    <!-- <n-page-header subtitle="让你的听觉更懂视觉" @back="handleBack">
    <n-grid :cols="5">
      <n-gi>
        <n-statistic label="正片" value="125 集" />
      </n-gi>
      <n-gi>
        <n-statistic label="嘉宾" value="22 位" />
      </n-gi>
      <n-gi>
        <n-statistic label="道歉" value="36 次" />
      </n-gi>
      <n-gi>
        <n-statistic label="话题" value="83 个" />
      </n-gi>
      <n-gi>
        <n-statistic label="参考链接" value="2,346 个" />
      </n-gi>
    </n-grid>
    <template #title>
      <a
        href="https://anyway.fm/"
        style="text-decoration: none; color: inherit"
      >Anyway.FM</a>
    </template>
  </n-page-header> -->
    <div class="number">
      <div>
        <n-statistic label="" tabular-nums>
          <n-number-animation
            ref="numberAnimationInstRef"
            :from="0"
            :to="12039"
          />
        </n-statistic>
        <n-space vertical> 类别 </n-space>
      </div>
      <div>
        <n-statistic label="" tabular-nums>
          <n-number-animation
            ref="numberAnimationInstRef"
            :from="0"
            :to="120"
          />
        </n-statistic>
        <n-space vertical> 批次 </n-space>
      </div>
      <div>
        <n-statistic label="" tabular-nums>
          <n-number-animation
            ref="numberAnimationInstRef"
            :from="0"
            :to="12039"
          />
        </n-statistic>
        <n-space vertical> 类别 </n-space>
      </div>

      <div>
        <n-statistic label="" tabular-nums>
          <n-number-animation
            ref="numberAnimationInstRef"
            :from="0"
            :to="12039"
          />
        </n-statistic>
        <n-space vertical> 类别 </n-space>
      </div>
    </div>


<!-- 表格 -->
<div class="list" >
  <el-table :data="tableData" stripe style="width: 100% ">
    <el-table-column prop="id" label="序号" width="280" class="cell"/>
    <el-table-column prop="name" label="名称" width="280" />
    <el-table-column prop="time" label="时间" width="280" />
    <el-table-column prop="type" label="类型" width="280" />
    <el-table-column prop="unit" label="保护单位" />
  </el-table>
</div>




    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="100" />
  </div>
</template>

<script>
import axios from 'axios';
import {  reactive,ref } from "vue";
export default {
  name: "project",
  setup() { 
    let Data =reactive({
        pro:[],
    })

    const numberAnimationInstRef = ref(null);
				async function select(){
          await axios.post('http://127.0.0.1:3380/api/project/')
					.then( res => {
            //console.log(res.data);
						Data.pro=res.data;
            //console.log(Data.pro);
					})
					.catch( err => {
						console.log(err);
					})
          //console.log(Data.pro);

          return Data.pro;
        }
          // console.log(select());
          
          //console.log(Data.pro);
  
    var tableData = select();
    console.log(tableData);
     
    // onMounted(() => {
    //   GetProjectData();
    // });

    return {
      numberAnimationInstRef,
      tableData,
    };
  },
    
};




</script>

<style scoped>
.card-container {
  background: whitesmoke;
  padding: 20px;
}
.mbx {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 30px;
  font-family: fangsong;
  font-size: 22px !important;
  color: rgb(74, 73, 73) !important;
}

.number {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
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

.title {
  text-align: center;
  color: #333;
  padding: 0 40px 53px;
}

.h30 {
  font-size: 30px;
}

.title .p {
  font-family: "微软雅黑";
  font-size: 14px;
  padding: 30px 0 35px;
  text-align: justify;
  text-indent: 2em;
}

.list{
margin-top:70px;
font-size: 40px;
width: 90%;
margin-left: 5%;
}


</style>