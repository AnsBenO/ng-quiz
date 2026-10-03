// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // 1. Enforcing Small, Focused Code Blocks
      "max-lines-per-function": ["warn", { "max": 50, "skipBlankLines": true, "skipComments": true }],
      "max-lines": ["warn", { "max": 250, "skipBlankLines": true }],
      "max-params": ["error", { "max": 3 }],

      // 2. Streamlining Control Flow
      "no-else-return": ["error", { "allowElseIf": false }],
      "consistent-return": "error",
      "complexity": ["warn", 10],

      // 3. Preventing "Dead" and Lazy Code
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "no-magic-numbers": ["warn", { "ignore": [0, 1], "enforceConst": true }],

      // 4. Modernizing Syntax & Safety
      "prefer-const": "error",
      "eqeqeq": ["error", "always"],
      "prefer-template": "error"
    }
  }
);
