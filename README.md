# Nuxt 3 新手学习指南

查看 [Nuxt3 新手学习笔记](https://nuxt.com/docs/getting-started/introduction) 来了解更多

## Setup[设置]

Make sure to install the dependencies:[确保你安装的依赖项]

```bash
# npm
npm install

```

## Development Server

补包完成后，启动项目，项目预览地址 `http://localhost:3000`:

```bash
# npm
npm run dev

```

## Production

Build the application for production:[打包后部署到自己的服务器上]

```bash
# npm
npm run build

```

Locally preview production build: [生产环境下的预览]

```bash
# npm
npm run preview

```

如果不会请看 [部署文档](https://nuxt.com/docs/getting-started/deployment) for more information.

## directory
  # assets/[存放样式表{私有}]
      
  # components/[放置所有vue组件]
  
  # composables/[可共享的]
  
  # pages/[页面位置:{ps:Nuxt会自动默认每个页面的路由}]
  
  # layouts/[布局文件]
  
  # public/[公共文件夹]

  # plugins/[插件]

  # middleware/[中间件]

  # Modules/[模块/@Nuxt/conentt]
  
  # state management/[状态管理]

  # stores/[存储]
