<template>
  <div class="tree-table">
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
                colIdx > 0 &&
                  rowIdx < dataTable.length - 2 &&
                  dataTable[rowIdx + 1][colIdx - 1].index === 0 &&
                  'col-data_last',
              ]"
              :data-index="dataTable[rowIdx][colIdx].index"
              :data-row-index="rowIdx"
              :data-col-index="colIdx"
            >
              <input
                type="checkbox"
                :class="[
                  colIdx > 0 &&
                    dataTable[rowIdx][colIdx].index > 0 &&
                    'col-data_line-to-parent',
                ]"
              />
              <div :class="['col']">
                {{ dataTable[rowIdx][colIdx].label }}
              </div>
            </div>
          </template>
          <template v-else>
            <div
              :class="[
                'col col-no-data',
                rowIdx < dataTable.length - 1 &&
                colIdx < depth - 2 &&
                dataTable[rowIdx + 1][colIdx].index === 0 &&
                dataTable[rowIdx + 1][colIdx + 1].index === 0 &&
                dataTable[rowIdx][colIdx + 1].index > 0 &&
                dataTable[rowIdx][colIdx + 1].hasChildren
                  ? 'col-no-data_hide-line'
                  : '',
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
