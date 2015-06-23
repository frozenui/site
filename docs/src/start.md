<h1>快速开始</h1>
       <div class="content">
            <p>
               Frozen提供的UI组件是目前QQ会员前端开发组所用的通用样式库。遵循手Q样式规范，
               基本样式使用离线包的方式减少请求，并提供定制的方案。
           </p>
           <p>
               查看<a href="https://github.com/frozenui/frozenui/wiki/History">历史版本修改记录</a>,
               查看<a href="https://github.com/frozenui/frozenui/wiki/CSS-Guide">css规范</a>
           </p>
           <p>
               查看手机上的效果<a href="http://frozenui.github.io/demo/index.html">demo</a>
           </p>
           <h2 id="install">下载安装</h2>
           <h4 id="最新引用方式">最新引用方式</h4>
           <p>1.下载完整版 <a href="https://github.com/frozenui/frozenui/archive/1.3.0.zip">https://github.com/frozenui/frozenui/archive/1.3.0.zip</a>
           <p> </p>
           <p>2.定制化下载 <a href="https://github.com/customize.html">https://github.com/customize.html</a></p>
           <p>
               3.访问我们的github仓库
               <a href="https://github.com/frozenui/frozenui"><a href="https://github.com/frozenui/frozenui">https://github.com/frozenui/frozenui</a></a>，
               自行 clone 到本地。
           </p>
            <h2>目录结构</h2>
````
- sass/
    + 存放 .scss 源码

- css/
    + frozen.css
    
- font/
    + 存放 字体文件
    
- img/
    + 存放 图片文件
    
- js/
    + frozen.js

- lib/
    + 存放第三方依赖类库，如 zeptojs

- doc/
    + 代码规范

- jsdoc/
    + jsdoc生成的api文档

- demo/
    + 示例, 从 src/ 自动生成
    
- dist/
    + 发布的文件

- Gruntfile.js
    + grunt 配置文件

````         
<h2>基础模板</h2>
````  
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="format-detection" content="telephone=no">
        <title>FrozenUI Demo</title>
        <link rel="stylesheet" href="../css/frozen.css">
    </head>
    <body>
        <header class="ui-header ui-header-positive ui-border-b">
            <i class="ui-icon-return" onclick="history.back()"></i><h1>选项卡 tab</h1><button class="ui-btn">回首页</button>
        </header>
        <footer class="ui-footer ui-footer-btn">
            <ul class="ui-tiled ui-border-t">
                <li data-href="index.html" class="ui-border-r"><div>基础样式</div></li>
                <li data-href="ui.html" class="ui-border-r"><div>UI组件</div></li>
                <li data-href="js.html"><div>JS插件</div></li>
            </ul>
        </footer>
        <section class="ui-container">
            <section id="tab">
                <div class="demo-item">
                    <p class="demo-desc">标签栏</p>
                    <div class="demo-block">
                        <div class="ui-tab">
                            <ul class="ui-tab-nav ui-border-b">
                                <li class="current">热门推荐</li>
                                <li>全部表情</li>
                                <li>表情</li>
                            </ul>
                            <ul class="ui-tab-content" style="width:300%">
                                <li>内容1</li>
                                <li>内容2</li>
                                <li>内容3</li>
                            </ul>
                        </div>
                        <script class="demo-script">
                        (function (){
                            var tab = new fz.Scroll('.ui-tab', {
                                role: 'tab',
                                autoplay: true,
                                interval: 3000
                            });
                            /* 滑动开始前 */
                            tab.on('beforeScrollStart', function(fromIndex, toIndex) {
                                console.log(fromIndex,toIndex);// from 为当前页，to 为下一页
                            })

                            /* 滑动结束 */
                            tab.on('scrollEnd', function(curPage) {
                                console.log(curPage);// curPage 当前页
                            });
                        })();
                        </script>
                    </div>
                </div>
            </section>
        </section><!-- /.ui-container-->
        <script src="../lib/zeptojs/zepto.min.js"></script>
        <script src="../js/frozen.js"></script>
        <script>
        $('ul li').click(function(){
            location.href= $(this).data('href');
        });
        $('.ui-header .ui-btn').click(function(){
            location.href= 'index.html';
        });
        </script>
    </body>
</html>
````