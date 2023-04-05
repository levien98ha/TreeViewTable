const treeViewData = [
  {
    id: 1,
    label: '株式会社四電工',
    children: [
      {
        id: 2,
        label: '四国',
        children: [
          { id: 3, label: 'サンシャインパーク久礼', children: [] },
          { id: 4, label: 'サンシャインパーク佐川', children: [] },
          { id: 5, label: 'サンシャインパーク加茂', children: [] },
          { id: 6, label: 'サンシャインパーク北条', children: [] },
          { id: 7, label: 'サンシャインパーク大屋冨', children: [] },
          { id: 8, label: 'サンシャインパーク箸蔵', children: [] },
          { id: 9, label: 'サンシャインパーク豊浜', children: [] },
        ],
      },
      {
        label: '中国',
        id: 10,
        children: [
          { id: 11, label: 'もみの木サンシャインパーク', children: [] },
          { id: 12, label: 'もみの木サンシャインパーク', children: [{ id: 13, label: 'もみの木サンシャインパーク4', children: [] }, { id: 14, label: 'もみの木サンシャインパーク4', children: [] }] },
          { id: 15, label: 'もみの木サンシャインパーク', children: [{ id: 16, label: 'もみの木サンシャインパーク4', children: [] }, { id: 17, label: 'もみの木サンシャインパーク4', children: [] }] }
        ],
      },
      {
        id: 18,
        label: 'ベトナム',
        children: [
          { id: 19, label: 'もみの木サンシャインパーク1', children: [] },
          { id: 20, label: 'もみの木サンシャインパーク1', children: [{ id: 21, label: 'もみの木サンシャインパーク1', children: [] }] }],
      },
    ],
  },
  {
    id: 22,
    label: 'ニトリ株式会社',
    children: [
      {
        id: 23,
        label: '東京',
        children: [
          { id: 24, label: '発電所A', children: [] },
          { id: 25, label: '発電所B', children: [] },
          { id: 26, label: '発電所C', children: [{ id: 31, label: '発電所G', children: [] }, { id: 32, label: '発電所H', children: [] }] },
        ],
      },
      {
        id: 27,
        label: '関西',
        children: [{ id: 28, label: '発電所B', children: [] }, { id: 29, label: '発電所E', children: [] }, { id: 30, label: '発電所F', children: [] }],
      },
    ],
  },
]

const treeStructureData = [
  { id: 1, parentId: null, isDisabled: false, isChecked: false, name: '株式会社四電工' },
  { id: 3, parentId: 1, isDisabled: false, isChecked: false, name: '四国' },
  { id: 4, parentId: 1, isDisabled: false, isChecked: false, name: '中国' },
  { id: 5, parentId: 1, isDisabled: false, isChecked: false, name: 'ベトナム' },
  { id: 6, parentId: 3, isDisabled: false, isChecked: false, name: 'サンシャインパーク久礼' },
  { id: 7, parentId: 3, isDisabled: false, isChecked: false, name: 'サンシャインパーク佐川' },
  { id: 8, parentId: 3, isDisabled: false, isChecked: false, name: 'サンシャインパーク加茂' },
  { id: 9, parentId: 3, isDisabled: false, isChecked: false, name: 'サンシャインパーク北条' },
  { id: 10, parentId: 3, isDisabled: false, isChecked: false, name: 'サンシャインパーク大屋冨' },
  { id: 11, parentId: 3, isDisabled: false, isChecked: false, name: 'サンシャインパーク箸蔵' },
  { id: 12, parentId: 3, isDisabled: false, isChecked: false, name: 'サンシャインパーク豊浜' },
  { id: 13, parentId: 4, isDisabled: false, isChecked: false, name: 'もみの木サンシャインパーク' },
  { id: 14, parentId: 4, isDisabled: false, isChecked: false, name: 'もみの木サンシャインパーク' },
  { id: 15, parentId: 14, isDisabled: false, isChecked: false, name: 'もみの木サンシャインパーク' },
  { id: 25, parentId: 14, isDisabled: false, isChecked: false, name: 'もみの木サンシャインパーク' },
  { id: 16, parentId: 5, isDisabled: false, isChecked: false, name: 'もみの木サンシャインパーク1' },
  { id: 17, parentId: 5, isDisabled: false, isChecked: false, name: 'もみの木サンシャインパーク1' },
  { id: 2, parentId: null, isDisabled: false, isChecked: false, name: 'ニトリ株式会社' },
  { id: 18, parentId: 2, isDisabled: false, isChecked: false, name: '東京' },
  { id: 19, parentId: 2, isDisabled: false, isChecked: false, name: '関西' },
  { id: 20, parentId: 18, isDisabled: false, isChecked: false, name: '発電所A' },
  { id: 21, parentId: 18, isDisabled: false, isChecked: false, name: '発電所B' },
  { id: 22, parentId: 18, isDisabled: false, isChecked: false, name: '発電所C' },
  { id: 23, parentId: 19, isDisabled: false, isChecked: false, name: '発電所B' },
  { id: 24, parentId: 19, isDisabled: false, isChecked: false, name: '発電所E' },
]

export default { treeViewData, treeStructureData };
