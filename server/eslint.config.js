import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                project: "./tsconfig.json",
                sourceType: "module",
                ecmaVersion: "latest",
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
            prettier,
        },
        rules: {
            "prettier/prettier": "error",
            "@typescript-eslint/no-unused-vars": "warn",
        },
        ignores: ["dist", "node_modules"],
    },
];
