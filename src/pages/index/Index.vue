<template>
  <div>
    <common-header></common-header>
    <container-header :list="list"></container-header>
    <pagination-header @handleList="handleList"></pagination-header>
    <common-footer></common-footer>
  </div>
</template>

<script>
import ContainerHeader from './components/Container'
import CommonHeader from 'common/header/Header'
import PaginationHeader from './components/Pagination'
import CommonFooter from 'common/footer/Footer'

export default {
  name: 'Index',
  components: {
    CommonHeader,
    CommonFooter,
    ContainerHeader,
    PaginationHeader
  },
  data: function () {
    return {
        list: []
    }
  },
  methods: {
  	handleList: function (data) {
  		this.list = data
  	}
  }
}
</script>

<style>

</style>
