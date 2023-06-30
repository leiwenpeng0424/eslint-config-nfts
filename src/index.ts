/**  @type {import('@types/eslint').Linter.Config} */
export default {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
    node: true,
  },
  ignorePatterns: ["types", "dist", "docs", ".temp", "typings"],
  overrides: [
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
      plugins: ["@typescript-eslint"],
      rules: {},
    },
    {
      files: ["**/*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
      ],
      plugins: ["@typescript-eslint", "react", "hooks"],
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        "react/button-has-type": "off",
        "react/default-props-match-prop-types": "off",
        "react/destructuring-assignment": "off",
        "react/display-name": "off",
        "react/forbid-component-props": "off",
        "react/forbid-dom-props": "off",
        "react/forbid-elements": "off",
        "react/forbid-foreign-prop-types": "off",
        "react/forbid-prop-types": "off",
        "react/function-component-definition": [
          1,
          {
            namedComponents: "function-declaration",
            unnamedComponents: "arrow-function",
          },
        ],
        "react/hook-use-state": 1,
        "react/jsx-boolean-value": "off",
        "react/jsx-closing-bracket-location": [
          1,
          {
            nonEmpty: "tag-aligned",
            selfClosing: "tag-aligned",
          },
        ],
        "react/jsx-closing-tag-location": 1,
        "react/jsx-curly-brace-presence": [
          2,
          {
            props: "always",
            children: "always",
            propElementValues: "always",
          },
        ],
        "react/jsx-curly-newline": [
          2,
          {
            multiline: "consistent",
            singleline: "consistent",
          },
        ],
        "react/jsx-curly-spacing": [
          2,
          {
            when: "never",
            attributes: {
              allowMultiline: false,
            },
            children: false,
            objectLiterals: "always",
          },
        ],
        "react/jsx-equals-spacing": [2, "never"],
        "react/jsx-filename-extension": [
          2,
          {
            extensions: [".tsx", ".jsx"],
          },
        ],
        "react/jsx-first-prop-new-line": [1, "always"],
        "react/jsx-fragments": 0,
        "react/jsx-handler-names": [
          1,
          {
            eventHandlerPrefix: "handle",
            eventHandlerPropPrefix: "on",
            checkLocalVariables: false,
            checkInlineFunction: false,
          },
        ],
        "react/jsx-indent-props": [1],
        "react/jsx-indent": [1],
        "react/jsx-key": [
          2,
          {
            warnOnDuplicates: true,
            checkFragmentShorthand: true,
            checkKeyMustBeforeSpread: true,
          },
        ],
        "react/jsx-max-depth": [1, { max: 6 }],
        "react/jsx-newline": [
          1,
          {
            prevent: true,
          },
        ],
        "react/jsx-no-constructed-context-values": 2,
        "react/jsx-no-leaked-render": 2,
        // 如果想强制开启多语言，可以开启该选项
        "react/jsx-no-literals": 0,
        "react/jsx-no-target-blank": [2, {}],
        "react/jsx-no-useless-fragment": 2,
        // "react/jsx-one-expression-per-line": [2, { allow: "none" }],
        "react/jsx-pascal-case": [
          2,
          {
            allowLeadingUnderscore: false,
          },
        ],
        "react/jsx-props-no-multi-spaces": 1,
        "react/jsx-sort-props": 1,
        "react/jsx-tag-spacing": [
          1,
          {
            closingSlash: "never",
            beforeSelfClosing: "always",
            afterOpening: "never",
            beforeClosing: "allow",
          },
        ],
        "react/jsx-wrap-multilines": [
          1,
          {
            declaration: "parens-new-line",
            assignment: "parens-new-line",
            return: "parens-new-line",
            arrow: "parens-new-line",
            condition: "parens-new-line",
            logical: "parens-new-line",
            prop: "parens-new-line",
          },
        ],
        "react/no-array-index-key": 1,
        "react/no-arrow-function-lifecycle": "off",
        "react/no-danger": 2,
        "react/no-multi-comp": [
          0,
          {
            ignoreStateless: true,
          },
        ],
        "react/no-object-type-as-default-prop": "off",
        "react/no-unstable-nested-components": [
          "error",
          {
            allowAsProps: false,
          },
        ],
        "react/react-in-jsx-scope": "off",
        "react/self-closing-comp": "warn",
      },
    },
  ],
};
