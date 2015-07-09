// 以下数据用于输出网站文档
// 新增组件后，请注意在此更新

// 假设一个组件名为 reset, 则：
//  html: 'reset' 对应 demo/reset.html
//  css:  'reset' 对应 css/reset.css
//  css:  ['reset1', 'reset2']  对应 css/reset2.css 和 css/reset2.css
//  js:   'reset' 对应 js/reset.js


//[页面路由]: {
//        title: '页面的标题, 必填',
//        desc:  '页面的具体描述， 必填',
//        isDemoPage: 是否为代码输出页，默认为 false,
//        files: [// isDemoPage 为 true 时，files 用于页面输出代码以及定制下载， 如有则说明这是一个含代码片段的页面，会自动输出对应的 HTML/CSS/JS，其中 CSS/JS 可为一或多个文件
//        {title: '组件1',     html: '组件的HTML文件1',    css: '组件的CSS文件1', js: '组件的JS文件1'},
//        {title: '组件2',     html: '组件的HTML文件',     css: ['组件的CSS文件1', '组件的CSS文件2'], js: '组件的JS文件1'},
//    ]
//}

var page = {};

// 主页 http://website.com/
page.index = {
    title: '主页',
    desc: 'balabalabalaba...',
    isDemoPage: false
};

// http://website.com/start 开速开始页


// http://website.com/base 基础样式页
page.base = {
    title: '基础样式',
    desc: '哇啦啦啦啦我是基础样式的自我介绍',
    isDemoPage: true,
    files: [
        {title: 'reset',      css: 'reset'},
        {title: 'rem方案',     css: 'rem'},
        {title: '文本',        html: 'type',       css: 'type'},
        {title: '布局',        html: 'layout',     css: 'layout'},
        {title: '网格',        html: 'grid',       css: 'grid'},
        {title: '占位',        html: 'placehold',   css: 'placehold'},
        {title: '1px解决方案',  html: 'border',       css: 'border'},
        {title: '箭头链接',     html: 'arrowlink',   css: 'arrowlink'},
        {title: '文字截断',     html: 'nowrap',       css: 'nowrap'},
        {title: '两端留白',     html: 'whitespace',   css: 'whitespace'},
        {title: '两端对齐',     html: 'justify',      css: 'justify'},
        {title: '基本图标',     css: 'icon'},
        {title: '所有图标',     html: 'icon',       css: 'icon-full'}
    ]
};

