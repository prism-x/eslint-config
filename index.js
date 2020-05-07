module.exports = {
  parser: 'babel-eslint',
  extends: ["standard"],
  rules: {
    "prefer-template": "warn",
    "padded-blocks": "off",
    "import/order": ["error", {"newlines-between": "never"}],
    "import/prefer-default-export": "off",
    'operator-assignment': ["warn", "always"],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    "comma-dangle": ["error", "always-multiline"],
    'max-lines': ['warn', 200],
    complexity: ['warn', 10],
    'max-nested-callbacks': ['warn', 2],
    'max-depth': ['warn', 3],
    'no-param-reassign': 'warn',
  },
}
