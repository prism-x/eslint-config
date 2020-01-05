module.exports = {
  parser: 'babel-eslint',
  extends: ["standard"],
  rules: {
    "prefer-template": "warn",

    "import/order": ["error", {"newlines-between": "always"}],
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",

    'operator-assignment': ["warn", "always"],
    "space-before-function-paren": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"],
    'max-lines': ['warn', 200],
    complexity: ['warn', 10],
    'max-nested-callbacks': ['warn', 2],
    'max-depth': ['warn', 3],
    'no-param-reassign': 'warn',
  },
}
