<!--   分页逻辑   -->
<template>
    <div class="container" xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="row">
        <div class="col-lg-10 col-md-10 col-md-offset-1">
            <ul class="pagination">
                <!--  首页按钮   -->
                <li class="firstPage" :class="{disabled: isFirstPage}">
                    <a @click="handleFirstPage">
                        <span>首页</span>
                    </a>
                </li>
                <!--  左箭头按钮   -->
                <li :class="{disabled: notHasPreviousPage}">
                    <a @click="handleLeftClick">
                        <span class="symbol-left">&lt;</span>
                    </a>
                </li>
                <!--  数字   -->
                <li  v-for="(item, index) of navigatepageNums" :key="index" :class="{ 'active': item == pageNum }">
                    <a @click="handleNumber(item)">
                        <span>{{item}}</span>
                    </a>
                </li>
                <!--  右箭头按钮   -->
                <li :class="{disabled: notHasNextPage}">
                    <a @click="handleRightClick">
                        <span class="symbol-right">&gt;</span>
                    </a>
                </li>
                <!-- 尾页按钮   -->
                <li class="lastPage" :class="{disabled: isLastPage}">
                    <a @click="handleLastPage">
                        <span>尾页</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'paginationHeader',
  data: function () {
    return {
        list: [],
        pageNum: null,
        pages: null,
        hasNextPage: null,
        hasPreviousPage: null,
        isFirstPage: null,
        isLastPage: null,
        navigatepageNums: [],
    }
  },
  methods: {
     getBlogInfo: function (pageNum, pageSize) {
        // 异步请求博客列表
        this.$http.get('api/blog/list', {params: {pageNum: pageNum, pageSize: pageSize}}).then(this.successCallback, this.errorCallback);
    },
    successCallback: function (res) {
        res = res.body;
        if( res.data && res.status == 200){
            this.list = res.data.list;
            this.pageNum = res.data.pageNum;
            this.hasNextPage = res.data.hasNextPage;
            this.hasPreviousPage = res.data.hasPreviousPage;
            this.isFirstPage = res.data.isFirstPage;
            this.isLastPage = res.data.isLastPage;
            this.pages = res.data.pages;
            this.navigatepageNums = res.data.navigatepageNums;

            this.handleList();
        }else {
            this.$util.errorTips("获取博客失败，请稍后刷新重试")
        }
    },
    errorCallback: function () {
        this.$util.errorTips("获取博客失败，请稍后刷新重试")
    },
    handleFirstPage: function () {
        // 点击首页重新请求
        this.getBlogInfo(1, this.$util.pageSize());
    },
    handleLastPage: function () {
        // 点击尾页重新请求
        this.getBlogInfo(this.pages, this.$util.pageSize());
    },
    handleNumber: function (item) {
        // 点击数字请求
        this.getBlogInfo(item, this.$util.pageSize());
    },
    handleLeftClick: function () {
        // 点击左箭头按钮
        this.getBlogInfo(this.pageNum - 1, this.$util.pageSize());
    },
    handleRightClick: function () {
        // 点击右箭头按钮
        this.getBlogInfo(this.pageNum + 1, this.$util.pageSize());
    },
    handleList: function () {
    	// 请求一次数据 更新 list
        this.$emit('handleList', this.list)
    }
  },
  computed: {
    notHasNextPage: function () {
      // 当没有上一页的时候按钮禁用
      return !this.hasNextPage;
    },
    notHasPreviousPage: function () {
      // 当没有下一页的时候按钮禁用
      return !this.hasPreviousPage;
    }
  },
  created: function () {
      this.getBlogInfo(1, this.$util.pageSize());
  }
}
</script>

<style>
</style>
