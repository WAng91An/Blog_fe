<template>
	<article>
	    <div class="container typo">
	        <div class="row">
	            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
	                <div class="post-info text-muted">
	                    <!-- Author -->
	                    <span class="author info">By {{userName}}</span>
	                    <!-- Date -->
	          <span class="date-time info">On
	            <span class="date">{{createTime | dateFormat}}</span>
	            <span class="time">{{createTime | timeFormat}}</span>
	          </span>
	            <!--  Categories  -->
	            <span class="categories info">Under
					<a href="/categories/coding/">{{categoryName}}</a>
				</span>
	                </div>
	                <!-- Tags -->
	                <div class="post-tags text-muted">
	                    Tags:
	                    <a class="tag" href="/tags/requirejs/">#{{tags}}</a>
	                </div>
	                <!-- Post Main Content -->
	                <div v-html = "content"></div>
	            </div>
	        </div>
	    </div>
	</article>
</template>

<script>

export default {
  name: 'detailArticle',
  mounted: function () {
   
  },
  props: {
    categoryName: String,
    content: String,
    createTime: String,
	tags: String,
	userName: String,
  },
  methods: {

  },
  filters: {
      dateFormat: function (time) {
          // 时间格式
          var d = new Date(time)
          var year = d.getFullYear();
          var month = d.getMonth() + 1;
          var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
          return  year+ '-' + month + '-' + day;
      },
      timeFormat: function (time) {
      	// 时间格式
          var d = new Date(time)
          var hours = d.getHours()
          var minutes = d.getMinutes() <10 ? '0' + d.getMinutes() : '' + d.getMinutes();
          var seconds = d.getSeconds()
          return  hours+ ':' + minutes + ':' + seconds;
      }
  }
}

</script>

<style>
</style>
