/*
 * @Author: mili
 * @Date: 2019-11-21 18:42:42
 * @LastEditTime: 2019-11-21 21:06:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Autohome/todos-vue/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  rules: {
    quotes: ["error", "double"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    semi: ["error", "always"],
    "no-unused-expressions": ["off", { "allowShortCircuit": true, "allowTernary": true }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
