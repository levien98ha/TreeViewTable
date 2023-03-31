<template>
  <TreeView :data-tree="treeData" :has-check-box="true" />
</template>

<script lang="ts">
import Vue from 'vue'
import data from '~/resources/common'

export default Vue.extend({
  name: 'IndexPage',
  data: () => ({
    treeData: data.treeViewData,
  }),
})
</script>
