<template>
  <div>
    <index-header></index-header>
    <container-header :list="list"></container-header>
    <pagination-header @handleList="handleList"></pagination-header>
    <common-footer></common-footer>
  </div>
</template>

<script>
import ContainerHeader from './components/Container'
import IndexHeader from './components/Header'
import PaginationHeader from './components/Pagination'
import CommonFooter from 'common/footer/Footer'

export default {
  name: 'Index',
  components: {
    IndexHeader,
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
