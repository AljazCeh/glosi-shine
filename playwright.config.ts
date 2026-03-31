import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "src/test",
  use: {
    baseURL: "http://localhost:4173",
    trace: "on-first-retry",
  },
});
