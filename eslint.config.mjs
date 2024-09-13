import js from "@eslint/js";
import reactRecommended from "eslint-plugin-react/configs/all.js";
export default [
    js.configs.recommended,
    {
        rules: {
            "semi": "error",
            "prefer-const": "error",
            "no-unused-vars": "warn",
            "no-undef": "off",
            "quotes": ["error", "double"]
        }
    },
    {
        languageOptions: {
            ...reactRecommended.languageOptions,
            ecmaVersion: "latest",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            }
        }
    },
];
