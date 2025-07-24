//Starten mit npx eslint .
import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import testingLibrary from "eslint-plugin-testing-library";
import { defineConfig } from "eslint/config";


export default defineConfig([
  //ignorierte Dateien
  { ignores: ["package-lock.json",  "node_modules/" ]},


  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm", extends: ["markdown/recommended"] },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
  {
    files: ["**/*.test.marko", "**/__tests__/**/*.marko"],
    ...testingLibrary.configs["flat/marko"],
  },
]);

