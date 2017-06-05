<template>
<div style="width:100%">
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="最新图赏"/>
    <mu-tab value="tab2" title="测评视频"/>
    <mu-tab value="tab3" title="行业新闻"/>
  </mu-tabs>
  <div v-if="activeTab === 'tab1'">
    <mu-grid-list class="gridlist-demo" cellHeight="350" padding="15">
      <mu-sub-header>图片展示</mu-sub-header>
      <mu-grid-tile class="content-box" v-for="tile, index in information" :key="index">
        <img :src="tile.img" width="100%" height="100%" />
        <span slot="title">{{tile.title}}</span>
        <span></span>
        <mu-icon-button icon="star_border" slot="action"/>
      </mu-grid-tile>
    </mu-grid-list>
  </div>
  <div v-if="activeTab === 'tab2'">
    <embed src='http://player.youku.com/player.php/Type/Folder/Fid//Ob//sid/XMjc2NDk3ODE4OA==/v.swf' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' allowFullScreen='true' mode='transparent' type='application/x-shockwave-flash'></embed>
    <embed src='http://player.youku.com/player.php/Type/Folder/Fid//Ob//sid/XMjczNTQwMTY4MA==/v.swf' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' allowFullScreen='true' mode='transparent' type='application/x-shockwave-flash'></embed>
    <embed src='http://player.youku.com/player.php/Type/Folder/Fid//Ob//sid/XMTczMzQ1NTg1Ng==/v.swf' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' allowFullScreen='true' mode='transparent' type='application/x-shockwave-flash'></embed>
    <embed src='http://player.youku.com/player.php/sid/XMTg3MzE0NzMwOA==/v.swf' allowFullScreen='true' quality='high' width='480' height='400' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>
  </div>
  <div v-if="activeTab === 'tab3'">
    <p v-for="index in information" class="news-title">
      {{index.news}}
    </p>
  </div>
</div>
</template>
<script>
export default {
  created() {
    this.getInformation()
  },
  components: {},
  data() {
    return {
      title: '',
      poster: '',
      rating: null,
      introduction: '',
      movie_id: '',
      information: [],
      addMovieModal: false,
      editMovieModal: false,
      activeTab: 'tab1'
    }
  },
  methods: {
    // 获取所有电影的方法
    getInformation() {
      this.$http.get('/api/information')
        .then(res => {
          console.log(res.data,"!@#!@#!@#!@#")
          this.information = res.data
        })
        .catch(err => {
          this.toastr.error(`${err.message}`, 'ERROR!')
          console.log(err)
        })
      // var imgArr = [];
      // var imgArrObj = {};
      // for (var i = 0; i < 10; i++) {
      //   imgArrObj.image = `../img/phone${i}`
      //   imgArr.push(imgArrObj)
      // }
      // console.log(imgArr)
    },
    handleTabChange (val) {
      this.activeTab = val
    },
    handleActive () {
      // window.alert('tab active')
    }
  }
}
</script>

<style lang="css">
.mu-th{
  text-align: center !important;
}
.mu-td{
  text-align: center !important;
}
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gridlist-demo{
  overflow-y: auto;
}
embed{
  margin: 20px;
}
.news-title{
  font-size: 20px;
  text-align: left;
  padding: 10px 0 10px 50px;
  border-bottom: 1px solid #f2f2f2;
}
</style>
