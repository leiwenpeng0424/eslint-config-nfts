import { defineConfig } from "@nfts/beats";

export default defineConfig({
  input: "./src/index.ts",
  bundle: [
    {
      input: "./src/index.ts",
      file: "./index.js",
      format: "cjs",
    },
  ],
});
