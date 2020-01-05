module.exports = {
  extends: ["plugin:vue/recommended"],
  rules: {
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "multiline": "never"
    }],
    "vue/multiline-html-element-content-newline": ["error", {
      "allowEmptyLines": true
    }]
  }
}
