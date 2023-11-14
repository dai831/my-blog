(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{740:function(o,e,t){"use strict";t.r(e);var n=t(4),_=Object(n.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[o._v("#")]),o._v(" 前言")]),o._v(" "),t("p",[o._v("首先我们来了解了解原型和原型链的概念：")]),o._v(" "),t("ul",[t("li",[o._v("原型的定义，原型叫"),t("code",[o._v("prototype")]),o._v("是函数"),t("code",[o._v("function")]),o._v("对象的一个属性，它是构造函数（new运算符调用的函数）制造出来的对象的公共祖先,通过构造函数产生的对象可以继承到该原型的属性和对象，原型也是对象。"),t("code",[o._v("prototype")]),o._v("也称为函数的原型（显示原型）；")]),o._v(" "),t("li",[t("code",[o._v("__proto__")]),o._v("(或者"),t("code",[o._v("[[prototype]]")]),o._v(")实例对象的原型，也成为隐式原型。同时实例对象的隐式原型等于构造函数的显示原型")]),o._v(" "),t("li",[t("code",[o._v("constructor")]),o._v("是让构造函数构造出来的所有的对象都能找到自己的构造器。")]),o._v(" "),t("li",[o._v("原型链的定义：将原型以链表的方式连接起来，就形成了原型链，访问顺序按链表的顺序依次访问。")]),o._v(" "),t("li",[o._v("两者的区别：对象的原型（"),t("code",[o._v("__proto__")]),o._v("）与构造函数的原型(prototype)属性之间性质不一样。前者是每个实例上都有的属性，后者是构造函数的属性。")])]),o._v(" "),t("h2",{attrs:{id:"原型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原型"}},[o._v("#")]),o._v(" 原型")]),o._v(" "),t("ul",[t("li",[o._v("首先，我们先来见识见识原型。")])]),o._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[o._v("//person.prototype ---原型\n\nPerson.prototype.name = 'weige'\nfunction Person(){\n    this.name = 'wn'\n}\nvar person = new Person()\nconsole.log(person);\n")])])]),t("p",[t("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd0332e109084dd29a7a72f62d2215b2~tplv-k3u1fbpfcp-watermark.image?",alt:"微信图片_20220719094620.png"}}),o._v("\n如图所示，我们将构造函数"),t("code",[o._v("Person")]),o._v("的原型浏览器上打印，可以清楚地看到原型的‘庐山真面目’。在上面这段代码中，我们向原型添加了两个"),t("code",[o._v("name")]),o._v("属性，其中用"),t("code",[o._v("Person.prototype")]),o._v("显示原型的方法添加到了"),t("code",[o._v("person")]),o._v("的隐式原型。用"),t("code",[o._v("this.name")]),o._v("的方法就直接添加到了"),t("code",[o._v("Person")]),o._v("对象上。同时我们还可以看到原型的构造器函数"),t("code",[o._v("constructor")]),o._v("，记录着构造出的"),t("code",[o._v("Person")]),o._v("函数的显式原型。")]),o._v(" "),t("ul",[t("li",[o._v("接下来，我们来聊聊隐式原型和显示原型。")])]),o._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[o._v("Person.prototype.name = 'wn'\nfunction Person(){\n}\nvar person = new Person()\nconsole.log(person.__proto__);\n")])])]),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d5be1f94f554373855f8c9d54da41c4~tplv-k3u1fbpfcp-watermark.image?",alt:"微信图片_20220719175647.png"}}),o._v("\n如图所示，我们构造了一个"),t("code",[o._v("Person")]),o._v("函数，我们向函数"),t("code",[o._v("Person")]),o._v("的显式原型中添加一个属性"),t("code",[o._v("name")]),o._v("且值为"),t("code",[o._v("wn")]),o._v("，现在我们去直接打印"),t("code",[o._v("person")]),o._v("的隐式原型。我们在"),t("code",[o._v("person")]),o._v("的隐式原型中看到"),t("code",[o._v("{name:'wn'}")]),o._v("，为什么我们向对象的显示原型添加属性，却没出现在"),t("code",[o._v("Person")]),o._v("对象中，而出现在"),t("code",[o._v("perosn")]),o._v("的隐式原型中呢。这时候我们应该这么认为“"),t("code",[o._v("实例对象隐式原型等于构造函数显示原型")]),o._v("”。")]),o._v(" "),t("ul",[t("li",[o._v("在了解完原型后，我们来看看原型的基本用法")])]),o._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[o._v("//增\n   function Person(){}\n   Person.prototype.lastname ='pan'\n//删\n   function Person(){}\n   Person.prototype.lastname ='pan'\n   delete Person.prototype.lastName\n//改\n   function Person(){}\n   Person.prototype.lastname ='pan'\n   Person.prototype.lastname ='zhang'\n//查\n   function Person(){}\n   Person.prototype.lastname ='pan'\n   var person = new Person()\n   console.log(person.lastname);\n")])])]),t("p",[o._v("原型的基本用法为‘增删改查’，和对象的用法一样，但是要注意的一点原型‘增删改查’是对构造函数的显式原型prototype进行操作，将键值对增加到实例对象的隐式原型中。")]),o._v(" "),t("h2",{attrs:{id:"原型链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[o._v("#")]),o._v(" 原型链")]),o._v(" "),t("p",[o._v("在了解完原型后，我们再来看看原型链是怎样的呢？那我们就上图来分析分析吧。")]),o._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aef3da71e5e14bfb8b145770cfcde23a~tplv-k3u1fbpfcp-watermark.image?",alt:"60B47CCF-F24E-42D8-8ECE-692DEE5E1CA5.png"}}),o._v("\n想要理解原型链，我们只要看懂这张图。下面我来带大家分析分析。")]),o._v(" "),t("p",[o._v("首先我们构造"),t("code",[o._v("function Foo()")]),o._v("函数，函数Foo的显式原型为"),t("code",[o._v("Foo.prototype")]),o._v(",函数Foo的隐式原型就是"),t("code",[o._v("_proto_")]),o._v("；")]),o._v(" "),t("p",[t("strong",[o._v("（实例对象的隐式原型 === 构造函数的显式原型。）")])]),o._v(" "),t("p",[o._v("而构造函数"),t("code",[o._v("Foo")]),o._v("的隐式原型"),t("code",[o._v("（ __ proto __ ）")]),o._v("指向"),t("code",[o._v("Object.prototype")]),o._v("，因为所有的构造函数的显示对象的隐式原型都会指向对象"),t("code",[o._v("Object")]),o._v("。")]),o._v(" "),t("p",[t("strong",[o._v("（所有function函数是通过Function函数构造出来的）")])]),o._v(" "),t("p",[o._v("那么下面我们看看为什么"),t("code",[o._v("function Function()")]),o._v("和"),t("code",[o._v("Function.prototype")]),o._v("会形成环装结构，首先因为"),t("code",[o._v("Function")]),o._v("是一个函数，函数就是一种对象，就会有隐式原型属性和显示原型属性。既然是函数，那么它一定是被"),t("code",[o._v("Function")]),o._v("创建。所以"),t("code",[o._v("function Function()")]),o._v("的显式原型一定是"),t("code",[o._v("Function.prototype")]),o._v("，那接下来就是理解"),t("code",[o._v("function Function()")]),o._v("的隐式原型还是"),t("code",[o._v("Function.prototype")]),o._v("了。")]),o._v(" "),t("p",[o._v("既然是函数是被"),t("code",[o._v("Function")]),o._v("函数构造出来的，那么我们也可以把"),t("code",[o._v("function Function()")]),o._v("看成一个实例对象，实例对象的隐式原型不就是构造函数"),t("code",[o._v("Function")]),o._v("的显式原型吗？"),t("code",[o._v("Function.prototype")]),o._v("也是一个对象的显示原型，所以它的隐式原型也就自然指向"),t("code",[o._v("Object.prototype")])]),o._v(" "),t("p",[o._v("最后因为对象也是被构造函数创建出来的，所以"),t("code",[o._v("function Object()")]),o._v("的隐式原型就是构造函数的显式原型"),t("code",[o._v("Function.prototype")]),o._v("，当然函数对象的显式原型就是"),t("code",[o._v("Object.prototype")]),o._v(",构造函数new出来的实例对象的隐式原型就"),t("code",[o._v("Object.prototype")]),o._v("； 因为万物皆对象，所以"),t("code",[o._v("Object.prototype")]),o._v("是最顶端了，它的隐式原型就指向了"),t("code",[o._v("null")]),o._v("。")])])}),[],!1,null,null,null);e.default=_.exports}}]);