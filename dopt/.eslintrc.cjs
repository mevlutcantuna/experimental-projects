module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "cypress.config.ts",
    "vite.config.ts",
    "vitest.config.ts",
    "vite-env.d.ts",
    "cypress",
    "tailwind.config.js",
    "postcss.config.js"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: "./",
    project: ["./tsconfig.json"],
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "react-refresh",
    "react",
    "react-hooks",
    "@typescript-eslint",
    "unused-imports"
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ],
    "@typescript-eslint/no-unsafe-return": "warn",
    "no-unused-vars": "warn", // Change this to "warn"
    "@typescript-eslint/no-unused-vars": "warn", // Change this to "warn",
    "@typescript-eslint/no-explicit-any": "off"
  }
};
