const isHasChidren = (data: any) => {
  if (!data?.chidlren) {
    return true;
  }
  return false
}

const getDepth = (data: any) => {
  let depth = 0;
  if (data.children) {
    data.children.forEach((child: any) => {
      const childrenDepth = getDepth(child)
      if (childrenDepth > depth) {
        depth = childrenDepth;
      }
    })
  }
  return depth + 1;
}

const getChildNumber = (data: any) => {
  let countChild = 1;
  if (data.children) {
    countChild = data.children.length;
    data.children.forEach((child: any) => {
      const countTmp = getChildNumber(child)
      if (countTmp > countChild) {
        countChild = countTmp;
      }
    })
  }
  return countChild;
}

const getAllChildOfLastNode = (data: any) => {
  if (!data) return 0
  let countChild = data.children.reduce((acc: any, child: any) => acc + child.children.length, 0);
  if (countChild === 0) countChild = data.children.length
  return countChild;
}

const getCombinations = (parentObject: any, idx: number) => {
  let childCombinationList: any[] = [];

  if (parentObject.children !== undefined) {
    parentObject.children.forEach((item: any, index: number) => {
      childCombinationList = childCombinationList.concat(getCombinations(item, index));
    });
  }

  if (parentObject.label !== undefined) {
    let newCombinationList: any[][] = [];

    if (childCombinationList.length > 0) {
      childCombinationList.forEach((childCombination, index) => {
        let newCombination = [{ label: parentObject.label, index, hasChildren: true }];

        newCombination = newCombination.concat(childCombination);
        newCombinationList.push(newCombination);
      });
    }
    else {
      newCombinationList = [[{ label: parentObject.label, index: idx, hasChildren: false }]];
    }

    return newCombinationList;
  }
  else {
    return childCombinationList;
  }
}

const setLevelForTree = (data: any, key: string) => {
  let parentLevel: any[] = []

  data.map((parent: any) => {
    const { key } = parent
    if (!parentLevel.includes(key)) {
      parentLevel.push(key)
    }
  })

  let result = data.map((parent: any) => {
    const { key } = parent
    parent.level = parentLevel.indexOf(key)
    return parent
  })
  return result
}

const getChildByParentId = (data: any, parentId: number | null, parentKey: string) => {
  let result: any[] = [];
  if (!data) return result;
  data.forEach((child: any) => {
    if (child[parentKey] === parentId) result.push(child)
  })
  return result
}

const getLeafNumber = (data: any, key: string, parentId: any) => {
  if (!data) return 0
  let result = 0
  let rootItem = []

}

export {
  isHasChidren,
  getDepth,
  getChildNumber,
  getAllChildOfLastNode,
  getCombinations,
  getChildByParentId,
  setLevelForTree,
  getLeafNumber
}
