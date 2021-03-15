import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "index.js",
  output: {
    file: "dist/index.js",
    format: "es",
    exports: "named"
  },
  external: ["lodash", /lodash/],
  plugins: [resolve(), commonjs()]
};
