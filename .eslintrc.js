module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es2021": true,
        "jest/globals": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns":["babel.config.js", "jest.config.js"],
    "plugins": ["jest"],
    "rules": {
    }
}
