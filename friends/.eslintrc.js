module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "no-unused-expressions": "off",
        "prefer-template": "off",
        "import/no-cycle": 0,
        "no-plusplus": 0,
        "no-else-return": 0,
        "no-nested-ternary": 0,
        "no-param-reassign": 0,
        "import/prefer-default-export": 0,
        "react/jsx-props-no-spreading": "off",
        "arrow-body-style": "off",
        "jsx-quotes": [
            1,
            "prefer-double"
        ]
    },
};