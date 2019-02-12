<template>
	<div class="note">
    <div class="post">
        <div id="comment-list" class="comment-list">
            <div>
                <form class="new-comment">
                    <a class="avatar"><img :src="headPic" /></a>
                    <textarea placeholder="写下你的评论..."></textarea>
                    <div class="write-function-block">
                        <div data-v-b36e9416="" class="emoji-modal-wrap">
                            <a data-v-b36e9416="" class="emoji"><i data-v-b36e9416="" class="iconfont ic-comment-emotions"></i></a>
                        </div>
                        <div class="hint">
                            Ctrl+Enter 发表
                        </div>
                        <a class="btn btn-send">发送</a>
                        <a class="cancel">取消</a>
                    </div>
                </form>
                <!---->
            </div>
            <div id="normal-comment-list" class="normal-comment-list" v-show="hasComment">
                <div>
                    <div>
                        <div class="top-title">
                            <span>26条评论</span>
                            <a class="author-only">只看作者</a>
                            <a class="close-btn" style="display: none;">关闭评论</a>
                            <div class="pull-right">
                                <a class="active">按时间倒序</a>
                                <a class="">按时间正序</a>
                            </div>
                        </div>
                    </div>
                    <!---->
                    <!---->
                    <div class="comments-placeholder" style="display: none;">
                        <div class="author">
                            <div class="avatar"></div>
                            <div class="info">
                                <div class="name"></div>
                                <div class="meta"></div>
                            </div>
                        </div>
                        <div class="text"></div>
                        <div class="text animation-delay"></div>
                        <div class="tool-group">
                            <i class="iconfont ic-zan-active"></i>
                            <div class="zan"></div>
                            <i class="iconfont ic-list-comments"></i>
                            <div class="zan"></div>
                        </div>
                    </div>
                    <div id="comment-34854759" class="comment" v-for="item of list" :key = "item.commentId">
                        <div>
                            <div class="author">
                                <div data-v-f3bf5228="" class="v-tooltip-container" style="z-index: 0;">
                                    <div class="v-tooltip-content">
                                        <a href="/u/885df18e67a9" target="_blank" class="avatar"><img :src="item.headerPic" /></a>
                                    </div>
                                    <!---->
                                </div>
                                <div class="info">
                                    <a href="/u/885df18e67a9" target="_blank" class="name">{{item.userName}}</a>
                                    <!---->
                                    <!---->
                                    <div class="meta">
                                        <span>11楼 &middot; {{item.createTime}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="comment-wrap">
                                <p>{{item.content}}</p>
                                <!---->
                                <div class="tool-group">
                                    <a data-v-cdecbe24="" id="like-button-34854759" class="like-button"><span data-v-cdecbe24="">赞</span></a>
                                    <a class=""><i class="iconfont ic-comment"></i> <span>回复</span></a>
                                    <a class="report"><span>举报</span></a>
                                    <!---->
                                </div>
                            </div>
                        </div>
                        <div class="sub-comment-list" v-if = "hasSubComment(item.children)">
                            <div id="comment-34864460" class="sub-comment">
                                <p></p>
                                <div data-v-f3bf5228="" class="v-tooltip-container" style="z-index: 0;">
                                    <div class="v-tooltip-content">
                                        <a href="/u/998edd736166" target="_blank">画郎</a>：
                                    </div>
                                    <!---->
                                </div>
                                <span><a href="/u/885df18e67a9" class="maleskine-author" target="_blank" data-user-slug="885df18e67a9">@田心妙</a> 感谢关注&#55356;&#57143;一起加油&#55357;&#56841;</span>
                                <!---->
                                <p></p>
                                <div class="sub-tool-group">
                                    <span>2019.02.01 21:59</span>
                                    <a class=""><i class="iconfont ic-comment"></i> <span>回复</span></a>
                                    <a class="report"><span>举报</span></a>
                                    <!---->
                                </div>
                            </div>
                            <div class="sub-comment more-comment">
                                <a class="add-comment-btn"><i class="iconfont ic-subcomment"></i> <span>添加新评论</span></a>
                                <!---->
                                <!---->
                                <!---->
                            </div>
                            <!---->
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'detailComment',
  props: {
   headPic: String
  },
  data: function () {
  	return {
	  	pageSize: null,
	  	list: [],
	  	pageNum: null
  	}
  },
  methods: {
  	getCommentInfo: function () {
        // 异步请求博客列表
        this.$http.get('api/comment/'+ this.$route.params.id , {params: {pageNum: 0, pageSize: 5}}).then(this.successCallback, this.errorCallback);
    },
    successCallback: function (res) {
        res = res.body;
        if( res.data && res.status == 200){
        	var data = res.data
        	this.pageSize = data.pageSize
        	this.list = data.list
        	this.pageNum = data.pageNo
        	console.log(data)
        	
        }else {
            this.$util.errorTips("获取评论失败，请稍后刷新重试")
        }
    },
    errorCallback: function () {
        this.$util.errorTips("获取评论失败，请稍后刷新重试")
    }
  },
  created: function () {
    this.getCommentInfo();
  },
  computed: {
  	hasComment: function () {
  		return this.pageSize
  	},
  	hasSubComment: function () {
  		return function (children) {
  			return children.length
  		}
  	}
  }
}

</script>

<style scoped>
@import '../../../assets/styles/comment.css'
</style>
