import globals from "globals";
import pluginJs from "@eslint/js";

import mochaPlugin from 'eslint-plugin-mocha';

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,

  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },

  {
    files: ['**/*.test.js'],
    mochaPlugin.configs.flat.recommended
  },
];
