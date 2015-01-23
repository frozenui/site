# 开始使用

---

## 例子


<style>
.nico-iframe iframe{height: 400px;}
</style>

````iframe
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<meta name="author" content="ISUX">
	<meta name="format-detection" content="telephone=no"/>
	<meta name="viewport" content="width=device-width,user-scalable=no"/>
	<meta name="apple-mobile-web-app-capable" content="yes"/>
	<meta name="apple-mobile-web-app-status-bar-style" content="black"/>
	<title>demo</title>
	<link rel="stylesheet" type="text/css" href="http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/frozen.css?_bid=306">
	<style>
    .ui-tab-content{
        display: -webkit-box;
        width: 300%;
     }
    .ui-tab-content > li {
        -webkit-box-flex: 1;
        width: 100%;
        height:300px;
    }
</style>
</head>
<body>
	<div class="wrapper">
		<!-- list1 start -->
		<div class="ui-tab">
		    <ul class="ui-tab-nav ui-border-b">
		        <li class="current">热门推荐</li>
		        <li>全部表情</li>
		        <li>表情</li>
		    </ul>
		    <ul class="ui-tab-content">
		        <li>
		        	<ul class="ui-list ui-list-link ui-border-b">  
					    <li>
					        <div class="ui-list-thumb ui-avatar-s">
					           <span style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
					        </div>
					        <div class="ui-list-info ui-border-t">
					            <h4>标题标题标题标题标题标题标题标题标题标题标题</h4>
					            <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
					        </div>
					    </li>
					    <li>
					        <div class="ui-list-thumb ui-avatar-s">
					            <span  style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
					        </div>
					        <div class="ui-list-info ui-border-t">
					            <h4>标题标题标题标题标题标题标题标题标题标题标题</h4>
					            <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
					      </div>
					    </li>
					    <li>
					        <div class="ui-list-thumb ui-avatar-s">
					            <span  style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
					        </div>
					        <div class="ui-list-info ui-border-t">
					            <h4>标题标题标题标题标题标题标题标题标题标题标题</h4>
					            <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
					      </div>
					    </li>
					    <li>
					        <div class="ui-list-thumb ui-avatar-s">
					            <span  style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
					        </div>
					        <div class="ui-list-info ui-border-t">
					            <h4>标题标题标题标题标题标题标题标题标题标题标题</h4>
					            <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
					      </div>
					    </li>
					</ul>
					<div class="ui-loading-wrap">
					    <p>加载中</p>
					    <i class="ui-loading"></i>
					</div>
		        </li>
		        <li>内容二</li>
		        <li>内容三</li>
		    </ul>
		</div>
	</div>
	 <script src="http://i.gtimg.cn/vipstyle/frozenjs/lib/zepto.min.js?_bid=304"></script>
    <script src="http://i.gtimg.cn/vipstyle/frozenjs/1.0.0/frozen.js?_bid=304"></script>
	<script>
	   var tab = new Slide('.ui-tab', {
	       role: 'tab',
	       autoplay: true,
	       interval: 3000
	   });
	
	   tab.on('slideStart', function() {
	       console.log('start')
	   });
	
	   tab.on('slideEnd', function() {
	       console.log('end')
	   });
	</script>
</body>
</html>
````

你会看到一个[demo页面](http://frozenui.github.io/iframe-start-1.html),里面有引用frozenui的css和js。


css具体模块的代码可以访问[http://frozenui.github.io/frozenui/](http://frozenui.github.io/frozenui/)

js具体模块代码可以访问[http://frozenui.github.io/frozenjs/](http://frozenui.github.io/frozenjs/)

[这里](http://frozenui.github.io/frozenui/history.html) 查看css历史版本修改记录。

## 正确使用css的方式


#### 1. 可以直接使用上面的 css 文件，注意1.2.0之后的bid改为306:

````
 <link media="all" href="http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/frozen.css?_bid=306" rel="stylesheet">
 
  <link media="all" href="http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/global.css?_bid=306" rel="stylesheet">

````

前者是打包了除了会员相关的基础css文件，后者还包括vip等级图标 ，qq等级图标，角标，好友选择器等会员相关的css组件，使用手Q离线包需要加上bid的参数。

调试时可使用未压缩版，把css目录换成css-debug，如http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css-debug/frozen.css

####2. 针对非手Q用户可以使用cdn 和 combo 服务按需加载

````
 <link media="all" href="http://i.gtimg.cn/c/=/vipstyle/frozenui/1.2.0/css/reset.css,/vipstyle/frozenui/1.2.0/css/ui-notice.css" rel="stylesheet">

````

####3. 直接下载

另外提供下载地址，供非腾讯公司用户使用：[http://frozenui.github.io/frozenui.zip](http://frozenui.github.io/frozenui.zip)


####4.访问我们的github仓库

 [https://github.com/frozenui/frozenui](https://github.com/frozenui/frozenui)，自行 clone 到本地。
 
## 正确使用js的方式

####1. 非模块化引用方式

````
<script src="http://i.gtimg.cn/vipstyle/frozenjs/lib/zepto.min.js?_bid=304"></script>
<script src="http://i.gtimg.cn/vipstyle/frozenjs/1.0.0/frozen.js?_bid=304"></script>
````

####2. 模块化引用方式，这里的zepto必须是模块化后的

````
<script src="http://i.gtimg.cn/vipstyle/frozenjs/lib/sea.js?_bid=304"></script>
<script type="text/javascript">
seajs.config({
    alias:{
        "$":"frozenjs/lib/zepto.min.js?_bid=304",
        "frozen":"frozenjs/1.0.0/frozen.js?_bid=304"
    }
});
</script>
````
####3.访问我们的github仓库

[https://github.com/frozenui/frozenjs](https://github.com/frozenui/frozenjs)，自行 clone 到本地。

_注意非腾讯公司用户请不要直接使用上述域名。_