import globals from "globals";
import pluginJs from "@eslint/js";
import module from "eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];

module.exports = {
  extends: "airbnb"
}
