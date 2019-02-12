<template>
  <div>
    <detail-header :title = "title" :id = "id"></detail-header>
    <detail-article :categoryName="categoryName" :content="content" :createTime="createTime" :tags="tags" :userName="userName"></detail-article>
    <detail-comment :headPic = "headPic"></detail-comment>
    <common-footer></common-footer>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailArticle from './components/Article'
import DetailComment from './components/Comment'
import CommonFooter from 'common/footer/Footer'


export default {
  name: 'Index',
  components: {
   DetailHeader,
   CommonFooter,
   DetailArticle,
   DetailComment
  },
  data: function () {
    return {
       categoryName: null,
       content: null,
       createTime: null,
       headPic: null,
       id: null,
       img: null,
       isHot: null,
       tags: null,
       title: null,
       userId: null,
       userName: null,
    }
  },
  methods: {
  	getBlogDetail: function () {
        // 异步请求博客列表
        this.$http.get('api/detail/'+ this.$route.params.id ).then(this.successCallback, this.errorCallback);
    },
    successCallback: function (res) {
        res = res.body;
        if( res.data && res.status == 200){
        	var data = res.data.data
        	this.categoryName = data.categoryName
        	this.content = data.content
        	this.createTime = data.createTime
        	this.headPic = data.headPic
        	this.id = data.id
        	this.img = data.img
        	this.isHot = data.isHot
        	this.tags = data.tags
        	this.title = data.title
        	this.userId = data.userId
        	this.userName = data.userName

        }else {
            this.$util.errorTips("获取博客详情失败，请稍后刷新重试")
        }
    },
    errorCallback: function () {
        this.$util.errorTips("获取博客详情失败，请稍后刷新重试")
    },
  },
  created: function () {
      this.getBlogDetail();
  }
}
</script>

<style>

</style>
