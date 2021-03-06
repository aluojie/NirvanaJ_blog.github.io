(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{403:function(n,e,t){"use strict";t.r(e);var s=t(54),a=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h4",{attrs:{id:"一、定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、定义"}},[n._v("#")]),n._v(" 一、定义")]),n._v(" "),t("p",[n._v("DOM2级事件定义了两个事件处理方法：==addEventListener==(event, function, useCapture)和==removeEventListener==(event, function, useCapture)")]),n._v(" "),t("ul",[t("li",[n._v("useCapture == true时，在==捕获阶段==调用事件处理程序；")]),n._v(" "),t("li",[n._v("useCapture == flase(默认)时，在==冒泡阶段==调用事件处理程序")])]),n._v(" "),t("h4",{attrs:{id:"二、事件执行顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、事件执行顺序"}},[n._v("#")]),n._v(" 二、事件执行顺序")]),n._v(" "),t("ul",[t("li",[n._v("事件冒泡：由最具体的元素逐级向上传播到最不具体的节点；叶--\x3e根")]),n._v(" "),t("li",[n._v("事件捕获：由最不具体的元素逐级向下传播到最具体的节点；根--\x3e叶")])]),n._v(" "),t("p",[t("strong",[n._v("w3c模型将两者中和，事件流包括三个阶段：事件捕获阶段 --\x3e处于目标阶段 --\x3e事件冒泡阶段")])]),n._v(" "),t("p",[t("img",{attrs:{src:"http://files.jb51.net/file_images/article/201310/20131028160201571.jpg",alt:"image 100*100"}})]),n._v(" "),t("h4",{attrs:{id:"三、实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、实例"}},[n._v("#")]),n._v(" 三、实例")]),n._v(" "),t("p",[n._v("当事件处于目标阶段时，事件调用顺序决定与书写顺序，demo如下\n"),t("code",[n._v("<html>")])]),n._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("<div id=\"outer\">\n  <div id=\"inner\"></div>\n</div>\n\n<script>\n    var outer = document.getElementById('outer');\n    var inner = document.getElementById('inner');\n    \n    outer.addEventListener('click',function(){\n      alert('outer');\n    },false);\n    inner.addEventListener('click',function(){\n      alert('inner');\n    },false);\n    \n    outer.addEventListener('click',function(){\n      alert('456');\n    },true);\n    inner.addEventListener('click',function(e){\n      alert('123');\n      e.stopPropagation();\n    },true);\n<\/script>\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br"),t("span",{staticClass:"line-number"},[n._v("11")]),t("br"),t("span",{staticClass:"line-number"},[n._v("12")]),t("br"),t("span",{staticClass:"line-number"},[n._v("13")]),t("br"),t("span",{staticClass:"line-number"},[n._v("14")]),t("br"),t("span",{staticClass:"line-number"},[n._v("15")]),t("br"),t("span",{staticClass:"line-number"},[n._v("16")]),t("br"),t("span",{staticClass:"line-number"},[n._v("17")]),t("br"),t("span",{staticClass:"line-number"},[n._v("18")]),t("br"),t("span",{staticClass:"line-number"},[n._v("19")]),t("br"),t("span",{staticClass:"line-number"},[n._v("20")]),t("br"),t("span",{staticClass:"line-number"},[n._v("21")]),t("br"),t("span",{staticClass:"line-number"},[n._v("22")]),t("br"),t("span",{staticClass:"line-number"},[n._v("23")]),t("br")])]),t("blockquote",[t("p",[n._v("执行结果：456 -> inner -> 123 -> (outer)\nstopPropagation()用来阻止事件进行，因此123之后的outer不执行；")])]),n._v(" "),t("hr")])}),[],!1,null,null,null);e.default=a.exports}}]);