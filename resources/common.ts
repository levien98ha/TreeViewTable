const treeViewData = [
  {
    label: '株式会社四電工',
    children: [
      {
        label: '四国',
        children: [
          { label: 'サンシャインパーク久礼', children: [] },
          { label: 'サンシャインパーク佐川', children: [] },
          { label: 'サンシャインパーク加茂', children: [] },
          { label: 'サンシャインパーク北条', children: [] },
          { label: 'サンシャインパーク大屋冨', children: [] },
          { label: 'サンシャインパーク箸蔵', children: [] },
          { label: 'サンシャインパーク豊浜', children: [] },
        ],
      },
      {
        label: '中国',
        children: [
          { label: 'もみの木サンシャインパーク', children: [] },
          { label: 'もみの木サンシャインパーク', children: [{ label: 'もみの木サンシャインパーク4', children: [] }] }
        ],
      },
      {
        label: '中国1',
        children: [
          { label: 'もみの木サンシャインパーク1', children: [] },
          { label: 'もみの木サンシャインパーク1', children: [] }],
      },
    ],
  },
  {
    label: 'ニトリ株式会社',
    children: [
      {
        label: '東京',
        children: [
          { label: '発電所A', children: [] },
          { label: '発電所B', children: [] },
          { label: '発電所C', children: [] },
        ],
      },
      {
        label: '関西',
        children: [{ label: '発電所B', children: [] }, { label: '発電所E', children: [] }],
      },
    ],
  },
]

// const treeStructureData = [
//   { id: 1, parentId: null, isDisabled: false, isChecked: true, name: '株式会社四電工' },
//   { id: 2, parentId: null, isDisabled: false, isChecked: false, name: 'ニトリ株式会社' },
// ]

export default { treeViewData };
