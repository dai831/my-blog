(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{739:function(e,n,t){"use strict";t.r(n);var a=t(4),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("p",[e._v("由于 JS 是一门"),t("strong",[e._v("弱类型")]),e._v("或者说是"),t("strong",[e._v("动态语言")]),e._v("。变量没有类型限制，可以随时赋予任意值。所以在 JS 定义的数据类型是不确定的，但是但是各种运算符对数据类型是有要求的。如果运算符发现，运算值的类型与预期不符，就会自动进行转换类型。")]),e._v(" "),t("h1",{attrs:{id:"原始类型之间的转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原始类型之间的转换"}},[e._v("#")]),e._v(" 原始类型之间的转换")]),e._v(" "),t("p",[e._v("在ES5中定义的只要原始类型主要有‘字符串（String）’，‘数字（Number）’，‘布尔值（Boolean）’，undifined和Null，其中类型转换主要有原始类型转布尔，数字，字符串三种。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let str = 'hello'\nlet num = 0\nlet bool = false\nlet un = undefined\nlet nu = null\n\n//原始值转布尔\nconsole.log(Boolean(str));  // false\nconsole.log(Boolean(num)); // 0 false   其他为 ture\nconsole.log(Boolean(bool));  //false\nconsole.log(Boolean(un));   //false\nconsole.log(Boolean(nu));  //fasle\nconsole.log(Boolean(NaN));  //fasle\n\n\n//原始值转数字\nconsole.log(Number()); // 0\nconsole.log(Number(str)); // NaN   \nconsole.log(Number(bool)); // 0\nconsole.log(Number(undefined)); // NaN\nconsole.log(Number(nu)); // 0\n\n\n//原始值转字符串\nconsole.log(String(num)); // -1\nconsole.log(String(bool)); // false\nconsole.log(String(un)); // undefined\nconsole.log(String(NaN)); // NaN\nconsole.log(String(Infinity)); // Infinity\n")])])]),t("h2",{attrs:{id:"原始类型转对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原始类型转对象"}},[e._v("#")]),e._v(" 原始类型转对象")]),e._v(" "),t("p",[e._v("原始类型得转换不仅仅停留在原始值之间的转换，还有原始类型和对象之间的转换。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//原始值转对象\n\n// String()  Number()  Boolean()\n\nlet a = 1  || '1' true\nconsole.log(typeof a);  // number\nlet b = new Number(a)\nconsole.log(typeof b);  // object\n")])])]),t("h2",{attrs:{id:"对象转原始类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象转原始类型"}},[e._v("#")]),e._v(" 对象转原始类型")]),e._v(" "),t("p",[e._v("既然存在原始类型转对象，那就必然也有对象转原始类型。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 对象转原始类型\n\n//对象转布尔\nconsole.log(Boolean([]));  //所有引用类型转对象都为 true\n\n//对象转数字和字符串\n\n// toString() valueOf()  对象转字符串和数字的方法\n\nObject.prototype.toString.call({a: 1})  // '[object Object]'\n\nlet  s = new String('hello') //用String去new一个字符串 \nconsole.log(s);  //打印出String {'hello'} 对象\n\nlet obj = {\"a\": 1}\nlet a = JSON.stringify(obj) //对象转字符串\nJSON.parse(a)  // 字符串转对象\n")])])]),t("p",[e._v("对象转原始类型一定会调用ToPrimitive(obj,Number/String)方法，\nToPrimitive(input,PreferredType),\nPreferredType不存在时，默认为String，input是Date类型，相当于PreferredType==String")]),e._v(" "),t("p",[e._v("ToPrimitive(obj, Number)")]),e._v(" "),t("ol",[t("li",[e._v("如果obj是基本类型，直接返回")]),e._v(" "),t("li",[e._v("否则，调用valueOf（取原始值） 方法，如果得到一个原始类型，则返回")]),e._v(" "),t("li",[e._v("否则，调用toString 方法，如果得到一个原始类型，则返回")]),e._v(" "),t("li",[e._v("否则报错")])]),e._v(" "),t("p",[e._v("ToPrimitive(obj, String)")]),e._v(" "),t("ol",[t("li",[e._v("如果obj是基本类型，直接返回")]),e._v(" "),t("li",[e._v("否则，调用toString 方法，如果得到一个原始类型，则返回")]),e._v(" "),t("li",[e._v("否则，调用valueOf 方法，如果得到一个原始类型，则返回")]),e._v(" "),t("li",[e._v("否则报错")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("String({name:'duck'})  //'[object Object]' \n//执行过程\n\n//({name:'duck'}).toString()//'[object Object]' \n//String('[object Object]')=>'[object Object]'\n\n\nNumber({})//NaN \n//执行过程\n\n//({}).valueOf()//{}\n//({}).toString()//'[object Object]'\n//Number('[object Object]')=>NaN \n\nNumber([])//0\n\n")])])]),t("h2",{attrs:{id:"隐式类型转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#隐式类型转换"}},[e._v("#")]),e._v(" 隐式类型转换")]),e._v(" "),t("h3",{attrs:{id:"一元运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一元运算符"}},[e._v("#")]),e._v(" 一元运算符")]),e._v(" "),t("p",[e._v("v1")]),e._v(" "),t("p",[e._v("当 - 运算作为一元操作符时，会调用ToNumber()处理该值（非Number类型的值），转不了的变为NaN")]),e._v(" "),t("p",[e._v("当 + 运算作为一元操作符时，会调用ToNumber()处理该值（非Number类型的值）,转不了的变为NaN")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1 + '1' //'11'  \n[] == ![] // ture  ![] == false == 0\n[] == [] // false  数组的引用地址不一样\n[] + [] // ''\n[] + {} // '[object Object]'\n{} + [] // 0  == + []\n")])])]),t("h3",{attrs:{id:"二元操作符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二元操作符"}},[e._v("#")]),e._v(" 二元操作符")]),e._v(" "),t("p",[e._v("v1 + v2 (都往数字身上转，遇到字符串转字符串)")]),e._v(" "),t("ol",[t("li",[e._v("lprim = Toprimitive(v1)")]),e._v(" "),t("li",[e._v("rprim = Toprimitive(v2)")]),e._v(" "),t("li",[e._v("如果lprim 或者 rprim 是字符串 那么返回 ToString（lprim） 和 ToString（rprim）的拼接结果")]),e._v(" "),t("li",[e._v("返回ToNumber（lprim） 和 ToNumber（rprim） 的相加结果")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" 1 + '1' //'11'\n null + 1  // 1\n [] + []  // ''\n [] + {} // '[object Object]'\n{} + [] // 0  == {  }//代码块   + []\n({} + []) // '[object Object]'\n{} + {} // '[object Object][object Object]'\n\n")])])]),t("h3",{attrs:{id:"二元运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二元运算符"}},[e._v("#")]),e._v(" 二元运算符")]),e._v(" "),t("h4",{attrs:{id:"如果x和y是同一类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果x和y是同一类型"}},[e._v("#")]),e._v(" 如果x和y是同一类型：")]),e._v(" "),t("p",[e._v("1.x是undefined,返回true")]),e._v(" "),t("p",[e._v("2.x是null,返回true")]),e._v(" "),t("p",[e._v("3.x是数字，x为NaN,返回false")]),e._v(" "),t("p",[e._v("4.x和y指向同一个对象（内存地址），返回true,否则返回false")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let x={};\nlet y=x;\nx==y // true\n\n{}=={} // false\n\n[]==[] // false\n\nundifined == undifined // true\n\nnull == null  // true\n \n1 == NaN  // false\n\nNaN == NaN  // false\n")])])]),t("h4",{attrs:{id:"如果x和y不是同一类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果x和y不是同一类型"}},[e._v("#")]),e._v(" 如果x和y不是同一类型")]),e._v(" "),t("p",[e._v("1.null==undefined =>true")]),e._v(" "),t("p",[e._v("2.x是String类型，ToNumber(x)")]),e._v(" "),t("p",[e._v("3.x是Boolean类型,ToNumber(x)")]),e._v(" "),t("p",[e._v("4.x不是String/Number,y是Object true=={a:123} //false")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("null == undifined // true\n\n'1' == 1 // ture\n\nture == '1' // ture\n \nture == 1 // ture\n \nture == {} // flase\n\nfalse == {} //flase\n\n\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);