// http://website.com/components UI 组件页
page.components = {
    title: 'UI 组件',
    desc: '呼啦啦啦啦我是 UI 组件的自我描述',
    isDemoPage: true,
    files: [
        {title: '面板',       html: 'panel',          css: 'panel'},
        {title: '按钮',       html: 'btn',            css: ['btn', 'btn-group','btn-progress']},
        {title: '头像',       html: 'avatar',         css: 'avatar'},
        {title: '红点',       html: 'reddot',         css: 'reddot'},
        {title: '徽标',       html: 'badge',          css: 'badge'},
        {title: '标签',       html: 'label',          css: 'label'},
        {title: '角标',       html: 'tag',            css: 'tag'},
        {title: '搜索框',     html: 'searchbar',      css: 'searchbar'},
        {title: '列表',       html: 'list',           css: 'list'},
        {title: '表单',       html: 'form',           css: ['form', 'checkbox', 'switch', 'radio','select','input']},
        {title: '表格',       html: 'table',          css: 'table'},
        {title: '通知',       html: 'notice',         css: 'notice'},
        {title: '普通提示',    html: 'tips',           css: 'tips'},
        {title: '工具提示',    html: 'tooltips',       css: 'tooltips'},
        {title: '新消息提示',   html: 'newstips',      css: 'newstips'},
        {title: '浮层提示',    html: 'poptips',        css: 'poptips'},
        {title: '选择器',     html: 'selector',       css: 'selector'},
        {title: '进度条',     html: 'progress',       css: 'progress'},
        {title: '加载中',     html: 'loading',         css: 'loading'},
        {title: '菜单',       html: 'actionsheet',     css: 'actionsheet'},
        {title: '对话框',      html: 'dialog',        css: 'dialog'},
        {title: '选项卡',      html: 'tab',           css: 'tab'},
        {title: '轮播图',      html: 'slider',         css: 'slider'},
        {title: 'vip',       html: 'vip',             css: 'vip'}
    ]
};
page.zepto = {
    title: 'Zepto',
    desc: '提供zepto自定义打包',
    isDemoPage: false,
    files: [
        {title: 'zepto',            zepto: 'zepto'},
        {title: 'event',            zepto: 'event'},
        {title: 'touch',            zepto: 'touch'},
        {title: 'ajax',             zepto: 'ajax'},
        {title: 'form',             zepto: 'form'},
        {title: 'detect',           zepto: 'detect'},
        {title: 'fx',               zepto: 'fx'},
        {title: 'fx_methods',       zepto: 'fx_methods'},
        {title: 'data',             zepto: 'data'},
        {title: 'deferred',         zepto: 'deferred'},
        {title: 'data',             zepto: 'data'},
        {title: 'callbacks',        zepto: 'callbacks'},
        {title: 'selector',         zepto: 'selector'},
        {title: 'gesture',          zepto: 'gesture'},
        {title: 'stack',            zepto: 'stack'},
        {title: 'assets',           zepto: 'assets'},
        {title: 'ios3',             zepto: 'ios3'}
    ]
};
http://website.com/plugins JS 插件页
page.plugins = {
    title: 'JS 插件',
    desc: '提供基础的 JS 插件（JS 插件体验请用移动端扫描二维码体验）',
    isDemoPage: false,
    files: [
        {title: 'core',           js: 'core'},
        {title: '加载中',          html: 'loading',        js: 'loading'},
        {title: '提示',            html: 'tips',            js: 'tips'},
        // {title: '进度条',      html: 'progress',      css: 'progress',    js: 'progress'},
        // {title: '范围条',      html: 'range',         css: 'range',       js: 'range'},
        {title: '对话框',          html: 'dialog',       js: 'dialog'},
        // {title: '菜单',        html: 'actionsheet',  css: 'actionsheet',js: 'actionsheet'},
        // {title: '分享到',      html: 'action-share',  css: 'action-share',js: 'action-share'},
        // {title: '轮播图',      html: 'carousel',      css: 'carousel',    js: 'carousel'},
        {title: '选项卡，轮播图，模拟滑动',       html:'scroller',     js: 'scroll'}
        // {title: '视差滚动',       html:'parallax',     css:['parallax','parallax-animation'],  js: 'parallax'},
        // {title: 'cover效果',     html:'cover',     js: 'cover'}
        // {title: 'cover',      html: 'cover',      css: '',    js: ''}
        // {title: '下拉刷新',    html: 'swipe-down-refresh',css: 'swipe-down-refresh',  js: 'swipe-down-refresh'}
    ]
};

