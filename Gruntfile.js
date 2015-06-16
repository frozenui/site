
var path = require('path');

var Config = require('./config');

var publicDir = '../frozenui.github.io';

module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);


    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'),

        clean: {
            download: [ publicDir + '/download'],
            frozen: [publicDir+ '/frozenui']
        },

        copy: {
            // 复制 frozenui/_dist 到 public/frozenui/
            frozen: {
                expand: true,
                cwd: '../frozenui/_dist/',
                src: '**',
                dest: publicDir + '/frozenui/'
            },
            demo: {
                expand: true,
                cwd: '../frozenui/demo/',
                src: ['*.css','*.html'],
                dest: publicDir + '/frozenui/demo/'
            }
        },

        jshint: {
            files: ['bin/www', 'app.js', 'config.js', 'Gruntfile.js', publicDir + '/js/*.js', 'routes/*.js', 'util/*.js']
        },

        htmlmin: {
            //site: {
            //    options: {
            //        removeComments: true,
            //        collapseWhitespace: true
            //    },
            //    files: [{
            //        expand: true,
            //        cwd: 'public/',
            //        src: '*.html',
            //        dest: 'public/site/'
            //    }]
            //}
        },

        cssmin: {
            //site: {
            //    files: [{
            //        expand: true,
            //        cwd: 'public/css/',
            //        src: ['*.css'],
            //        dest: 'public/site/css',
            //        ext: '.css'
            //    }]
            //}
        },

        uglify: {
            //site: {
            //    files: [{
            //        expand: true,
            //        cwd: 'public/js',
            //        src: '**/*.js',
            //        dest: 'public/site/js'
            //    }]
            //}
        },

        watch: {
            ejs: {
                files: ['views/**/*.ejs']
            },
            js: {
                files: ['bin/www', 'app.js', 'config.js', 'Gruntfile.js', publicDir + '/js/*.js', 'routes/*.js', 'util/*.js'],
                tasks: ['newer:jshint']
            },
            scss: {
                files: [publicDir + '/css/*.scss'],
                tasks: ['newer:sass']
            },
            css: {
                files: [publicDir + '/css/*.css']
            }
        },

        nodemon: {
            dev: {
                script: 'bin/www',
                options: {
                    nodeArgs: ['--debug'],
                    ignore: [publicDir + '/download/**']
                }
            }
        },

        open : {
            dev : {
                path: 'http://127.0.0.1:3000/'
            }
        },
        markdown: {
            options: {
                template: 'docs/templates/page.html',
                gfm: true,
                  codeLines: {
                    before: '<span>',
                    after: '</span>'
                }
            },
            all: {

              files: [
                {
                  expand: true,
                  cwd: 'docs/src/',
                  src: '*.md',
                  dest: publicDir,
                  ext: '.html'
                }
              ]
            }
          }
    });
    
    grunt.registerTask('generateDemoCodes','根据 consig.js 生成配置和示例到 data/', function(){
        var fs = require('fs');
        var utils = require('./utils');
        var Config = require('./config');

        // 将html 保存到文件中
        var htmlHeader = fs.readFileSync(path.join(Config.demoHtmlHeaderPath));
        var htmlFooter = fs.readFileSync(path.join(Config.demoHtmlFooterPath));

        // 将生成的代码片段保存到文件中
        // 将多个 html 拼成一个文件
        var allHtml = '';

        for (var category in Config.siteConfig.page) {
            
            var isDemoPage = Config.siteConfig.page[category].isDemoPage;
            var files = Config.siteConfig.page[category].files;

            if (isDemoPage && files) {
                var demos = utils.getDemos(Config.demoHtmlPath, files);
                var htmlContent = '';
                fs.writeFileSync(path.join(Config.siteDataPath, category + '.js'), JSON.stringify(demos));
                
                for(var i = 0; i < demos.length; i ++) {
                    htmlContent += demos[i].html;
                }

                fs.writeFileSync(path.join(Config.siteDataPath, category + '.html'), htmlHeader + htmlContent + htmlFooter);
                
                
                allHtml += htmlContent;
            }

        }
        fs.writeFileSync(path.join(Config.siteDataPath, 'index.html'), htmlHeader + allHtml + htmlFooter);
        // 同时生成所有 demo 的集合到 demo/index.html
        //fs.writeFileSync(path.join(Config.sourcePath, '/demo/index.html'), htmlHeader + allHtml + htmlFooter);
    });

    grunt.registerTask('generateStaticHtmls', '根据 views/*.ejs 生成静态页面 到 ' + publicDir + +'/*.html', function () {
        var ejs = require('ejs');
        var fs = require('fs');
        var path = require('path');
        var Config = require('./config');
        var siteConfig = Config.siteConfig;
        var siteDataPath = Config.siteDataPath;

        // 替换 href="base-css" 为 href="base-css.html"
        function replaceHref(str, pages) {
            pages.forEach(function (name) {
                str = str.replace('href="' + name + '"', 'href="' + name + '.html"');
            });
            // 静态页面无法使用构件化功能，先屏蔽掉
            //str = str.replace('<li><a href="customize.html">定制化</a></li>', '');
            return str;
        }
        var pages = [];
        for (var page in siteConfig.page) {
            pages.push(page);
        }
        pages.forEach(function (page) {
            // 屏蔽 customize.ejs
            var filePath = path.join(Config.siteViewsPath, page + '.ejs');
            var demoConfigPath = path.join(Config.siteDataPath, page + '.js');

            var data = siteConfig.page[page];
            if (siteConfig.page[page].isDemoPage) {
                // get demo codes from public/code/ to render
                data.demos = JSON.parse(fs.readFileSync(path.join(siteDataPath, page + '.js')));
            }

            data.filename = filePath; // 指定 include 时的文件

            if (fs.existsSync(demoConfigPath)) {
                data.demos = JSON.parse(fs.readFileSync(demoConfigPath));
            }

            var str = fs.readFileSync(filePath).toString();

            var html = ejs.render(str, data);
            html = replaceHref(html, pages);

            var destPath = path.join( publicDir, page + '.html');
            fs.writeFileSync(destPath, html);
        });
    });


    // 生成 Demo 和配置自动生成文档网站
    grunt.registerTask('site', [
        'copy:frozen',
        'copy:demo',
        'generateDemoCodes',
        'generateStaticHtmls',
        'markdown'
    ]);

    // 生产环境下执行 grunt
    grunt.registerTask('default', [
        'clean:download',
        'nodemon'
    ]);
};