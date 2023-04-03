<template>
  <div class="tree-view-container">
    <div class="tree-view-body">
      <!-- <div class="tree-view-bg">
        <div v-for="key in 17" :key="key" class="bg-row"></div>
      </div> -->
      <div class="tree-view-data">
        <TreeViewTable
          :data-tree="dataTree"
          :has-check-box="true"
          :root-id="null"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TreeViewTable from './TreeViewTable.vue'

export default {
  name: 'TreeViewContainer',
  components: {
    TreeViewTable,
  },
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
  }),
  mounted() {},
  methods: {},
}
</script>

<style lang="scss">
.tree-view-container {
  width: 100%;
}

.tree-view-body {
  position: relative;
}

.tree-view-bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.tree-view-data {
  position: relative;
}

.bg-row {
  height: 35px;
  width: 100%;
  &:nth-child(odd) {
    background-color: #172129;
  }
  &:nth-child(even) {
    background-color: #1a2733;
  }
}
</style>
