<template>
  <div>
    <div v-if="dataRow.label" class="tree-row">
      <TreeNode
        :data-node="dataRow"
        :has-check-box="hasCheckBox"
        :total-child="numberOfLastChild"
        :first-data="isFirst"
        :last-data="isLast"
      />
      <TreeView
        v-if="dataRow.children.length > 0 && isLoop"
        :data-tree="dataRow.children"
        :has-check-box="hasCheckBox"
      />
    </div>
  </div>
</template>

<script>
import TreeNode from './TreeNode.vue'
import { isHasChidren, getAllChildOfLastNode } from '~/ultils/common'

export default {
  name: 'TreeRow',
  components: { TreeNode },
  props: {
    dataRow: {
      type: Object,
      default: null,
    },
    depth: {
      type: Number,
      default: 0,
    },
    isLoop: {
      type: Boolean,
      default: true,
    },
    hasCheckBox: {
      type: Boolean,
      default: false,
    },
    isFirst: {
      type: Boolean,
      default: false,
    },
    isLast: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    numberOfLastChild: 0,
  }),
  beforeMount() {
    this.numberOfLastChild = this.isLoop
      ? getAllChildOfLastNode(this.dataRow)
      : this.dataRow.children && this.dataRow.children.length > 0
      ? getAllChildOfLastNode(this.dataRow.children[0])
      : 0
  },
  methods: {
    isHasChild(data) {
      return isHasChidren(data)
    },
  },
}
</script>
