(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{731:function(e,o,n){"use strict";n.r(o);var r=n(4),t=Object(r.a)({},(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"promise的含义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise的含义"}},[e._v("#")]),e._v(" Promise的含义")]),e._v(" "),n("p",[n("code",[e._v("Promise")]),e._v(" 是针对于异步编程的一种解决方案，在"),n("code",[e._v("Pormise")]),e._v("没有被提出之前，我们处理异步代码都是用回调函数的方法，但大量的回调函数会引起内存泄露，导致代码的执行速度下降。"),n("code",[e._v("Promise")]),e._v("相比于传统的解决方案——回调函数和事件——更加合理和强大。所以在中ES6 将其写进了语言标准，统一了用法，原生提供了"),n("code",[e._v("Promise")]),e._v("对象。")]),e._v(" "),n("h2",{attrs:{id:"promise的基本用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise的基本用法"}},[e._v("#")]),e._v(" Promise的基本用法")]),e._v(" "),n("p",[n("code",[e._v("Promise")]),e._v("函数接收一个函数作为参数，这个函数可以有两个参数，一个是成功函数("),n("code",[e._v("resolve")]),e._v(")，一个是失败函数("),n("code",[e._v("reject")]),e._v(")。Promise的.then接收两个回调函数，一个是成功函数的回调，一个是失败函数的回调。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("   const myPromise = new Promise(function (resolve, reject) {\n       resolve()\n       reject()\n   });\n   myPromise.then(function (value) { //成功\n       console.log('success');\n   }, function (error) { //失败\n       console.log('file');\n   })\n\n")])])]),n("p",[n("code",[e._v("resolve")]),e._v("函数的作用是，将"),n("code",[e._v("Promise")]),e._v("对象的状态从“未完成”变为“成功”，在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；"),n("code",[e._v("reject")]),e._v("函数的作用是，将"),n("code",[e._v("Promise")]),e._v("对象的状态从“未完成”变为“失败，在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。"),n("code",[e._v("Promise")]),e._v("对象中的状态不会被外界干扰。状态的改变取决于异步的操作结果。成功即执行"),n("code",[e._v("reslove")]),e._v("函数，失败即执行"),n("code",[e._v("reject")]),e._v("。且"),n("code",[e._v("Promise")]),e._v("对象的状态一旦被改变，就不会进行再次改变。")]),e._v(" "),n("h2",{attrs:{id:"promise的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise的方法"}},[e._v("#")]),e._v(" Promise的方法")]),e._v(" "),n("p",[e._v("1.Promise.prototype.then()")]),e._v(" "),n("p",[e._v("then方法的返回结果是"),n("code",[e._v("新的Promise实例")]),e._v("，对象状态由回调函数的执行结果决定。then方法后面还可以再调用另一个then方法，形成链条。采用"),n("code",[e._v("链式的then")]),e._v("，可以指定一组"),n("code",[e._v("按照次序调用")]),e._v("的回调函数。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function xq() {\n    return new Promise((resolve, reject) => {\n      setTimeout(() => {\n        console.log('相亲了！');\n        resolve('ok')\n      }, 2000)\n    })\n  }\nfunction marry() {\n    return new Promise((resolve, reject) => {\n      setTimeout(() => {\n        console.log('结婚了');\n        resolve('好开心')\n      }, 1000)\n    })  \n  }\nfunction baby() {\n   setTimeout(() => {\n      console.log('出生了！');\n    }, 500)\n  }\n  xq()\n    .then(marry)\n    .then(baby)\n")])])]),n("p",[n("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8b947f03860427580edbc92c895f727~tplv-k3u1fbpfcp-watermark.image?",alt:"微信图片_20220720185056.png"}})]),e._v(" "),n("p",[e._v("在上面这段异步代码中，当我想让他们按照相亲、结婚、出生的顺序执行的话，我们就要给他们加上"),n("code",[e._v("promise")]),e._v("对象，当我们在调用"),n("code",[e._v("xq")]),e._v("函数时我们在后面加入"),n("code",[e._v(".then")]),e._v("方法返回一个"),n("code",[e._v("新的promise对象")]),e._v("执行"),n("code",[e._v("marry")]),e._v("函数，再在"),n("code",[e._v("marry")]),e._v("函数中加入"),n("code",[e._v(".then")]),e._v("方法再返回一个"),n("code",[e._v("新的promise对象")]),e._v("执行"),n("code",[e._v("baby")]),e._v("函数。让它的执行顺序为相亲、结婚、出生。")]),e._v(" "),n("p",[e._v("2.Promise.prototype.catch()")]),e._v(" "),n("p",[e._v("catch()用于指定发生错误时的回调函数,在下面这段代码中，我们用"),n("code",[e._v("a.catch(funtion(error))")]),e._v("将上面"),n("code",[e._v("promise")]),e._v("中的失败函数的结果打印出来了。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function a() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('aaa');\n      reject('fail');\n    }, 1000)\n  });\n}\na().catch(function (error) {\n  console.log(error);\n})\n")])])]),n("p",[n("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13a7675670804eb28d74d26bbfbe693d~tplv-k3u1fbpfcp-watermark.image?",alt:"微信图片_20220720192052.png"}})]),e._v(" "),n("p",[e._v("3.Promise.prototype.finally()")]),e._v(" "),n("p",[n("code",[e._v("finally()")]),e._v("方法用于指定不管 "),n("code",[e._v("Promise")]),e._v(" 对象最后状态如何，都会执行的操作。而且"),n("code",[e._v("finally")]),e._v("方法总是会返回原来的值。在下面这段代码中，"),n("code",[e._v("a")]),e._v("函数虽然回调失败，返回了"),n("code",[e._v("reject")]),e._v("，但是"),n("code",[e._v("c")]),e._v("函数还是执行了。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function a() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('aaa');\n      reject('fail');\n    }, 1000)\n  });\n}\nfunction c() {\n  setTimeout(() => {\n    console.log('ccc');\n  }, 500)\n}\na().finally(c)\n")])])]),n("p",[n("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58a1bf4a256b487cafa8795bcbb5a11e~tplv-k3u1fbpfcp-watermark.image?",alt:"微信图片_20220720193451.png"}}),e._v("\n4.Promise.all()")]),e._v(" "),n("p",[n("code",[e._v("all()")]),e._v("是将多个 "),n("code",[e._v("Promise")]),e._v(" 实例，包装成一个新的 "),n("code",[e._v("Promise")]),e._v(" 实例。接收一个数组作为参数，数组的每一项都是"),n("code",[e._v("Promise")]),e._v("对象的实例。如果不是，会通过"),n("code",[e._v("Promise.resolve()")]),e._v("将参数转为"),n("code",[e._v("Promise")]),e._v("实例，再进行处理。"),n("code",[e._v("all()用于将多个 Promise 实例，包装成一个新的 Promise 实例")]),e._v("。在下面这段代码中，只有"),n("code",[e._v("all()")]),e._v("所有的"),n("code",[e._v("promise")]),e._v("实例执行完，"),n("code",[e._v("C")]),e._v("函数就会执行。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function a() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('aaa');\n      resolve('ok');\n    }, 1000)\n  });\n}\nfunction b() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('bbb');\n      resolve('ok');\n    }, 2000)\n  });\n}\nfunction c() {\n  setTimeout(() => {\n    console.log('ccc');\n  }, 500)\n}\n Promise.all([a(), b()]).then(c)\n")])])]),n("p",[n("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/565c6f5b04b348ae9d60e794837961cf~tplv-k3u1fbpfcp-watermark.image?",alt:"微信图片_20220720200602.png"}}),e._v("\n5.Promise.race()")]),e._v(" "),n("p",[n("code",[e._v("race()")]),e._v("是将多个 "),n("code",[e._v("Promise")]),e._v(" 实例，包装成一个新的 "),n("code",[e._v("Promise")]),e._v(" 实例。接收一个数组作为参数，数组的每一项都是"),n("code",[e._v("Promise")]),e._v("对象的实例。如果不是，会通过"),n("code",[e._v("promise.resolve()")]),e._v("将参数转为"),n("code",[e._v("Promise")]),e._v("实例，再进行处理。"),n("code",[e._v("只要参数的Promise实例有一个率先改变状态，则状态改变")]),e._v("。在下面这段代码中，只要"),n("code",[e._v("race()")]),e._v("有一个"),n("code",[e._v("promise")]),e._v("实例执行完，"),n("code",[e._v("C")]),e._v("函数就会执行。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function a() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('aaa');\n      resolve('ok');\n    }, 1000)\n  });\n}\nfunction b() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      console.log('bbb');\n      resolve('ok');\n    }, 2000)\n  });\n}\nfunction c() {\n  setTimeout(() => {\n    console.log('ccc');\n  }, 500)\n}\n Promise.race([a(), b()]).then(c)\n")])])]),n("p",[n("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76df3cd210b24591ba85302bd2a400a6~tplv-k3u1fbpfcp-watermark.image?",alt:"微信图片_20220720200703.png"}})]),e._v(" "),n("h2",{attrs:{id:"promise的应用场景和不足之处"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#promise的应用场景和不足之处"}},[e._v("#")]),e._v(" Promise的应用场景和不足之处")]),e._v(" "),n("p",[e._v("Promise的应用场景具体有：")]),e._v(" "),n("ol",[n("li",[e._v("Ajax请求")]),e._v(" "),n("li",[e._v("文件读取")]),e._v(" "),n("li",[e._v("图片加载")]),e._v(" "),n("li",[e._v("函数封装")])]),e._v(" "),n("p",[e._v("上述这几个场景中，基本都涉及成功和失败。我们可以用Promise同时对其成功或失败进行不同的处理。使我们的代码可以处理更多不同的情况。")]),e._v(" "),n("p",[e._v("Promise的不足之处具体有：")]),e._v(" "),n("ol",[n("li",[e._v("无法取消Promise,一旦新建它就会立即执行，无法中途取消")]),e._v(" "),n("li",[e._v("如果不设置回调函数，Promise内部抛出的错误，不会反映到外部")]),e._v(" "),n("li",[e._v("当处于pending状态时，无法得知目前进展到哪一个阶段，是刚刚开始还是即将完成")])]),e._v(" "),n("p",[e._v("Promise虽然解决了回调函数的问题，但是它也存在一些未解决的问题，也许在未来我们可以找到更好的方法去解决它。")])])}),[],!1,null,null,null);o.default=t.exports}}]);