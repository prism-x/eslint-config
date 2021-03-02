const rules = require("./src/overrides/base")

module.exports = {
  extends: ["plugin:dprint/recommended"],
  rules: {
    "dprint/dprint": [
      "error",
      {
        config: {
          indentWidth: 2,
          semiColons: "asi",
          "arrowFunction.useParentheses": "force",
          lineWidth: 100,
          singleBodyPosition: "sameLine",
        },
      },
    ],
  }
}
