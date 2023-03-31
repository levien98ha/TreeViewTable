<template>
  <div class="tree-table">
    <!-- <div
      v-for="(item, idx) in dataTree"
      :key="item.label + idx"
      class="tree-rows"
    >
      <div class="tree-row">
        <TreeRow
          :data-row="item"
          :depth="depth"
          :is-loop="false"
          :has-check-box="hasCheckBox"
        ></TreeRow>
        <TreeRow
          v-if="item.children.length > 0"
          :data-row="item.children[0]"
          :depth="depth - 1"
          :has-check-box="hasCheckBox"
          :is-first="true"
        ></TreeRow>
      </div>
      <template v-if="item.children.length > 0">
        <div
          v-for="(child, index) in item.children"
          :key="child.label + index"
          class="tree-row"
          :data-col="child.label"
        >
          <template v-if="index > 0">
            <div class="flex flex-col">
              <div
                v-for="key in getChildOfNode(child)"
                :key="key"
                :class="['tree-col', 'col-no-data']"
              ></div>
            </div>
          </template>
          <TreeRow
            v-if="index > 0 && child.label"
            :data-row="child"
            :depth="depth - 1"
            :has-check-box="hasCheckBox"
            :is-last="index === item.children.length - 1"
          ></TreeRow>
        </div>
      </template>
    </div> -->
    <div class="flex">
      <div
        v-for="(col, colIdx) in depth"
        :key="col + '' + colIdx"
        class="col-container"
      >
        <div
          v-for="(row, rowIdx) in dataTable"
          :key="row.label + rowIdx"
          :class="['row']"
        >
          <template v-if="colIdx === depth - 1 && row.length < depth">
            <div :class="['col col-no-data']"></div>
          </template>
          <template
            v-else-if="
              (dataTable[rowIdx][colIdx].index === 0 && colIdx < depth - 1) ||
              colIdx === depth - 1 ||
              (dataTable[rowIdx][colIdx].hasChildren &&
                dataTable[rowIdx][colIdx].index === 0) ||
              !dataTable[rowIdx][colIdx].hasChildren
            "
          >
            <div
              :class="[
                'flex justify-start',
                colIdx === 0 && dataTable[rowIdx][colIdx].index === 0
                  ? 'hide-line'
                  : 'col-data',
                dataTable[rowIdx][colIdx].hasChildren
                  ? 'col-data_line-right'
                  : '',
              ]"
              :data-index="dataTable[rowIdx][colIdx].index"
              :data-row-index="rowIdx"
              :data-col-index="colIdx"
            >
              <input type="checkbox" />
              <div :class="['col']">
                {{ dataTable[rowIdx][colIdx].label }}
              </div>
            </div>
          </template>
          <template v-else>
            <div
              :class="[
                'col col-no-data',
                dataTable[0][colIdx].index === rowIdx ? '' : 'col-no-data',
              ]"
              :data-index="dataTable[rowIdx][colIdx].index"
              :data-row-index="rowIdx"
              :data-col-index="colIdx"
            ></div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDepth, getCombinations } from '~/ultils/common'

export default {
  name: 'TreeView',
  props: {
    dataTree: {
      type: Array,
      default: () => [],
    },
    hasCheckBox: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    depth: 0,
    dataTable: [],
    dataTableClone: [],
  }),
  beforeMount() {
    if (!this.dataTree) {
      this.depth = 1
    } else {
      this.depth = Math.max(...this.dataTree.map((item) => getDepth(item)))
    }
    this.dataTable = getCombinations({ children: [...this.dataTree] }, 0)
    this.dataTableClone = JSON.parse(JSON.stringify(this.dataTable))
    console.log('🚀 ~ beforeMount ~ this.dataTable:', this.dataTable)
  },
  methods: {
    // filterData(colIdx, value) {
    //   const result = []
    //   this.dataTable.map((item) => {
    //     if (item.length > colIdx && item[colIdx].label === value) {
    //       result.push(item)
    //     }
    //   })
    //   return result
    // },
  },
}
</script>
