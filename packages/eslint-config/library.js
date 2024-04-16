const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "prettier", "eslint-config-turbo"],
  plugins: ["only-warn"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
  ],
  rules: {
    // Add the specific rules here
    quotes: ["error", "single"], // enforce single quotes
    semi: "off", // disable semicolon rule
    "@typescript-eslint/semi": ["error", "never"], // enforce no semicolons for TypeScript
    "no-empty-function": "error", // enforce no empty functions
    "no-unused-vars": "error", // enforce no unused imports
    "no-console": "error", // disallow console.log() and similar methods
    "@typescript-eslint/no-explicit-any": "error", // disallow the use of 'any' type
  },
};
