# BayMaxUI文档

注意：生成文档时，BaymaxSite 需要与 BaymaxUI 处于同级目录。



## 访问文档

### 访问动态文档


动态网站含定制化功能，需要服务器环境支持。

```
$ grunt

$ grunt open

```

打开浏览器访问 `http://127.0.0.1:8000`


### 访问静态文档

静态网站用于脱离服务器环境使用，无构建功能。

打开浏览器访问 public/index.html



### 生成文档

自动生成文档需要保证 BaymaxSite 与 BaymaxUI 处于同级目录。

执行以下命令会基于 config.js 生成文档所需要的数据：

```

// 1. 根据 config.js 中的配置生成数据到 data/*.js

// 2. 根据 views/*.ejs 生成静态页面到 public/*.html

$ grunt site

```

接着便可访问静态文档和动态网站


### 一些说明

数据配置在 config.js

` grunt site ` 包含两个任务

- `grunt generateDemoCodes ` 将使用配置 config.js 并抓取 BaymaxUI/demo/*.html 生成数据保存到 data/*.js 中

- `grunt generateStaticHtmls ` 将使用配置 config.js 和 data/*.js 的数据，转换 views/*.ejs 为静态页面，保存到 public/*.html 中

路由配置在 routes/index.js, 会使用配置 config.js 将 data/*.js 中的数据动态注入到 views/*.ejs 中


自动生成文档需要注意以下几点：

1. BaymaxUI/demo/*.html 按约定的 DOM 结构编写
2. config.js 配置编写无误

注意：

以下这些文件为自动生成，勿直接修改：

1. data/*
2. public/*.html (如需修改 UI，修改 views/*.ejs)







