const base = require("./base")

module.exports = {
  ...base,
  ...{
    // React overrides
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/no-danger": "off",
    "react/jsx-one-expression-per-line": "off",

    // should be disabled on typescript
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    // Append 'tsx' to Airbnb 'react/jsx-filename-extension' rule
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
  }
}
