module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "airbnb"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jest", "react-hooks"],
  ignorePatterns: ["serviceWorker.js", "docker/", "node_modules/"],
  rules: {
    "react/jsx-filename-extension": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-unescaped-entities": 0,
    "react/jsx-one-expression-per-line": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": "error",
    "jsx-a11y/label-has-associated-control": ["error", { assert: "htmlFor" }],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "import/no-named-as-default": 0,
    quotes: ["error", "double"],
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "implicit-arrow-linebreak": 0,
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "before", ":": "before" } }
    ],
    "function-paren-newline": 0,
    "object-curly-newline": ["error", { consistent: true }],
    "no-underscore-dangle": 0,
    "no-return-assign": ["error", "except-parens"],
    "no-confusing-arrow": 0,
    "prefer-promise-reject-errors": 0,
    "no-unused-expressions": ["error", { allowTernary: true }],
    "linebreak-style": 0
  }
};
