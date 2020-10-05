module.exports = {
  testRegex: '.test.(js?|jsx?)$',
  transform: {
    '^.+\\.js?|.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};
