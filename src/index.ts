import { Linter } from "eslint";
import reactRule from "./rules/react";
import styleRule from "./rules/styles";

export default {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
        node: true,
    },
    overrides: [reactRule, styleRule],
} as Linter.Config;
