(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[469],{2843:function(e,t,s){Promise.resolve().then(s.bind(s,4232))},8690:function(e,t,s){"use strict";s.d(t,{y:function(){return i}});var n=s(7437),a=s(2265),l=s(9338),r=s(518),c=s(7592);function i(e){let t,{reviews:s,title:i="Rese\xf1as de Clientes"}=e,[d,h]=(0,a.useState)(0),[o,u]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{if(s.length<=1)return;let e=setInterval(()=>{o||h(e=>e===s.length-1?0:e+1)},4e3);return()=>clearInterval(e)},[s.length,o]),!s||0===s.length)return(0,n.jsx)("div",{className:"text-center py-8",children:(0,n.jsx)("p",{className:"text-gray-500",children:"No hay rese\xf1as disponibles a\xfan."})});let x=s[d];return(0,n.jsxs)("div",{className:"bg-gradient-to-br from-warmWhite to-softPink/20 rounded-2xl p-6",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[(0,n.jsx)("h3",{className:"text-xl font-bold text-gray-800",children:i}),(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsxs)("span",{className:"text-sm text-gray-600",children:[d+1," de ",s.length]}),o&&(0,n.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,n.jsx)("button",{onClick:()=>{h(e=>0===e?s.length-1:e-1)},className:"p-1 rounded-full hover:bg-theme/20 transition-colors",children:(0,n.jsx)(r.Z,{className:"w-4 h-4 text-theme"})}),(0,n.jsx)("button",{onClick:()=>{h(e=>e===s.length-1?0:e+1)},className:"p-1 rounded-full hover:bg-theme/20 transition-colors",children:(0,n.jsx)(c.Z,{className:"w-4 h-4 text-theme"})})]})]})]}),(0,n.jsxs)("div",{className:"relative",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[(0,n.jsxs)("div",{className:"bg-white rounded-xl p-6 shadow-lg border border-softPink/20",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h4",{className:"font-semibold text-gray-800",children:x.name}),(0,n.jsxs)("div",{className:"flex items-center space-x-1 mt-1",children:[(t=x.rating,Array.from({length:5},(e,s)=>(0,n.jsx)(l.Z,{className:"w-4 h-4 ".concat(s<t?"text-yellow-400 fill-current":"text-gray-300")},s))),(0,n.jsxs)("span",{className:"text-sm text-gray-500 ml-2",children:[x.rating,"/5"]})]})]}),(0,n.jsx)("span",{className:"text-sm text-gray-500",children:new Date(x.date).toLocaleDateString("es-MX")})]}),(0,n.jsxs)("p",{className:"text-gray-700 leading-relaxed",children:['"',x.comment,'"']})]}),s.length>1&&(0,n.jsx)("div",{className:"flex justify-center space-x-2 mt-4",children:s.map((e,t)=>(0,n.jsx)("button",{onClick:()=>h(t),className:"w-2 h-2 rounded-full transition-all ".concat(t===d?"bg-theme w-6":"bg-gray-300 hover:bg-theme/50")},t))})]}),s.length>1&&(0,n.jsx)("div",{className:"flex items-center justify-center mt-4",children:(0,n.jsxs)("div",{className:"flex items-center space-x-2 text-sm text-gray-500",children:[(0,n.jsx)("div",{className:"w-2 h-2 rounded-full ".concat(o?"bg-gray-300":"bg-theme")}),(0,n.jsx)("span",{children:o?"Pausado":"Auto-scroll"})]})})]})}},518:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s(8030).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},7592:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s(8030).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},5733:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s(8030).Z)("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},4042:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s(8030).Z)("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]])},3907:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s(8030).Z)("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]])},9338:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,s(8030).Z)("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]])}},function(e){e.O(0,[484,232,971,23,744],function(){return e(e.s=2843)}),_N_E=e.O()}]);