/*!
 * my-metadata v1.0.0 
 * Copyright 2017-present, hero.
 * All rights reserved.
 * Author: hero
 *         
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{367:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{staticClass:"chain-icon",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:t.width+"px",height:t.width+"px",fill:t.fill,mr:"4px"},on:{click:function(e){return t.$emit("click")}}},[s("use",{attrs:{"xlink:href":t.sprite+"#"+t.name}})])};n._withStripped=!0;var i=s.p+"svg/sprite.svg?88c1385",a={data:()=>({sprite:i}),props:{name:String,fill:{type:String,default:"#666"},width:{type:Number,default:15}}},r=s(99),o=Object(r.a)(a,n,[],!1,null,null,null);o.options.__file="src/components/svg.vue";e.a=o.exports},372:function(t,e,s){t.exports=s.p+"img/coin3.png?d2a99ea"},378:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}}),t._v(" "),s("div",{class:["menu",{"menu-box-show":t.showMenu}]},[s("router-link",{class:["link",{active:"/"==t.key}],attrs:{to:"/"}},[t._v("home")]),t._v(" "),s("router-link",{class:["link",{active:"/nft"==t.key}],attrs:{to:"/nft"}},[t._v("nft")]),t._v(" "),s("router-link",{class:["link",{active:"/team"==t.key}],attrs:{to:"/team"}},[t._v("team")]),t._v(" "),s("span",{staticClass:"link"},[t._v("help")]),t._v(" "),s("router-link",{class:["link",{active:"/ido"==t.key}],attrs:{to:"/ido"}},[t._v("ido")]),t._v(" "),s("span",{staticClass:"link-wallet",on:{click:t.getAccount}},[t._v(t._s(t.shortAddress||"Connect wallet"))]),t._v(" "),s("span",{staticClass:"space"}),t._v(" "),s("Space",[s("span",{staticClass:"icon coin1"}),t._v(" "),s("span",{staticClass:"value"},[t._v("0")])]),t._v(" "),s("Space",[s("span",{staticClass:"icon coin2"}),t._v(" "),s("span",{staticClass:"value"},[t._v("0")])]),t._v(" "),s("Space",[s("span",{staticClass:"icon coin3"}),t._v(" "),s("span",{staticClass:"value"},[t._v(t._s(10*t.bdl))])]),t._v(" "),s("span",{staticClass:"spit"}),t._v(" "),s("Button",{staticClass:"btn",on:{click:t.getAccount}},[t._v(t._s(t.shortAddress||"Connect wallet"))])],1),t._v(" "),s("span",{class:["menu-icon",{"menu-icon-active":t.showMenu}],on:{click:function(e){e.stopPropagation(),t.showMenu=!t.showMenu}}})],1)};n._withStripped=!0;var i=s(68);function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){o(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var c={data(){return{key:this.$route.path,showMenu:!1}},computed:r({},Object(i.b)(["shortAddress","address","bdl"])),mounted(){document.addEventListener("click",(t=>{this.showMenu&&(t.target.contains(this.$refs.menu)||(this.showMenu=!1))})),this.init()},methods:r(r({},Object(i.c)(["setAddress","getAccount","setBDL"])),{},{updateBDL(){this.$http.get("/user/bdl/mytotal",(t=>{this.setBDL(1*t.data.total)}))},init(){void 0!==window.ethereum&&(ethereum.on("disconnect",(t=>{this.setAddress("")})).on("connect",(t=>{localStorage.getItem("ticket")?this.updateBDL():this.$http.post("/open/wallet/login",{address:accounts[0]},(t=>{t.data.ticket&&localStorage.setItem("ticket",t.data.ticket),this.updateBDL()}))})),ethereum.isConnected()&&this.getAccount((()=>{this.updateBDL()})))}})},l=s(99),u=Object(l.a)(c,n,[],!1,null,null,null);u.options.__file="src/main/boradlands/header.vue";e.a=u.exports},379:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"social"},t._l(t.socials,(function(e,n){return s("SI",{key:n,attrs:{name:n,width:22},on:{click:function(s){return t.toso(e)}}})})),1),t._v(" "),s("div",{staticClass:"copyright"},[t._v("Copyright © 2021 Borderlands All Rights Reserved")])])};n._withStripped=!0;var i={components:{SI:s(367).a},data:()=>({socials:{telegram:"https://t.me/borderlandsOffice",twitter:"https://twitter.com/Borderlands000",facebook:"",reddit:"",medium:"",github:"",discord:""}}),methods:{toso(t){t&&window.open(t)}}},a=s(99),r=Object(a.a)(i,n,[],!1,null,null,null);r.options.__file="src/main/boradlands/footer.vue";e.a=r.exports},409:function(t,e,s){t.exports=s.p+"img/nft-1.png?95d68ee"},410:function(t,e,s){t.exports=s.p+"img/nft-2.png?f320b05"},411:function(t,e,s){t.exports=s.p+"img/nft-3.png?d66acd6"},412:function(t,e,s){t.exports=s.p+"img/nft-4.png?7c64ce5"},413:function(t,e,s){t.exports=s.p+"img/nft-5.png?66f579d"},414:function(t,e,s){t.exports=s.p+"img/nft-6.png?d0abd31"},415:function(t,e,s){t.exports=s.p+"img/nft-7.png?e453d8b"},416:function(t,e,s){t.exports=s.p+"img/nft-8.png?ed0c374"},578:function(t,e,s){t.exports=s.p+"img/icon-project.png?b461f9a"},579:function(t,e,s){t.exports=s.p+"img/nft-dot.png?205624a"},580:function(t,e,s){t.exports=s.p+"img/icon-quick.png?b52b7ea"},581:function(t,e,s){t.exports=s.p+"img/icon-clock.png?ba476a3"},883:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("Header"),t._v(" "),n("div",{staticClass:"page-nft"},[n("img",{staticClass:"symbol",attrs:{src:s(372)}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"nft-list"},[t._l(t.nfts,(function(e,i){return n("div",{key:i,staticClass:"nft-item"},[n("img",{staticClass:"icon-left",attrs:{src:s(578)}}),t._v(" "),n("img",{staticClass:"icon-nft",attrs:{src:s(579)}}),t._v(" "),n("img",{staticClass:"nft-avatar",attrs:{src:e}}),t._v(" "),n("span",{staticClass:"numer"},[t._v("123/123")]),t._v(" "),t._m(2,!0),t._v(" "),n("Button",{staticClass:"btn-buy"},[n("img",{attrs:{src:s(580)}}),t._v("Buy Now")])],1)})),t._v(" "),n("div",{staticClass:"mask"},[n("img",{staticClass:"icon-timer",attrs:{src:s(581)}}),t._v(" "),n("div",{staticClass:"title"},[t._v("Open countdown")]),t._v(" "),n("div",{staticClass:"timer-box"},[n("div",{staticClass:"time-text"},[t._l(t.d,(function(e,s){return n("span",[t._v(t._s(e))])})),t._v(" "),n("i",[t._v(":")]),t._v(" "),t._l(t.h,(function(e,s){return n("span",[t._v(t._s(e))])})),t._v(" "),n("i",[t._v(":")]),t._v(" "),t._l(t.m,(function(e,s){return n("span",[t._v(t._s(e))])})),t._v(" "),n("i",[t._v(":")]),t._v(" "),t._l(t.s,(function(e,s){return n("span",[t._v(t._s(e))])}))],2),t._v(" "),t._m(3)])])],2)]),t._v(" "),n("Footer")],1)};n._withStripped=!0;var i=s(409),a=s.n(i),r=s(410),o=s.n(r),c=s(411),l=s.n(c),u=s(412),p=s.n(u),v=s(413),d=s.n(v),_=s(414),f=s.n(_),m=s(415),h=s.n(m),g=s(416),w=s.n(g),b=s(378),C=s(379),k={components:{Header:b.a,Footer:C.a},data:()=>({nfts:[a.a,o.a,l.a,p.a,d.a,f.a,h.a,w.a],d:[],h:[],m:[],s:[]}),mounted(){this.countTime()},methods:{toso(t){t&&window.open(t)},countTime(){var t,e,s,n,i=(new Date).getTime(),a=new Date("2022/3/3 00:00:00").getTime()-i;a>=0&&(t=Math.floor(a/1e3/60/60/24),e=Math.floor(a/1e3/60/60%24),s=Math.floor(a/1e3/60%60),n=Math.floor(a/1e3%60)),t=t<10?"0"+t:t+"",e=e<10?"0"+e:e+"",s=s<10?"0"+s:s+"",n=n<10?"0"+n:n+"",this.d=Array.from(t),this.h=Array.from(e),this.m=Array.from(s),this.s=Array.from(n),setTimeout(this.countTime,1e3)}}},y=s(99),x=Object(y.a)(k,n,[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[t._v("Welcome to the "),s("span",[t._v("NFT")]),t._v(" market")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sub-title"},[t._v("Here, you can use "),s("span",[t._v("BLD")]),t._v(" to search for and buy creators' assets to incorporate them into your land")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"price"},[s("p",{staticClass:"value"},[t._v("32.23")]),t._v(" "),s("p",{staticClass:"usd"},[t._v("12120.USD")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"time-tip"},[s("span",[t._v("days")]),t._v(" "),s("span",[t._v("hours")]),t._v(" "),s("span",[t._v("minutes")]),t._v(" "),s("span",[t._v("seconds")])])}],!1,null,null,null);x.options.__file="src/main/boradlands/nft.vue";e.default=x.exports}}]);