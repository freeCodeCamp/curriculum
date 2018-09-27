var visit = require('unist-util-visit');

module.exports = attacher;

// Use these handlers to  maintain types
const protectedTypesHandlers = {
  challengeType: x => parseInt(x, 10)
};

function attacher() {
  return transformer;

  function transformer(tree, file) {
    visit(tree, 'yaml', visitor);

    function visitor(node) {
      return node.value
        .split('\n')
        .map(str => {
          const [key, value] = str.split(/:(.+)/);
          const protectedValue =
            key in protectedTypesHandlers
              ? protectedTypesHandlers[key](value)
              : value;
          return {
            [key.trim()]:
              typeof protectedValue === 'string'
                ? protectedValue.trim()
                : protectedValue
          };
        })
        .forEach(data => {
          file.data = { ...file.data, ...data };
        });
    }
  }
}
