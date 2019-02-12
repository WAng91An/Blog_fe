<template>
	<header class="site-header header-background" :style="style">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div class="page-title with-background-image">
                    <p class="title" ref="detailId" :id="id">{{title}}</p>
                    <p class="subtitle"></p>
                </div>
                <div class="site-menu with-background-image">
                    <ul>
                        <li>
                            <a href="/">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="/archives">
                                Archives
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/<your-github-username>">
                                Github
                            </a>
                        </li>

                        <li>
                            <a href="mailto:<your-email-address>">
                                Email
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<script>
import img from 'imgPath/default-banner-dark.jpg'

export default {
  name: 'detailHeader',
  mounted: function () {
   
  },
  props: {
    title: String,
    id: Number
  },
  methods: {

  },
  computed: {
  	style: function () {
  		return "background-image: url("+ img +")"
  	}
  }
}

</script>

<style>
</style>
