var path = require('path');

var sourcePath          = path.resolve(__dirname, '../frozenui/');

var demoHtmlPath        = path.join(sourcePath, 'demo/');

var demoHtmlHeaderPath  = path.join(sourcePath, 'demo/src/include/', 'header.html');
var demoHtmlFooterPath  = path.join(sourcePath, 'demo/src/include/', 'footer.html');

var siteDataPath        = path.resolve(__dirname, './data/');
var siteViewsPath       = path.resolve(__dirname, './views/');

var siteConfig          = require('./site-config.js');

module.exports = {
    // 存放 frozenui 的源码路径
    sourcePath: sourcePath,

    // 存放示例 HTML 的路径
    demoHtmlPath: demoHtmlPath,

    // 自动生成网站数据所需要拼接的文件路径
    demoHtmlHeaderPath: demoHtmlHeaderPath,
    demoHtmlFooterPath: demoHtmlFooterPath,

    // 存放自动生成的数据的路径
    siteDataPath: siteDataPath,

    // 存放使徒文件的路径
    siteViewsPath: siteViewsPath,

    // 路由页面设置
    siteConfig: siteConfig
};




