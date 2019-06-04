import { createElement } from 'react';

const Tree = ({ data, getKey, getChildren, renderItem, level = 0 }) => {
  const children = getChildren(data) || [];

  return createElement(renderItem, {
    key: getKey(data),
    ...data,
    ...(!!children.length && {
      children: children.map(node =>
        createElement(Tree, {
          data: node,
          level: level + 1,
          getKey,
          getChildren,
          renderItem
        })
      )
    }),

    level
  });
};

export default Tree;
