let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]

/** 不考虑性能 */
function flatToTree(arr) {
  let dep = []
  arr.forEach(item => {
    let parent = arr.find(i => i.id === item.pid)
    if (!parent) {
      dep.push(item)
    } else {
      parent.children ? parent.children.push(item) : parent.children = [item]
    }
  })
  return dep
}

/** 只循环一遍 */
function arrayToTree(arr) {
  const result = []; 
  const itemMap = {};
  arr.forEach(item => {
    const { id, pid } = item
    itemMap[id] = { ...item, children: [] }
    const treeItem = itemMap[id]
    if (!pid) {
      result.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = { children: [] }
      }
      itemMap[pid].children.push(treeItem)
    }
  })
  return result;
}
