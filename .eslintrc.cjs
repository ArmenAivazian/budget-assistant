// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'newline-before-return': 'warn',
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          ["^\\u0000"],     // Side effect imports
          ["^react$"],      // React
          ["^@?\\w"],       // Packages
          [".*types"],      // Types
          ["^.+\\.css$"],   // Styles 
          ["^.+\\.styles"], // Styles 
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"], // Located "../"
          ["^\\./(?=.*/)(?!/?$)", "^\\.\\./(?=.*/)(?!/?$)", "^\\./?$"], // 5. Located "./"
          ["^\\./"]         // 6. Other imports
        ]
      }
    ]
  },

}
