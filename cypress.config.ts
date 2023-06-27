import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1600,
  viewportHeight: 900,
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
