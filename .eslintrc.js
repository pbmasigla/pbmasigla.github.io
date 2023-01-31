module.exports = {
    'env': {
      'browser': true,
      'es2021': true
    },
    'extends': [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
      'ecmaFeatures': {
        'tsx': true
      },
      'ecmaVersion': 12,
      'sourceType': 'module'
    },
    'plugins': [
      'react',
      'react-hooks',
      '@typescript-eslint',
      'simple-import-sort'
    ],
    'settings': {
      'react': {
        'version': 'detect'
      },
    },
    'rules': {
      'max-len': [0, {'code': 100}],
      'indent': [1, 2, {'SwitchCase': 1}],
      'linebreak-style': [
        'error',
        'unix'
      ],
      '@typescript-eslint/quotes': 0,
      'semi': 0,
      'array-bracket-spacing': [
        'error',
        'never'
      ],
      'no-undef': 0,
      'no-case-declarations': 0,
      'no-async-promise-executor': 0,
      'no-empty': 0,
      'no-mixed-spaces-and-tabs': 0, // disable rule
      '@typescript-eslint/ban-ts-ignore': 0,
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/ban-types': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-inferrable-types': 1,
      'react/no-unescaped-entities': 0,
      'react/prop-types': 0,
      'react/no-children-prop': 0,
      'react/jsx-key': 1,
      'no-prototype-builtins': 0,
      'no-extra-boolean-cast': 0,
      'no-trailing-spaces': 'error',

      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',

      'no-restricted-imports': ['error', {
        'patterns': [ {
          'group': ['.*', '..*', '!*.css'],
          'message': 'Please don\'t use relative imports. Aim to use components/*, pages/*, etc paths from the root'
        }]
      }]
    },
    'overrides': [
      {
        'files': ['src/**/*.{js,jsx,ts,tsx}'],
        'rules': {
          'simple-import-sort/imports': [
            'warn',
            {
              'groups': [
                // Node.js builtins. You could also generate this regex if you use a `.js` config.
                // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
                [
                  '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
                ],
                // Packages. `react` related packages come first.
                ['^react', '^@?\\w'],

                // Side effect imports.
                ['^\\u0000'],

                // external company imports
                ['^(@|@company|@ui|utils|config|vendored-lib)(/.*|$)'],

                // Components
                ['^components/', '^@?\\w'],

                // pages
                ['^pages', '^@?\\w'],

                // lib/hooks
                ['^lib/hooks', '^@?\\w'],

                // lib/types
                ['^lib/types', '^@?\\w'],

                // lib/utils
                ['^lib/utils', '^@?\\w'],

                // rest of lib
                ['^lib', '^@?\\w'],

                // redux
                ['^redux', '^@?\\w'],

                // assets
                ['^assets', '^@?\\w'],

                // metaserver helpers
                ['^metaserver_helpers', '^@?\\w'],

                // Parent imports. Put `..` last.
                ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                // Other relative imports. Put same-folder imports and `.` last.
                ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                // Style imports.
                ['^.+\\.s?css$'],
              ],
            },
          ],
        },
      },
      {
        'files': ['test-utils.tsx', '*.test.ts', '*test.tsx'],
        'rules': {
          'no-restricted-imports': 'off'
        }
      }
    ]
  };
