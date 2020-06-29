module.exports = {
    extends: [
        'eslint:recommended',
        'airbnb',
        'viralize-common'
    ],
    rules: {
        'arrow-body-style': 'off',
        'arrow-parens': ['error', 'always'],
        'func-names': ['error', 'as-needed'],
        'import/no-extraneous-dependencies': [
            'error', { devDependencies: true }
        ],
        'import/prefer-default-export': 'off',
        'object-shorthand': 'warn',
        radix: ['error', 'as-needed'],
        'space-before-function-paren': ['error', 'always'],
        // airbnb overrides
        'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 0 }],
        'max-classes-per-file': 'off'
    }
};
