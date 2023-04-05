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
        let newCombination = [{ label: parentObject.label, index, hasChildren: true, ...parentObject }];

        newCombination = newCombination.concat(childCombination);
        newCombinationList.push(newCombination);
      });
    }
    else {
      newCombinationList = [[{ label: parentObject.label, index: idx, hasChildren: false, ...parentObject }]];
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

const findById = (array: any, id: any) => {
  for (const item of array) {
    if (item.id === id) return item;
    if (item.children?.length) {
      const innerResult: any = findById(item.children, id);
      if (innerResult) return innerResult;
    }
  }
}

const getLeavesOfNode = (data: any, id: any) => {
  let leaves = 1;
  let object = findById(data, id)
  if (!object) return leaves

  const getNumberOfLeaves = (arr: any) => {
    let count = 0;
    if (!arr.children || arr.children.length === 0) {
      count++
    }
    if (arr.children.length > 0) {
      arr.children.forEach((child: any) => {
        count += getNumberOfLeaves(child)
      })
    }
    return count
  }
  return getNumberOfLeaves(object)
}


const createTree = (arr: Array<any>, topItem = "Top") => {
  const node = (name: string, parent = null) => ({
    name,
    parent,
    children: []
  });
  const addNode = (parent: any, child: any) => {
    parent.children.push(child);

    return child;
  };
  const findNamedNode = (name: any, parent: any) => {
    for (const child of parent.children) {
      if (child.name === name) {
        return child
      }
      const found: any = findNamedNode(name, child);
      if (found) {
        return found
      }
    }
  };

  const top = node(topItem);
  let current: any;

  for (const children of arr) {
    current = top;
    for (const name of children) {
      const found: any = findNamedNode(name, current);
      current = found ? found : addNode(current, node(name, current?.name));
    }
  }

  return top;
}


export {
  isHasChidren,
  getDepth,
  getChildNumber,
  getAllChildOfLastNode,
  getCombinations,
  getChildByParentId,
  setLevelForTree,
  getLeavesOfNode
}
