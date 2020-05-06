module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  parser: "@typescript-eslint/parser",
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }
    }
  }
}
