module.exports = {
  // General Overrides
  "implicit-arrow-linebreak": "off",
  "consistent-return": "off",
  quotes: ["error", "double"],
  "space-unary-ops": ["error", { words: true, nonwords: true }],
  "class-methods-use-this": "off",
  "no-negated-in-lhs": "error",
  semi: ["error", "never"],

  // Custom overrides
  "no-console": "off",
  "import/order": [
    "error",
    {
      "newlines-between": "never",
      groups: [["builtin", "external", "internal"]],
    },
  ],
  "import/prefer-default-export": "off",
  "max-len": [
    "error",
    120,
    2,
    {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    },
  ],
  "max-lines": [
    "warn",
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    },
  ],
  "max-depth": ["warn", 4],
}
