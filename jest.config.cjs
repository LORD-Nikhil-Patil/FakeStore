module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.tsx?$": "babel-jest",
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", 'json', 'node'],
    "testEnvironment": "jsdom"
  };
  