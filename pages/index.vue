<template>
  <div>
    <TreeView :data-tree="treeData" :has-check-box="true" />
    <div class="mt-10"></div>
    <TreeViewContainer
      :data-tree="treeViewData"
      :has-check-box="true"
      :root-id="null"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import data from '~/resources/common'
import TreeViewContainer from '~/components/TreeViewTable/TreeViewContainer.vue'
import { getLeavesOfNode } from '~/ultils/common'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    TreeViewContainer,
  },
  data: () => ({
    treeData: data.treeViewData,
    treeViewData: data.treeStructureData,
  }),
  mounted() {
    console.log(getLeavesOfNode(this.treeData, 1))
  },
})
</script>
<style lang="scss">
.mt-10 {
  margin-top: 100px;
}
</style>
