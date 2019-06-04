export const toTreeV1 = (arr, parentid) => {
  let output = [];

  for (const obj of arr) {
    if (obj.parent === (parentid || 1)) {
      const newObj = { ...obj };
      var children = toTreeV1(arr, obj.id);
      if (children.length) newObj.children = children;

      output.push(newObj);
    }
  }
  return parentid
    ? output
    : {
        ...arr.find(({ parent }) => !parent),
        children: output
      };
};

export const toTreeV2 = (items, parentId) =>
  items
    .filter(item => item.parent === (parentId || 1))
    .map(item => ({
      ...item,
      children: toTreeV2(items, item.id)
    }))
    .reduce(
      (stack, node) => ({
        ...stack,
        children: [...stack.children, node]
      }),
      {
        ...items.find(({ parent }) => !parent),
        children: []
      }
    );
