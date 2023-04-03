<template>
  <div class="tree-view-table">
    <div v-for="item in dataTable" :key="item.id" class="tree-rows">
      <div :class="['tree-row', !rootId ? 'tree-row_root' : '']">
        <div class="tree-col">
          <div class="flex justify-start align-center">
            <input type="checkbox" />
            {{ item.name }}
          </div>
        </div>
        <TreeViewTable
          :data-tree="dataTree"
          :has-check-box="true"
          :root-id="item.id"
        ></TreeViewTable>
      </div>
    </div>
  </div>
</template>

<script>
import { getChildByParentId, getLeafNumber } from '~/ultils/common'

export default {
  name: 'TreeViewTable',
  props: {
    dataTree: {
      type: Array,
      default: () => [],
    },
    hasCheckBox: {
      type: Boolean,
      default: false,
    },
    rootId: {
      type: [Number, Object, null],
      default: null,
    },
    parentKey: {
      type: String,
      default: 'parentId',
    },
  },
  data: () => ({
    depth: 0,
    dataTable: [],
    leafNumber: 0,
  }),
  beforeMount() {
    this.dataTable = getChildByParentId(
      this.dataTree,
      this.rootId,
      this.parentKey
    )
    this.leafNumber = getLeafNumber(this.dataTree, this.parentKey, null)
    console.log('🚀 ~ beforeMount ~ this.leafNumber:', this.leafNumber)
  },
  methods: {},
}
</script>

<style lang="scss">
.tree {
  &-row {
    height: 100%;
    display: table-row;
    &_root {
      width: 100%;
    }
  }
  &-col {
    height: 35px;
    display: table-cell;
    box-sizing: border-box;
    min-width: 120px;
    padding: 5px 15px;
    // color: white;
  }
}
</style>
