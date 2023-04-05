<template>
  <div class="tree-table">
    <div class="flex">
      <div
        v-for="(col, colIdx) in depth"
        :key="col + '' + colIdx"
        class="tree-col-container"
      >
        <div class="tree-header">
          <div class="flex justify-between align-center">
            <input type="checkbox" class="tree-checkbox" />
            <div class="tree-ic-sort">
              <img :src="src" @click="handleSort(colIdx)" />
            </div>
          </div>
        </div>
        <div
          v-for="(row, rowIdx) in dataTable"
          :key="row.label + rowIdx"
          :class="['tree-row']"
        >
          <template v-if="colIdx === depth - 1 && row.length < depth">
            <div :class="['tree-col']"></div>
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
                  : 'tree-col-data',
                colIdx > 0 &&
                  rowIdx < dataTable.length - 2 &&
                  dataTable[rowIdx + 1][colIdx - 1].index === 0 &&
                  'tree-col-data_last',
              ]"
              :data-index="dataTable[rowIdx][colIdx].index"
              :data-row-index="rowIdx"
              :data-col-index="colIdx"
            >
              <input
                type="checkbox"
                :class="[
                  'tree-checkbox',
                  colIdx > 0 &&
                    dataTable[rowIdx][colIdx].index > 0 &&
                    'tree-col-data_line-to-parent',
                ]"
              />
              <div :class="['tree-col']">
                {{ dataTable[rowIdx][colIdx].label }}
              </div>
              <span
                :class="
                  dataTable[rowIdx][colIdx].hasChildren
                    ? 'tree-col-data_line-right'
                    : ''
                "
              ></span>
            </div>
          </template>
          <template v-else>
            <div
              :class="[
                'tree-col tree-col-no-data',
                rowIdx < dataTable.length - 1 &&
                colIdx < depth - 2 &&
                dataTable[rowIdx + 1][colIdx].index === 0 &&
                dataTable[rowIdx + 1][colIdx + 1].index === 0 &&
                dataTable[rowIdx][colIdx + 1].index > 0 &&
                dataTable[rowIdx][colIdx + 1].hasChildren
                  ? 'tree-col-no-data_hide-line'
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
    console.log('🚀 ~ beforeMount ~ this.dataTable:', this.dataTable)
  },
  methods: {
    handleSort(depth) {},
  },
}
</script>
