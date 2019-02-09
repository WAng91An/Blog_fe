<template>
	<!-- Home Page Post List -->
	<div class="container" id="container">
	    <div class="row">
	        <div class="col-lg-10 col-md-10 col-md-offset-1">
	            <div class="post-item-wrapper"  v-for="item of list" :key="item.id">
	                <a  :href=" '/blog/' + item.id" class="post-title">
	                    {{item.title}}
	                </a>
	                <div class="post-excerpt">
	                    <!-- Post Date and Categories -->
	                    <div class="date-and-category">
	                        <div class="date">{{item.createTime | dataFormat }}</div>
	                        <div class="categories">
	                            <a href="/categories/coding/">{{item.categoryName}}</a>
	                        </div>
	                    </div>
	                    <!-- Post Excerpt -->
	                    <div class="excerpt typo">
	                            <p>{{item.description}}</p>
	                    </div>
	                    <!-- Post Tags -->
	                    <div class="tags">
	                        <a class="tag" href="/tags/git/">{{item.tags}}</a>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>				
</template>

<script>

export default {
  name: 'containerHeader',
  mounted: function () {
   
  },
  props: {
    list: Array
  },
  methods: {

  },
  filters: {
      dataFormat: function (time) {
          // 时间格式
          var d = new Date(time)
          var year = d.getFullYear();
          var month = d.getMonth() + 1;
          var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
          return  year+ '-' + month + '-' + day;
      }
  }
}
</script>

<style>

</style>
