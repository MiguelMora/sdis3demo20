(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{360:function(t,e,r){var content=r(426);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1930a9a0",content,!0,{sourceMap:!1})},361:function(t,e,r){var content=r(429);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("445c8038",content,!0,{sourceMap:!1})},366:function(t,e,r){"use strict";r.r(e);r(425);var o=r(82),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null);e.default=component.exports},367:function(t,e,r){"use strict";r.r(e);r(428);var o=r(82),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"VuetifyLogo",attrs:{alt:"Vuetify Logo",src:r(427)}})}),[],!1,null,null,null);e.default=component.exports},377:function(t,e,r){"use strict";r(7),r(10),r(8),r(47),r(142),r(96),r(346),r(25),r(15),r(16),r(11),r(14),r(32),r(48),r(67),r(77),r(9),r(49);var o=r(2),n=(r(236),r(0)),l=r(76),c=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(c.F)(e)]={type:[String,Number],default:null},t}),{}),x=v.reduce((function(t,e){return t["order"+Object(c.F)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(x)};function w(t,e,r){var o=t;if(null!=r&&!1!==r){if(e){var n=e.replace(t,"");o+="-".concat(n)}return"col"!==t||""!==r&&!0!==r?(o+="-".concat(r)).toLowerCase():o.toLowerCase()}}var j=new Map;e.a=n.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,n=e.children,c=(e.parent,"");for(var f in r)c+=String(r[f]);var d=j.get(c);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var o=r[t],n=w(e,t,o);n&&d.push(n)}));var n=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!n||!r.cols},Object(o.a)(t,"col-".concat(r.cols),r.cols),Object(o.a)(t,"offset-".concat(r.offset),r.offset),Object(o.a)(t,"order-".concat(r.order),r.order),Object(o.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),j.set(c,d)}(),t(r.tag,Object(l.a)(data,{class:d}),n)}})},425:function(t,e,r){"use strict";r(360)},426:function(t,e,r){(e=r(17)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=e},427:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4Ny41IDEwMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMxNjk3ZjY7fS5jbHMtMntmaWxsOiM3YmM2ZmY7fS5jbHMtM3tmaWxsOiMxODY3YzA7fS5jbHMtNHtmaWxsOiNhZWRkZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5BcnRib2FyZCA0NjwvdGl0bGU+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI0My43NSAwIDIzLjMxIDAgNDMuNzUgNDguMzIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNDMuNzUgNjIuNSA0My43NSAxMDAgMCAxNC41OCAyMi45MiAxNC41OCA0My43NSA2Mi41Ii8+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSI0My43NSAwIDY0LjE5IDAgNDMuNzUgNDguMzIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTQiIHBvaW50cz0iNjQuNTggMTQuNTggODcuNSAxNC41OCA0My43NSAxMDAgNDMuNzUgNjIuNSA2NC41OCAxNC41OCIvPjwvc3ZnPgo="},428:function(t,e,r){"use strict";r(361)},429:function(t,e,r){(e=r(17)(!1)).push([t.i,".VuetifyLogo{height:180px;width:180px;transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=e},439:function(t,e,r){"use strict";r.r(e);var o=r(366),n=r(367),l={components:{Logo:o.default,VuetifyLogo:n.default}},c=r(82),f=r(116),d=r.n(f),v=r(183),m=r(359),h=r(345),x=r(377),y=r(378),w=r(341),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("div",{staticClass:"text-center"},[r("logo"),t._v(" "),r("vuetify-logo")],1),t._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("\n        Welcome to the Vuetify + Nuxt.js template\n      ")]),t._v(" "),r("v-card-text",[r("p",[t._v("Vuetify is a Progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.")]),t._v(" "),r("p",[t._v("\n          For more information on Vuetify, check out the "),r("a",{attrs:{href:"https://vuetifyjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            documentation\n          ")]),t._v(".\n        ")]),t._v(" "),r("p",[t._v("\n          If you have questions, please join the official "),r("a",{attrs:{href:"https://chat.vuetifyjs.com/",target:"_blank",rel:"noopener noreferrer",title:"chat"}},[t._v("\n            discord\n          ")]),t._v(".\n        ")]),t._v(" "),r("p",[t._v("\n          Find a bug? Report it on the github "),r("a",{attrs:{href:"https://github.com/vuetifyjs/vuetify/issues",target:"_blank",rel:"noopener noreferrer",title:"contribute"}},[t._v("\n            issue board\n          ")]),t._v(".\n        ")]),t._v(" "),r("p",[t._v("Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.")]),t._v(" "),r("div",{staticClass:"text-xs-right"},[r("em",[r("small",[t._v("— John Leider")])])]),t._v(" "),r("hr",{staticClass:"my-3"}),t._v(" "),r("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n          Nuxt Documentation\n        ")]),t._v(" "),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n          Nuxt GitHub\n        ")])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",nuxt:"",to:"/inspire"}},[t._v("\n          Continue\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{Logo:r(366).default,VuetifyLogo:r(367).default}),d()(component,{VBtn:v.a,VCard:m.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VCol:x.a,VRow:y.a,VSpacer:w.a})}}]);