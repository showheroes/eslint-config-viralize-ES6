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
        'object-shorthand': 'warn',
        radix: ['error', 'as-needed'],
        'space-before-function-paren': ['error', 'always']
    }
};
