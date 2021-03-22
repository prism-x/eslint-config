module.exports = {
  extends: [
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": ["error", { semi: false, printWidth: 100 }],
  },
}
