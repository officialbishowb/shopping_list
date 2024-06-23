const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://localhost:8081",
    env: {
      syncUrl: "http://admin:password@127.0.0.1:5984/shopping_list",
    },
  },
});
