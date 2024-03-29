```sh
yarn install
```

## Usage

```sh
yarn run start
```

## 项目目录结构
```markdown
react-project-template
├── .babelrc # babel配置
├──  Webpack # webpack公用配置目录
│ │  ├──plugins # 公用插件集合
│ │  ├──resolve # webpack resolve配置
│ │  ├──utils # webpack 工具类
│ │  ├──variable # webpack 变量配置
│ ├── webpack.base.js # Webpack 基础配置文件
│ ├── webpack.dev.js # Webpack 开发环境配置文件
│ └── webpack.prod.js # Webpack 生产环境配置文件
├── yarn.lock # 锁定 npm 包依赖版本文件
├── package.json
├── postcss.config.js # 自动兼容 CSS3 样式配置文件
├── .editorconfig # IDE格式化规范
├── .eslintignore  # eslint忽略文件配置
├── .eslintrc.js # eslint配置文件
├── .prettierignore # prettierc忽略文件配置
├── .prettierrc # prettierc配置文件
├── .husky # 配置git提交钩子
├── .commitlint.config.js # 配置git提交规范
├── tsconfig.eslint.js # eslint检查typescript配置项配置文件
├── eslintError.html # eslint报告文件
├── public # 存放html模板
├── README.md
├── src
│ ├── assets # 存放会被 Webpack 处理的静态资源文件：一般是自己写的 js、css 或者图片等静态资源
│ │ ├── fonts # iconfont 目录
│ │ ├── images # 图片资源目录
│ │ ├── css # 全局样式目录
│ │ │  ├── common.scss # 全局通用样式目录
│ │ │  ├── core.scss # 全局sass 变量目录,直接使用，不需要引用，全局已统一引入。
│ │ │  └── init.scss # 全局初始化css
│ │ └── js # 全局js
│ ├── common # 存放项目通用文件
│ │ ├── Resolution.ts # 布局适配配置中心
│ │ └── AppContext.ts # 全局App上下文
│ ├── components # 项目中通用的业务组件目录
│ ├── config # 项目配置文件
│ ├── pages # 项目页面目录
│ ├── typings # 项目中d.ts 声明文件目录
│ ├── types # 项目中声明文件
│ │ ├── service # 项目中服务相关声明文件
│ │ ├── enum.ts # 项目中枚举类型
│ │ ├── IContext.ts  # 全局App上下文声明
│ │ ├── IRedux.ts # redux相关声明
│ │ └── IRouterPage.ts # 路由相关声明
│ ├── uiLibrary # 组件库
│ ├── routes # 路由目录
│ │ ├── index.tsx # 路由配置入口文件
│ │ └── RouterUI.tsx # 路由转换
│ ├── services # 和后端相关的文件目录
│ │ ├── api # 调用后端接口定义目录
│ │ │ ├── index.ts
│ │ ├── axios.ts # 基于 axios 二次封装
│ │ ├── BaseService.ts # 基础请求服务类型
│ │ ├── ServerResponseManager.ts # 服务返回统一管理
│ │ ├── serviceConfig.ts # 服务地址配置文件
│ ├── store # redux 仓库
│ │ ├── actionCreaters # action创建与分发绑定
│ │ ├── action  # 项目中action
│ │ ├── reducers  # 项目中reducers
│ │ │  ├──history # 项目中路由相关history
│ │ ├── index.ts # 全局 store 获取
│ │ ├── connect.ts # react 页面与store 连接
│ ├── utils # 全局通用工具函数目录
│ ├── App.tsx # App全局
│ ├── index.tsx # 项目入口文件
│ ├── index.scss # 项目入口引入的scss
└── tsconfig.json # TS 配置文件
```