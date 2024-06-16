module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.tsx?$": "babel-jest"
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    "testEnvironment": "jsdom"
  };
  