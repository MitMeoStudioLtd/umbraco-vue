module.exports = {
    "extends": "airbnb-base",
    rules: {
      "global-require": 0,
      "import/no-unresolved": 0,
      "no-param-reassign": 0,
      "no-shadow": 0,
      "import/extensions": 0,
      "import/newline-after-import": 0,
      "no-multi-assign": 0,
      // allow debugger during development
      "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
      "no-console": 0,
      "linebreak-style": 0,
      "import/prefer-default-export": 0,
      "import/no-extraneous-dependencies": 0,
      "comma-dangle": 0,
      "arrow-parens": 0,
      "no-bitwise": 0
    }
};