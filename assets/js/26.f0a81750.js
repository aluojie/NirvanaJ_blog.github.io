(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{410:function(s,t,a){"use strict";a.r(t);var n=a(54),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"手把手教你使用-vuepress-搭建个人博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手把手教你使用-vuepress-搭建个人博客"}},[s._v("#")]),s._v(" 手把手教你使用 VuePress 搭建个人博客")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("有阅读障碍的同学，可以跳过第一至四节，下载我写好的"),a("a",{attrs:{href:"https://mobike.io/mobike-fe/vuepress-devkit.git",target:"_blank",rel:"noopener noreferrer"}},[s._v("工具包"),a("OutboundLink")],1),s._v(":\n"),a("code",[s._v("git clone https://mobike.io/mobike-fe/vuepress-devkit.git")]),s._v(" 然后从第五节开始看。")])]),s._v(" "),a("h2",{attrs:{id:"一、为什么你需要一个博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、为什么你需要一个博客"}},[s._v("#")]),s._v(" 一、为什么你需要一个博客？")]),s._v(" "),a("p",[s._v("优秀的程序员都在写博客，写博客有很多好处：")]),s._v(" "),a("ul",[a("li",[s._v("帮助自己梳理、总结、理解知识点（个人提升）")]),s._v(" "),a("li",[s._v("帮助别人理解知识点（好人一生平安）")]),s._v(" "),a("li",[s._v("简历更好看，更多面试机会（升职加薪）")])]),s._v(" "),a("h2",{attrs:{id:"二、什么是-vuepress-为什么要使用-vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、什么是-vuepress-为什么要使用-vuepress"}},[s._v("#")]),s._v(" 二、什么是 VuePress，为什么要使用 VuePress ？")]),s._v(" "),a("p",[a("strong",[s._v("VuePress")]),s._v(" 是尤雨溪（vue.js 框架作者）4月12日发布的一个全新的基于 vue 的静态网站生成器，实际上就是一个 vue 的 spa 应用，内置 webpack，可以用来写文档。详见 "),a("a",{attrs:{href:"https://vuepress.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress中文网"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("其实类似的建站工具有很多，比如 WordPress、Jekyll、Hexo 等，其中 WordPress 需要自己购买虚拟主机，不考虑；Jekyll 是 Github-Page 默认支持的，听说操作比较复杂，没有用过不做过多评价了；Hexo 之前一直在用，但一直觉得主题不好看，风格不够简洁优雅。自从遇见 VuePress，嗯，就是它了~")]),s._v(" "),a("p",[s._v("VuePress 有很多优点：")]),s._v(" "),a("ul",[a("li",[s._v("界面简洁优雅（个人感觉比 HEXO 好看）")]),s._v(" "),a("li",[s._v("容易上手（半小时能搭好整个项目）")]),s._v(" "),a("li",[s._v("更好的兼容、扩展 Markdown 语法")]),s._v(" "),a("li",[s._v("响应式布局，PC端、手机端")]),s._v(" "),a("li",[s._v("Google Analytics 集成")]),s._v(" "),a("li",[s._v("支持 PWA")])]),s._v(" "),a("h2",{attrs:{id:"三、开始搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、开始搭建"}},[s._v("#")]),s._v(" 三、开始搭建")]),s._v(" "),a("h3",{attrs:{id:"创建项目文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目文件夹"}},[s._v("#")]),s._v(" 创建项目文件夹")]),s._v(" "),a("p",[s._v("可以右键手动新建，也可以使用 mkdir 命令新建：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("mkdir vuepressBlogDemo\n")])])]),a("h3",{attrs:{id:"全局安装-vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局安装-vuepress"}},[s._v("#")]),s._v(" 全局安装 VuePress")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("npm install -g vuepress\n")])])]),a("h3",{attrs:{id:"进入-vuepressblogdemo-文件夹-初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入-vuepressblogdemo-文件夹-初始化项目"}},[s._v("#")]),s._v(" 进入 vuepressBlogDemo 文件夹，初始化项目")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("npm init")]),s._v(" 或 "),a("code",[s._v("npm init -y")]),s._v("（默认yes）")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("npm init -y\n")])])]),a("h3",{attrs:{id:"创建文件夹和文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建文件夹和文件"}},[s._v("#")]),s._v(" 创建文件夹和文件")]),s._v(" "),a("p",[s._v("在 vuepressBlogDemo 文件夹中创建 docs 文件夹，在 docs 中创建 .vuepress 文件夹，在.vuepress中创建 public 文件夹和 config.js 文件，最终项目结构如下所示：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("vuepressBlogDemo\n├─── docs\n│   ├── README.md\n│   └── .vuepress\n│       ├── public\n│       └── config.js\n└── package.json\n")])])]),a("h3",{attrs:{id:"在-config-js-文件中配置网站标题、描述、主题等信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-config-js-文件中配置网站标题、描述、主题等信息"}},[s._v("#")]),s._v(" 在 config.js 文件中配置网站标题、描述、主题等信息")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Chen\\'s blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  description"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'我的个人网站'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注入到当前页面的 HTML <head> 中的标签")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/logo.jpg'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 增加一个自定义的 favicon(网页标签的图标)")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  base"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是部署到github相关的配置")]),s._v("\n  markdown"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    lineNumbers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码块显示行号")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    nav"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导航栏配置")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'前端基础'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/basic/1.html'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'进阶之路'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/advanced/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'诗和远方'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/others/1.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Github'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://github.com/zhangyunchencc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("        \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    sidebar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'auto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 侧边栏配置")]),s._v("\n    sidebarDepth"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 侧边栏显示2级")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h3",{attrs:{id:"在-package-json-文件里添加两个启动命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-package-json-文件里添加两个启动命令"}},[s._v("#")]),s._v(" 在 package.json 文件里添加两个启动命令")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"一切就绪-跑起来看看吧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一切就绪-跑起来看看吧"}},[s._v("#")]),s._v(" 一切就绪 🎉 跑起来看看吧")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("npm run dev\n")])])]),a("h2",{attrs:{id:"四、一些小亮点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、一些小亮点"}},[s._v("#")]),s._v(" 四、一些小亮点")]),s._v(" "),a("p",[s._v("完成了基础搭建后，就可以在docs目录下新建 "),a("code",[s._v(".md")]),s._v(" 文件写文章了（.md 是 Markdown 语法文件，你需要知道 Markdown 的一些基本写法，很简单，这里给大家一份 "),a("a",{attrs:{href:"https://www.jianshu.com/p/b03a8d7b1719",target:"_blank",rel:"noopener noreferrer"}},[s._v("Markdown 语法整理大集合"),a("OutboundLink")],1),s._v("）")]),s._v(" "),a("p",[s._v("下面给大家安利一些实用的方法。")]),s._v(" "),a("h3",{attrs:{id:"代码块高亮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码块高亮"}},[s._v("#")]),s._v(" 代码块高亮")]),s._v(" "),a("p",[s._v("在 .md 文件中书写代码时，可在 ``` 后增加 js、html、json等格式类型，代码块即可按照指定类型高亮")]),s._v(" "),a("pre",{staticClass:"language-text"},[a("code",[s._v("``` js\nexport default {\n  data () {\n    return {\n      msg: 'Highlighted!'\n    }\n  }\n}\n```")])]),s._v(" "),a("h3",{attrs:{id:"自定义容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义容器"}},[s._v("#")]),s._v(" 自定义容器")]),s._v(" "),a("p",[s._v("代码：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("::: tip 提示\nthis is a tip\n:::\n\n::: warning 注意\nthis is a tip\n:::\n\n::: danger 警告\nthis is a tip\n:::\n")])])]),a("p",[s._v("效果：")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("this is a tip")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("this is a tip")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),a("p",[s._v("this is a tip")])]),s._v(" "),a("h3",{attrs:{id:"支持emoji"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持emoji"}},[s._v("#")]),s._v(" 支持Emoji")]),s._v(" "),a("p",[s._v("代码：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v(":tada: :100: :bamboo: :gift_heart: :fire:\n")])])]),a("p",[s._v("效果：\n🎉 💯 🎍 💝 🔥")]),s._v(" "),a("p",[s._v("👉 这里有一份 "),a("a",{attrs:{href:"https://www.webpagefx.com/tools/emoji-cheat-sheet/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Emoji 大全"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"支持-pwa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持-pwa"}},[s._v("#")]),s._v(" 支持 PWA")]),s._v(" "),a("p",[s._v("VuePress 默认支持 "),a("a",{attrs:{href:"https://segmentfault.com/a/1190000012353473",target:"_blank",rel:"noopener noreferrer"}},[s._v("PWA"),a("OutboundLink")],1),s._v("，配置方法如下：")]),s._v(" "),a("p",[s._v("config.js 文件中增加")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注入到当前页面的 HTML <head> 中的标签")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'manifest'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/photo.jpg'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'apple-touch-icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/photo.jpg'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nserviceWorker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否开启 PWA")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("public 文件夹下新建 manifest.json 文件，添加")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"张三"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"short_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"张三"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"display"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"standalone"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"background_color"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#2196f3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"张三的个人主页"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"theme_color"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"icons"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"src"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./photo.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sizes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"144x144"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"image/png"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"related_applications"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"platform"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"web"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"platform"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"play"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://play.google.com/store/apps/details?id=cheeaun.hackerweb"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("最后在 iPhone 的 safrai 浏览器中打开本网站，点击 "),a("code",[s._v("+添加到主屏幕")]),s._v(" 就能在桌面看到一个像原生 App 一样的图标（感觉自己写了一个 App 有木有 😄）")]),s._v(" "),a("h2",{attrs:{id:"五、部署上线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、部署上线"}},[s._v("#")]),s._v(" 五、部署上线")]),s._v(" "),a("p",[s._v("说了这么多都是在本地进行的，现在我们要把本地的内容推送到某个服务器上，这样只要有网络，就可以随时随地看自己的网站了。")]),s._v(" "),a("p",[s._v("一般来说，有两种方案可供选择：")]),s._v(" "),a("ol",[a("li",[s._v("自己买一个服务器，阿里云、腾讯云等，这种方式的好处是速度有保证、可以被搜索引擎收录，坏处是要花钱啊 💰 土豪同学可以考虑。")]),s._v(" "),a("li",[s._v("使用 "),a("a",{attrs:{href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github Pages"),a("OutboundLink")],1),s._v(" 。什么是 Github Pages 呢？简单说就是 Github 提供的、用于搭建个人网站的静态站点托管服务。很多人用它搭建个人博客。这种方式的好处是免费、方便，坏处是速度可能会有些慢、不能被国内的搜索引擎收录。")])]),s._v(" "),a("p",[s._v("最终我选择了方案2，下面将给大家讲解如何使用 Github Pages 服务。")]),s._v(" "),a("h3",{attrs:{id:"登陆-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登陆-github"}},[s._v("#")]),s._v(" 登陆 "),a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("打开 github 网站，登陆自己的 github 账号（没有账号的快去注册并面壁思过作为一个优秀的程序员为啥连一个github账号都没有）")]),s._v(" "),a("p",[s._v("接着我们新建两个仓库，")]),s._v(" "),a("h3",{attrs:{id:"新建仓库一-username-github-io-不用克隆到本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建仓库一-username-github-io-不用克隆到本地"}},[s._v("#")]),s._v(" 新建仓库一： USERNAME.github.io （不用克隆到本地）")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意：")]),s._v(" "),a("p",[s._v("USERNAME 必须是你 Github 的账号名称，不是你的名字拼音，也不是你的非主流网名，不要瞎起，要保证和Github账号名一模一样！")])]),s._v(" "),a("p",[s._v("例如我的 Github 账号名称是 zhangyunchencc")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/eg13.png",alt:""}})]),s._v(" "),a("p",[s._v("那么新建仓库，Repository name 就填写为：zhangyunchencc.github.io")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/eg14.png",alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("这个仓库建好后，不用克隆到本地，内容更新修改都在下面的仓库中进行。")])]),s._v(" "),a("h3",{attrs:{id:"新建仓库二-随便起一个名字-比如-vuepressblog-克隆到本地"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建仓库二-随便起一个名字-比如-vuepressblog-克隆到本地"}},[s._v("#")]),s._v(" 新建仓库二：随便起一个名字，比如：vuepressBlog （克隆到本地）")]),s._v(" "),a("p",[s._v("这个项目是用来开发博客的，以后只需要改这个项目就够了。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("使用工具包的，将 "),a("a",{attrs:{href:"https://mobike.io/zhangyunchen/vuepress-devkit",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-devkit"),a("OutboundLink")],1),s._v(" 中的内容拷贝到 vuepressBlog 文件夹中")])]),s._v(" "),a("li",[a("p",[s._v("自己从头搭建的，将 vuepressBlogDemo 文件夹的内容拷贝到仓库二，并在根目录下创建 deploy.sh 文件，内容如下：")])])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是发布到自定义域名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'www.yourwebsite.com' > CNAME")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果你想要部署到 https://USERNAME.github.io")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@github.com:USERNAME/USERNAME.github.io.git master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"修改仓库二中的-deploy-sh-发布脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改仓库二中的-deploy-sh-发布脚本"}},[s._v("#")]),s._v(" 修改仓库二中的 deploy.sh 发布脚本")]),s._v(" "),a("p",[s._v("把文件中的 USERNAME 改成 Github 账号名，例如我的账号名是 zhangyunchencc，那么就可以改为：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果你想要部署到 https://USERNAME.github.io")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@github.com:zhangyunchencc/zhangyunchencc.github.io.git master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这样仓库二和仓库一就建立了关联。")]),s._v(" "),a("p",[s._v("简单说二者的关系是：仓库一负责显示网站内容，我们不需要改动它；日常开发和新增内容，都在仓库二中，并通过 npm run deploy 命令，将代码发布到仓库一。")]),s._v(" "),a("h3",{attrs:{id:"在-package-json-文件夹中添加发布命令-使用工具包的请忽略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-package-json-文件夹中添加发布命令-使用工具包的请忽略"}},[s._v("#")]),s._v(" 在 package.json 文件夹中添加发布命令（使用工具包的请忽略）")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash deploy.sh"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"大功告成-运行发布命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大功告成-运行发布命令"}},[s._v("#")]),s._v(" 👏 大功告成，运行发布命令")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("npm run deploy\n")])])]),a("p",[s._v("此时打开 Github Settings 中下面的链接: "),a("a",{attrs:{href:"https://zhangyunchencc.github.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://zhangyunchencc.github.io/"),a("OutboundLink")],1),s._v(" 即可看到自己的主页啦~")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/eg2.png",alt:""}})]),s._v(" "),a("h4",{attrs:{id:"pc-端页面是这样的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pc-端页面是这样的"}},[s._v("#")]),s._v(" PC 端页面是这样的：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/eg3.png",alt:""}})]),s._v(" "),a("h4",{attrs:{id:"手机端页面是这样的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手机端页面是这样的"}},[s._v("#")]),s._v(" 手机端页面是这样的：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/eg4.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"六、发布到自己的个人域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、发布到自己的个人域名"}},[s._v("#")]),s._v(" 六、发布到自己的个人域名")]),s._v(" "),a("p",[s._v("如果你不满足于 https://zhangyunchencc.github.io/ 这样的域名，想要一个自己个人的专属域名，比如 http://www.zhangyunchen.cc/ ，毕竟一些大牛（阮一峰 "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.ruanyifeng.com/blog/"),a("OutboundLink")],1),s._v("） 都是自己名字的网址哦，很方便很酷呢 😎")]),s._v(" "),a("p",[s._v("下面跟着步骤一步步来就好啦~")]),s._v(" "),a("h3",{attrs:{id:"购买域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#购买域名"}},[s._v("#")]),s._v(" 购买域名")]),s._v(" "),a("p",[s._v("推荐在 "),a("a",{attrs:{href:"http://www.xinnet.com/domain/domain.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("新网"),a("OutboundLink")],1),s._v(" 或 "),a("a",{attrs:{href:"https://wanwang.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("万网"),a("OutboundLink")],1),s._v(" 购买")]),s._v(" "),a("p",[s._v("我是在新网购买的，下面以新网为例，万网是类似的。")]),s._v(" "),a("p",[s._v("购买完成后进入管理后台，点击 ”解析“ 按钮，添加下面两条内容：\n"),a("img",{attrs:{src:"/images/eg5.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/eg6.png",alt:""}})]),s._v(" "),a("p",[s._v("注意这里有坑！！！在 万网 购买域名的同学请注意，第二条记录中的 * 请用 @ 代替，万网不支持 *")]),s._v(" "),a("p",[s._v("记录值里的 IP 可以通过 ping 自己的域名得到：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("ping www.username.github.io\n")])])]),a("h3",{attrs:{id:"添加-cname-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加-cname-文件"}},[s._v("#")]),s._v(" 添加 CNAME 文件")]),s._v(" "),a("p",[s._v("在仓库一 USERNAME.github.io 中找到 Settings > Custom domain 把 www.zhangyunchen.cc 添加进去即可。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/images/eg8.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"大功告成-打开-https-www-zhangyunchen-cc-看一下吧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大功告成-打开-https-www-zhangyunchen-cc-看一下吧"}},[s._v("#")]),s._v(" 👏 大功告成，打开 "),a("a",{attrs:{href:"https://www.zhangyunchen.cc",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.zhangyunchen.cc"),a("OutboundLink")],1),s._v(" 看一下吧~~~")]),s._v(" "),a("h2",{attrs:{id:"七、最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、最后"}},[s._v("#")]),s._v(" 七、最后")]),s._v(" "),a("ul",[a("li",[s._v("你需要一些 "),a("a",{attrs:{href:"https://www.jianshu.com/p/b03a8d7b1719",target:"_blank",rel:"noopener noreferrer"}},[s._v("Markdown"),a("OutboundLink")],1),s._v(" 语法的基础知识；")]),s._v(" "),a("li",[s._v("你需要一个 "),a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),a("OutboundLink")],1),s._v(" 账号，并在里面创建两个 repo")]),s._v(" "),a("li",[s._v("Github 需要添加 ssh key，遇到问题可以百度解决；")]),s._v(" "),a("li",[s._v("个人博客不只可以用来写技术相关的内容，也可以有自己写的文章、随笔，甚至上传一些照片。")])]),s._v(" "),a("p",[s._v("以上，")]),s._v(" "),a("p",[s._v("NirvanaJ | Mobike FE | 2021.12")])])}),[],!1,null,null,null);t.default=e.exports}}]);