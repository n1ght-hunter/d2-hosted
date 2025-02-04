export default [
    {
        root: true,
        env: { browser: true, es2020: true },

        extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
        ignorePatterns: ["dist", ".eslintrc.mjs"],

        overrides: [],
        parser: "@typescript-eslint/parser",
        parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        },
        plugins: ["react", "@typescript-eslint", "react-refresh"],
        rules: {
            "react-refresh/only-export-components": ["warn", { "allowConstantExport": true }],
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": "warn"
        }
    }
];