import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

const folders = fs.readdirSync("./src", { withFileTypes: true });
const fileNames = folders
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const filePaths = fileNames.reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: `@/${curr === "src" ? curr : "src/" + curr}`,
  }),
  {}
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...filePaths,
    },
  },
});
