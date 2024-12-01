module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // 소스 파일이 해당 경로에서 가장 가까운 tsconfig.json를 기반으로 해석되도록 설정
    project: true,
    // 상위 경로에서 상위 tsconfig.json 파일을 찾는 것을 막아줍니다.
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      // 현재 React 버전을 명시합니다.
      // 명시하지 않을 경우(기본값 'detect') React 라이브러리 전체를 불러오므로
      // 린트 과정에서 속도가 느려질 수 있습니다.
      // 예: '16.9', '17.0', '18.0' 등
      version: '18.3',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: ['node_modules/*', 'public/mockServiceWorker.js', 'generators/*'],
  extends: ['eslint:recommended', 'next/core-web-vitals'],
  globals: { React: true },
  overrides: [
    {
      files: ['app/**/*.{tsx,ts}', 'src/**/*.{tsx,ts}'],
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
      parser: '@typescript-eslint/parser',
      rules: {
        '@next/next/no-img-element': 'off',

        'jsx-a11y/anchor-is-valid': 'off',
        // 유효한 aria-* 속성만 사용
        'jsx-a11y/aria-props': 'warn',
        // 유효한 aria-* 상태/값만 사용
        'jsx-a11y/aria-proptypes': 'warn',
        // DOM에서 지원되는 role, ARIA만 사용
        'jsx-a11y/aria-unsupported-elements': 'warn',
        // 필수 ARIA 속성이 빠져있는지 체크
        'jsx-a11y/role-has-required-aria-props': 'warn',
        // ARIA 속성은 지원되는 role에서만 사용
        'jsx-a11y/role-supports-aria-props': 'warn',
        // DOM에 정의되지 않은 속성을 사용했는지 체크 (emotion css 속성 등 예외 케이스가 있으므로 기본은 off)

        'no-unused-vars': 'off', // @typescript-eslint/no-unused-vars 충돌 방지
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-empty-object-type': ['off'],
        '@typescript-eslint/naming-convention': [
          'warn',
          // camelCase 변수, PascalCase 변수, UPPER_CASE 변수 허용
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
          },
          // camelCase 함수, PascalCase 함수 허용
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
          },
          // PascalCase 클래스, interfaces, type aliases, enums 허용
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          // interface 앞에 I 사용 불가
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: false,
            },
          },
          // typeAlias 앞에 T 사용 불가
          {
            selector: 'typeAlias',
            format: ['PascalCase'],
            custom: {
              regex: '^T[A-Z]',
              match: false,
            },
          },
          // typeParameter 앞에 T 사용 불가
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
            custom: {
              regex: '^T[A-Z]',
              match: false,
            },
          },
        ],

        'react/react-in-jsx-scope': 'off',
        'react/no-unknown-property': 'off',
        // 정의한 props 중에 빠진게 있는지 체크 (NextPage 등 일부 추상화 컴포넌트에서 복잡해지므로 기본은 off)
        'react/prop-types': 'off',

        'linebreak-style': ['error', 'unix'],
        'import/namespace': ['error', { allowComputed: true }],
        'import/no-cycle': 'error',
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
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

        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'tailwindcss/no-custom-classname': 'off',
      },
    },
    {
      files: ['src/**/*.{tsx,ts}'],
      plugins: ['check-file', 'no-relative-import-paths'],
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
        // 같은 폴더인 경우를 제외하고 import 경로는 항상 절대 경로를 사용
        'no-relative-import-paths/no-relative-import-paths': [
          'warn',
          // prefix를 지정하면, fix 실행 시 eslint가 자동으로 prefix를 넣어서 import 경로를 고쳐줍니다.
          { allowSameFolder: true, rootDir: 'src', prefix: '@' },
        ],
      },
    },
  ],
}
