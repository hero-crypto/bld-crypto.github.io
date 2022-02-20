/*!
 * my-metadata v1.0.0 
 * Copyright 2017-present, hero.
 * All rights reserved.
 * Author: hero
 *         
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{328:function(t,s,n){"use strict";var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("svg",{staticClass:"chain-icon",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:t.width+"px",height:t.width+"px",fill:t.fill,mr:"4px"},on:{click:function(s){return t.$emit("click")}}},[n("use",{attrs:{"xlink:href":t.sprite+"#"+t.name}})])};a._withStripped=!0;var e=n.p+"svg/sprite.svg?88c1385",i={data:()=>({sprite:e}),props:{name:String,fill:{type:String,default:"#666"},width:{type:Number,default:15}}},o=n(96),r=Object(o.a)(i,a,[],!1,null,null,null);r.options.__file="src/components/svg.vue";s.a=r.exports},329:function(t,s,n){t.exports=n.p+"img/coin3.png?d2a99ea"},330:function(t,s,n){"use strict";var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"header"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}}),t._v(" "),n("div",{class:["menu",{"menu-box-show":t.showMenu}]},[n("router-link",{class:["link",{active:"/"==t.key}],attrs:{to:"/"}},[t._v("home")]),t._v(" "),n("router-link",{class:["link",{active:"/nft"==t.key}],attrs:{to:"/nft"}},[t._v("nft")]),t._v(" "),n("router-link",{class:["link",{active:"/team"==t.key}],attrs:{to:"/team"}},[t._v("team")]),t._v(" "),n("span",{staticClass:"link"},[t._v("help")]),t._v(" "),n("router-link",{class:["link",{active:"/ido"==t.key}],attrs:{to:"/ido"}},[t._v("ido")]),t._v(" "),n("span",{staticClass:"link-wallet"},[t._v("Connect wallet")]),t._v(" "),n("span",{staticClass:"space"}),t._v(" "),n("Space",[n("span",{staticClass:"icon coin1"}),t._v(" "),n("span",{staticClass:"value"},[t._v("0")])]),t._v(" "),n("Space",[n("span",{staticClass:"icon coin2"}),t._v(" "),n("span",{staticClass:"value"},[t._v("0")])]),t._v(" "),n("Space",[n("span",{staticClass:"icon coin3"}),t._v(" "),n("span",{staticClass:"value"},[t._v("0")])]),t._v(" "),n("span",{staticClass:"spit"}),t._v(" "),n("Button",{staticClass:"btn"},[t._v("Connect wallet")])],1),t._v(" "),n("span",{class:["menu-icon",{"menu-icon-active":t.showMenu}],on:{click:function(s){s.stopPropagation(),t.showMenu=!t.showMenu}}})],1)};a._withStripped=!0;var e={data(){return{key:this.$route.path,showMenu:!1}},mounted(){document.addEventListener("click",(t=>{this.showMenu&&(t.target.contains(this.$refs.menu)||(this.showMenu=!1))}))}},i=n(96),o=Object(i.a)(e,a,[],!1,null,null,null);o.options.__file="src/main/boradlands/header.vue";s.a=o.exports},331:function(t,s,n){"use strict";var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"footer"},[n("div",{staticClass:"social"},t._l(t.socials,(function(s,a){return n("SI",{key:a,attrs:{name:a,width:22},on:{click:function(n){return t.toso(s)}}})})),1),t._v(" "),n("div",{staticClass:"copyright"},[t._v("Copyright © 2021 Borderlands All Rights Reserved")])])};a._withStripped=!0;var e={components:{SI:n(328).a},data:()=>({socials:{telegram:"https://t.me/borderlandsOffice",twitter:"https://twitter.com/Borderlands000",facebook:"",reddit:"",medium:"",github:"",discord:""}}),methods:{toso(t){t&&window.open(t)}}},i=n(96),o=Object(i.a)(e,a,[],!1,null,null,null);o.options.__file="src/main/boradlands/footer.vue";s.a=o.exports},332:function(t,s,n){t.exports=n.p+"img/nft-1.png?95d68ee"},333:function(t,s,n){t.exports=n.p+"img/nft-2.png?f320b05"},334:function(t,s,n){t.exports=n.p+"img/nft-3.png?d66acd6"},335:function(t,s,n){t.exports=n.p+"img/nft-4.png?7c64ce5"},336:function(t,s,n){t.exports=n.p+"img/nft-5.png?66f579d"},337:function(t,s,n){t.exports=n.p+"img/nft-6.png?d0abd31"},338:function(t,s,n){t.exports=n.p+"img/nft-7.png?e453d8b"},339:function(t,s,n){t.exports=n.p+"img/nft-8.png?ed0c374"},383:function(t,s,n){t.exports=n.p+"img/icon-project.png?b461f9a"},384:function(t,s,n){t.exports=n.p+"img/nft-dot.png?205624a"},385:function(t,s,n){t.exports=n.p+"img/icon-quick.png?b52b7ea"},386:function(t,s,n){t.exports=n.p+"img/icon-clock.png?ba476a3"},391:function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"root"},[a("Header"),t._v(" "),a("div",{staticClass:"page-nft"},[a("img",{staticClass:"symbol",attrs:{src:n(329)}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"nft-list"},[t._l(t.nfts,(function(s,e){return a("div",{key:e,staticClass:"nft-item"},[a("img",{staticClass:"icon-left",attrs:{src:n(383)}}),t._v(" "),a("img",{staticClass:"icon-nft",attrs:{src:n(384)}}),t._v(" "),a("img",{staticClass:"nft-avatar",attrs:{src:s}}),t._v(" "),a("span",{staticClass:"numer"},[t._v("123/123")]),t._v(" "),t._m(2,!0),t._v(" "),a("Button",{staticClass:"btn-buy"},[a("img",{attrs:{src:n(385)}}),t._v("Buy Now")])],1)})),t._v(" "),a("div",{staticClass:"mask"},[a("img",{staticClass:"icon-timer",attrs:{src:n(386)}}),t._v(" "),a("div",{staticClass:"title"},[t._v("Open countdown")]),t._v(" "),a("div",{staticClass:"timer-box"},[a("div",{staticClass:"time-text"},[t._l(t.d,(function(s,n){return a("span",[t._v(t._s(s))])})),t._v(" "),a("i",[t._v(":")]),t._v(" "),t._l(t.h,(function(s,n){return a("span",[t._v(t._s(s))])})),t._v(" "),a("i",[t._v(":")]),t._v(" "),t._l(t.m,(function(s,n){return a("span",[t._v(t._s(s))])})),t._v(" "),a("i",[t._v(":")]),t._v(" "),t._l(t.s,(function(s,n){return a("span",[t._v(t._s(s))])}))],2),t._v(" "),t._m(3)])])],2)]),t._v(" "),a("Footer")],1)};a._withStripped=!0;var e=n(332),i=n.n(e),o=n(333),r=n.n(o),c=n(334),l=n.n(c),v=n(335),u=n.n(v),p=n(336),_=n.n(p),f=n(337),m=n.n(f),d=n(338),h=n.n(d),g=n(339),w=n.n(g),C=n(330),k=n(331),b={components:{Header:C.a,Footer:k.a},data:()=>({nfts:[i.a,r.a,l.a,u.a,_.a,m.a,h.a,w.a],d:[],h:[],m:[],s:[]}),mounted(){this.countTime()},methods:{toso(t){t&&window.open(t)},countTime(){var t,s,n,a,e=(new Date).getTime(),i=new Date("2022/3/3 00:00:00").getTime()-e;i>=0&&(t=Math.floor(i/1e3/60/60/24),s=Math.floor(i/1e3/60/60%24),n=Math.floor(i/1e3/60%60),a=Math.floor(i/1e3%60)),t=t<10?"0"+t:t+"",s=s<10?"0"+s:s+"",n=n<10?"0"+n:n+"",a=a<10?"0"+a:a+"",this.d=Array.from(t),this.h=Array.from(s),this.m=Array.from(n),this.s=Array.from(a),setTimeout(this.countTime,1e3)}}},x=n(96),y=Object(x.a)(b,a,[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"title"},[t._v("Welcome to the "),n("span",[t._v("NFT")]),t._v(" market")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"sub-title"},[t._v("Here, you can use "),n("span",[t._v("BLD")]),t._v(" to search for and buy creators' assets to incorporate them into your land")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"price"},[n("p",{staticClass:"value"},[t._v("32.23")]),t._v(" "),n("p",{staticClass:"usd"},[t._v("12120.USD")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"time-tip"},[n("span",[t._v("days")]),t._v(" "),n("span",[t._v("hours")]),t._v(" "),n("span",[t._v("minutes")]),t._v(" "),n("span",[t._v("seconds")])])}],!1,null,null,null);y.options.__file="src/main/boradlands/nft.vue";s.default=y.exports}}]);