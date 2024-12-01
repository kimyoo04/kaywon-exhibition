module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  ignorePatterns: ['node_modules/*', 'public/mockServiceWorker.js', 'generators/*'],
  extends: ['eslint:recommended', 'next/core-web-vitals'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          typescript: {},
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
        'plugin:tailwindcss/recommended',
        'plugin:vitest/legacy-recommended',
      ],
      rules: {
        '@next/next/no-img-element': 'off',
        'import/no-restricted-paths': [
          'error',
          {
            zones: [
              // features 간의 교차 임포트 방지
              {
                target: './src/features/auth',
                from: './src/features',
                except: ['./auth'],
              },
              {
                target: './src/features/comment',
                from: './src/features',
                except: ['./comment'],
              },
              {
                target: './src/features/dashboard',
                from: './src/features',
                except: ['./dashboard'],
              },
              {
                target: './src/features/post',
                from: './src/features',
                except: ['./post'],
              },
              {
                target: './src/features/search',
                from: './src/features',
                except: ['./search'],
              },
              {
                target: './src/features/user',
                from: './src/features',
                except: ['./user'],
              },
              // shared 모듈은 최하위 계층으로 모든 상위 계층에서 접근 불가
              {
                target: './src/shared',
                from: [
                  './src/entities',
                  './src/features',
                  './src/modules',
                  './src/pages',
                  './src/app',
                  './app',
                ],
              },
              {
                target: './src/entities',
                from: ['./src/features', './src/modules', './src/pages', './src/app', './app'],
              },
              {
                target: './src/features',
                from: ['./src/modules', './src/pages', './src/app', './app'],
              },
              {
                target: './src/modules',
                from: ['./src/pages', './src/app', './app'],
              },
              {
                target: './src/pages',
                from: ['./src/app', './app'],
              },
              {
                target: './src/app',
                from: ['./app'],
              },
              // file based routing을 위한 ./app 폴더는 ./src/app, ./src/pages에서만 접근 가능
            ],
          },
        ],

        'import/no-cycle': 'error',
        'linebreak-style': ['error', 'unix'],
        'react/prop-types': 'off',
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-empty-object-type': ['off'],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'tailwindcss/no-custom-classname': 'off',
      },
    },
    {
      plugins: ['check-file'],
      files: ['src/**/*'],
      rules: {
        'check-file/filename-naming-convention': [
          'error',
          {
            '**/*.{ts,tsx}': 'KEBAB_CASE',
          },
          {
            ignoreMiddleExtensions: true,
          },
        ],
        'check-file/folder-naming-convention': [
          'error',
          {
            '!(src/app)/**/*': 'KEBAB_CASE',
            '!(**/__tests__)/**/*': 'KEBAB_CASE',
          },
        ],
      },
    },
  ],
}