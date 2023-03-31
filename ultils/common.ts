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

export {
  isHasChidren,
  getDepth,
  getChildNumber,
  getAllChildOfLastNode,
  getCombinations
  // flatArray
}
