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
          { label: 'もみの木サンシャインパーク', children: [{ label: 'もみの木サンシャインパーク4', children: [] }, { label: 'もみの木サンシャインパーク4', children: [] }] },
          { label: 'もみの木サンシャインパーク', children: [{ label: 'もみの木サンシャインパーク4', children: [] }, { label: 'もみの木サンシャインパーク4', children: [] }] }
        ],
      },
      {
        label: 'ベトナム',
        children: [
          { label: 'もみの木サンシャインパーク1', children: [] },
          { label: 'もみの木サンシャインパーク1', children: [{ label: 'もみの木サンシャインパーク1', children: [] }] }],
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
        children: [{ label: '発電所B', children: [] }, { label: '発電所E', children: [] }, { label: '発電所F', children: [] }],
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