// http://website.com/case 动效页
page.case = {
    title: '动画效果集',
    desc: 'css3和硬件传感器动画效果集合。',
    isDemoPage: false,
    cases: {
        "csscase": [
            {
                "tit": "账号资料卡特权PK",
                "author": "faycheng",
                "pic": "img/cases/pk.gif",
                "url": "http://wevas.info/vipstyle/mobile/client/profile/v2/html/pk.html"
            },
            {
                "tit": "曲线轨迹动画",
                "author": "faycheng",
                "pic": "img/cases/move.gif",
                "url": "http://wevas.info/vipstyle/mobile/client/profile/v2/html/index.html"
            },
            {
                "tit": "圆环百分比动画",
                "author": "faycheng",
                "pic": "img/cases/circle.gif",
                "url": "http://wevas.info/vipstyle/mobile/client/profile/v2/html/growup.html"
            },
            {
                "tit": "3D分牌进场效果",
                "author": "jundabei",
                "pic": "img/cases/p1.png",
                "url": "http://wevas.info/demo/gift/v1/html/index.html"
            },
            {
                "tit": "世界杯3D射门",
                "author": "jundabei",
                "pic": "img/cases/jundabei-p1.jpg",
                "url": "http://wevas.info/demo/bouncingball/ball.html"
            },
            {
                "tit": "游戏宝箱开启动画",
                "author": "jeakeyliang",
                "pic": "img/cases/pic1_1.png",
                "url": "http://wevas.info/vipstyle/mobile/client/chest/v1/html/chest-open-ani.html"
            },
            {
                "tit": "手游88节Cover",
                "author": "jeakeyliang",
                "pic": "img/cases/pic2_1.png",
                "url": "http://wevas.info/vipstyle/special/88game/index.html"
            },
            {
                "tit": "QQ钱包首页展示",
                "author": "hahnzhu",
                "pic": "img/cases/wallet.gif",
                "url": "http://wevas.info/vipstyle/special/wallet/v2/html/index2.html"
            },
            {
                "tit": "QQWiFi液面滚动",
                "author": "hahnzhu",
                "pic": "img/cases/wifi.gif",
                "url": "http://wevas.info/vipstyle/mobile/client/wifi/credit/v2/index.html"
            },
            {
                "tit": "WiFi连接流程",
                "author": "hahnzhu",
                "pic": "img/cases/pic3.png",
                "url": "http://wevas.info/vipstyle/mobile/act/140612_wifi/load.html"
            },
            {
                "tit": "酷跑拉力赛领奖动画",
                "author": "jeakeyliang",
                "pic": "img/cases/jeakeyliang-project1-2.png",
                "url": "http://gamecentertest.cs0309.3g.qq.com/front/demo/html/mileage/detail.html"
            },
            {
                "tit": "游戏成就PK动画(1)",
                "author": "jeakeyliang",
                "pic": "img/cases/gamecenter1.jpg",
                "url": "http://gamecentertest.cs0309.3g.qq.com/front/demo/html/gain-pk.html"
            },
            {
                "tit": "游戏成就PK动画(2)",
                "author": "jeakeyliang",
                "pic": "img/cases/gamecenter2.jpg",
                "url": "http://gamecentertest.cs0309.3g.qq.com/front/demo/html/gain-pk2.html"
            }
        ],
        "apicase": [
            {
                "tit": "进球震动",
                "author": "jundabei",
                "pic": "img/cases/shot001.png",
                "url": "http://wevas.info/demo/worldcup2014pay/html/index.html"
            },
            {
                "tit": "刮一刮惊喜",
                "author": "jundabei",
                "pic": "img/cases/gua001.png",
                "url": "http://gamecentertest.cs0309.3g.qq.com/front/demo/mqqh5/index_gua_aio.html"
            },
            {
                "tit": "摇一摇比手劲",
                "author": "hahnzhu",
                "pic": "img/cases/hahnshake.png",
                "url": "http://wevas.info/vipstyle/special/yaoyiyao/index.html"
            },
            {
                "tit": "扬声器听祝福语",
                "author": "jundabei",
                "pic": "img/cases/speech001.png",
                "url": "http://gamecentertest.cs0309.3g.qq.com/front/demo/mqqh5/getvoices.html"
            },
            {
                "tit": "cover陀螺仪效果",
                "author": "faycheng",
                "pic": "img/cases/faycheng1.png",
                "url": "http://zhijie.me/cover/index.html"
            },
            {
                "tit": "飘落重力感应",
                "author": "jundabei",
                "pic": "img/cases/fly001.png",
                "url": "http://gamecentertest.cs0309.3g.qq.com/front/demo/mqqh5/gravity.html"
            },
            {
                "tit": "吹一吹生日祝福",
                "author": "jundabei",
                "pic": "img/cases/chui001.jpg",
                "url": "http://gamecentertest.cs0309.3g.qq.com/front/demo/mqqh5/brithday_chui/a_index1.html"
            },
            {
                "tit": "位置信息用户关怀",
                "author": "jundabei",
                "pic": "img/cases/loc001.png",
                "url": "http://gamecentertest.cs0309.3g.qq.com/front/demo/mqqh5/longtest.html"
            },
            {
                "tit": "摇晃的热气球",
                "author": "jundabei",
                "pic": "img/cases/grav001.jpg",
                "url": "http://gamecentertest.cs0309.3g.qq.com/front/demo/mqqh5/brithday_chui/a_index2.html"
            }
        ]
    }
    };

page.customize = {
    title: '定制化下载',
    desc: '勾选你想要的组件, 一键打包...',
    isDemoPage: false,

    files: {
        base: page.base,
        components: page.components,
        zepto: page.zepto,
        plugins: page.plugins
    },

    // 定制化打包时指定必须包含的基础文件
    requiredFiles: {
        // 依赖 reset
        css: ['reset'],

        // 依赖 zepto.min 以及 core/core 和 core/component
        js: ['../lib/zeptojs/zepto.min', 'core/core']
    }
}

module.exports.page = page;