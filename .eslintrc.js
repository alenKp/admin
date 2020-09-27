module.exports = {
  root: true,
  globals: {
    process: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  plugins: ['babel', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 80,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false
      }
    ],
    // 使用2个空格缩进
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    // 是否能使用debugger,开发可以，线上不可以
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    // switch必须提供 default
    'default-case': 'error',
    // 禁止扩展原生属性
    'no-extend-native': 'error',
    // 禁止一成不变的循环,防止代码出现死循环
    'no-unmodified-loop-condition': 'error',
    // 禁止在变量未声明之前使用
    'no-use-before-define': 'error',
    // 代码后不使用分号
    semi: ['warn', 'never'],
    // 注释 // 或 /* 之后必须有一个空格
    'spaced-comment': ['warn', 'always'],
    // 禁止重复导入模块，对于同一模块内内容，应一次导入
    'no-duplicate-imports': 'warn',
    // 必须使用let 或 const, 不能使用var
    'no-var': 'warn',
    // js中应使用单引号替代双引号
    quotes: ['warn', 'single'],
    // 要求大括号内必须有空格
    'object-curly-spacing': ['warn', 'always'],
    // 数组前后不需要添加空格
    'array-bracket-spacing': ['warn', 'never'],
    // 箭头函数前后必须要有空格
    'arrow-spacing': [
      'warn',
      {
        before: true,
        after: true
      }
    ],
    // 代码中可出现console
    'no-console': 'off',
    // 正则中可以出现控制字符
    'no-control-regex': 'off',
    // 禁止未使用申明
    'no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        // 可以声明未使用的h，方便jsx
        argsIgnorePattern: 'h'
      }
    ],
    // 行注释必须在行上面
    'line-comment-position': ['off', { position: 'above' }],
    // 一个函数最多能指定4个参数
    'max-params': ['warn', { max: 4 }],
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    // 构造函数必须首字母大写
    // "new-cap":['error', {"newIsCap": true} ],
    // vue 属性顺序
    'vue/attributes-order': [
      'warn',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      }
    ],
    // 一行最多几个属性
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    // 组件名称必须是大驼峰
    'vue/name-property-casing': ['error', 'PascalCase'],
    // vue Html元素单标签关闭方式
    'vue/html-self-closing': [
      'error',
      {
        html: { normal: 'never', void: 'always' },
        svg: 'always',
        math: 'always'
      }
    ],
    // 组件在template内必须使用 kebab-case 格式
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    // template 内必须使用 ===
    'vue/eqeqeq': 'warn',
    // scss deep 写法必须时 ::v-deep , 需要在这一处将 :v-deep 添加为例外
    // "selector-pseudo-element-no-unknown":["error","v-deep"],
    // 允许使用v-html
    'vue/no-v-html': 0,
    // 禁用隐式的eval() 比如 setTimeout('alert();', 100)
    'no-implied-eval': 'error'
  }
}
