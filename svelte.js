module.exports = {
  plugins: [
    "svelte3"
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    "import/no-duplicates": "off"
  }
}
