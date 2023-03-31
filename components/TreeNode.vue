<template>
  <div>
    <div
      :class="[
        'tree-col',
        'flex justify-center align-center',
        dataNode.label ? '' : 'col-no-data',
        totalChild ? 'col-data' : '',
        firstData ? 'col-data-first' : '',
        lastData ? 'col-data-last' : '',
      ]"
    >
      <template v-if="hasCheckBox">
        <span class="line-node"></span>
        <input type="checkbox" />
      </template>
      {{ dataNode.label }}
    </div>
    <template v-if="totalChild > 1">
      <div
        v-for="key in totalChild - 1"
        :key="key"
        :class="['tree-col col-no-data', lastData ? 'col-data-last' : '']"
      ></div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TreeNode',
  props: {
    dataNode: {
      type: Object,
      default: () => ({
        label: '',
      }),
    },
    isRootNode: {
      type: Boolean,
      default: false,
    },
    depth: {
      type: Number,
      default: 0,
    },
    hasCheckBox: {
      type: Boolean,
      default: false,
    },
    totalChild: {
      type: Number,
      default: 0,
    },
    firstData: {
      type: Boolean,
      default: false,
    },
    lastData: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
