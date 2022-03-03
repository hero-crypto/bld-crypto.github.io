/*!
 * my-metadata v1.0.0 
 * Copyright 2017-present, hero.
 * All rights reserved.
 * Author: hero
 *         
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{367:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"chain-icon",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:t.width+"px",height:t.width+"px",fill:t.fill,mr:"4px"},on:{click:function(e){return t.$emit("click")}}},[n("use",{attrs:{"xlink:href":t.sprite+"#"+t.name}})])};s._withStripped=!0;var i=n.p+"svg/sprite.svg?88c1385",a={data:()=>({sprite:i}),props:{name:String,fill:{type:String,default:"#666"},width:{type:Number,default:15}}},r=n(99),o=Object(r.a)(a,s,[],!1,null,null,null);o.options.__file="src/components/svg.vue";e.a=o.exports},378:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}}),t._v(" "),n("div",{class:["menu",{"menu-box-show":t.showMenu}]},[n("router-link",{class:["link",{active:"/"==t.key}],attrs:{to:"/"}},[t._v("home")]),t._v(" "),n("router-link",{class:["link",{active:"/nft"==t.key}],attrs:{to:"/nft"}},[t._v("nft")]),t._v(" "),n("router-link",{class:["link",{active:"/team"==t.key}],attrs:{to:"/team"}},[t._v("team")]),t._v(" "),n("span",{staticClass:"link"},[t._v("help")]),t._v(" "),n("router-link",{class:["link",{active:"/ido"==t.key}],attrs:{to:"/ido"}},[t._v("ido")]),t._v(" "),n("span",{staticClass:"link-wallet",on:{click:t.getAccount}},[t._v(t._s(t.shortAddress||"Connect wallet"))]),t._v(" "),n("span",{staticClass:"space"}),t._v(" "),n("Space",[n("span",{staticClass:"icon coin1"}),t._v(" "),n("span",{staticClass:"value"},[t._v("0")])]),t._v(" "),n("Space",[n("span",{staticClass:"icon coin2"}),t._v(" "),n("span",{staticClass:"value"},[t._v("0")])]),t._v(" "),n("Space",[n("span",{staticClass:"icon coin3"}),t._v(" "),n("span",{staticClass:"value"},[t._v(t._s(10*t.bdl))])]),t._v(" "),n("span",{staticClass:"spit"}),t._v(" "),n("Button",{staticClass:"btn",on:{click:t.getAccount}},[t._v(t._s(t.shortAddress||"Connect wallet"))])],1),t._v(" "),n("span",{class:["menu-icon",{"menu-icon-active":t.showMenu}],on:{click:function(e){e.stopPropagation(),t.showMenu=!t.showMenu}}})],1)};s._withStripped=!0;var i=n(67);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data(){return{key:this.$route.path,showMenu:!1}},computed:r({},Object(i.b)(["shortAddress","address","bdl"])),mounted(){document.addEventListener("click",(t=>{this.showMenu&&(t.target.contains(this.$refs.menu)||(this.showMenu=!1))})),this.init()},methods:r(r({},Object(i.c)(["setAddress","getAccount"])),{},{init(){void 0!==window.ethereum&&(ethereum.on("disconnect",(t=>{this.setAddress("")})),ethereum.isConnected()&&this.getAccount())}})},l=n(99),p=Object(l.a)(c,s,[],!1,null,null,null);p.options.__file="src/main/boradlands/header.vue";e.a=p.exports},379:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"social"},t._l(t.socials,(function(e,s){return n("SI",{key:s,attrs:{name:s,width:22},on:{click:function(n){return t.toso(e)}}})})),1),t._v(" "),n("div",{staticClass:"copyright"},[t._v("Copyright © 2021 Borderlands All Rights Reserved")])])};s._withStripped=!0;var i={components:{SI:n(367).a},data:()=>({socials:{telegram:"https://t.me/borderlandsOffice",twitter:"https://twitter.com/Borderlands000",facebook:"",reddit:"",medium:"",github:"",discord:""}}),methods:{toso(t){t&&window.open(t)}}},a=n(99),r=Object(a.a)(i,s,[],!1,null,null,null);r.options.__file="src/main/boradlands/footer.vue";e.a=r.exports},556:function(t,e,n){t.exports=n.p+"img/face.png?eea84a9"},557:function(t,e,n){t.exports=n.p+"img/t1.png?30c2f68"},558:function(t,e,n){t.exports=n.p+"img/t2.png?7ccb67a"},559:function(t,e,n){t.exports=n.p+"img/t3.png?e90b735"},560:function(t,e,n){t.exports=n.p+"img/t4.png?cc8fd34"},561:function(t,e,n){t.exports=n.p+"img/t5.png?653f4de"},562:function(t,e,n){t.exports=n.p+"img/t6.png?4bf8978"},563:function(t,e,n){t.exports=n.p+"img/t7.png?2af64fd"},564:function(t,e,n){t.exports=n.p+"img/t8.png?2147313"},565:function(t,e,n){t.exports=n.p+"img/t9.png?9f037c4"},566:function(t,e,n){t.exports=n.p+"img/t10.png?3295d4c"},567:function(t,e,n){t.exports=n.p+"img/t11.png?b52e736"},568:function(t,e,n){t.exports=n.p+"img/t12.png?3796ec3"},569:function(t,e,n){t.exports=n.p+"img/t13.png?a6447d1"},570:function(t,e,n){t.exports=n.p+"img/t14.png?fa0cf3e"},571:function(t,e,n){t.exports=n.p+"img/t15.png?e38df44"},572:function(t,e,n){t.exports=n.p+"img/t16.png?1228377"},573:function(t,e,n){t.exports=n.p+"img/t17.png?708dcf2"},574:function(t,e,n){t.exports=n.p+"img/t18.png?0316646"},575:function(t,e,n){t.exports=n.p+"img/t19.png?7c60eeb"},576:function(t,e,n){t.exports=n.p+"img/t20.png?c482482"},577:function(t,e,n){t.exports=n.p+"img/t21.png?ef35864"},882:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"root"},[s("Header"),t._v(" "),s("div",{staticClass:"page-team"},[s("div",{staticClass:"title"},[t._v("TEAM")]),t._v(" "),s("img",{staticClass:"face",attrs:{src:n(556)}}),t._v(" "),s("div",{staticClass:"swiper"},[s("Swiper",{attrs:{options:t.swiperOption}},[t._l(3,(function(e){return s("SwiperSlide",{key:e},[s("div",{staticClass:"team-list"},t._l(t.faces,(function(e,n){return s("div",{key:n,staticClass:"team-item"},[s("img",{staticClass:"avatar",attrs:{src:e}}),t._v(" "),s("span",{staticClass:"role-name"},[t._v(t._s(t.names[n]))]),t._v(" "),s("span",{staticClass:"role-title"},[t._v(t._s(t.titles[n]))])])})),0)])})),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),s("router-link",{staticClass:"link",attrs:{to:""}},[t._v("More about us...")])],1),t._v(" "),s("div",{staticClass:"page-banner"},[s("Button",{staticClass:"btn"},[t._v("Borderlands")])],1),t._v(" "),s("Footer")],1)};s._withStripped=!0;var i=n(557),a=n.n(i),r=n(558),o=n.n(r),c=n(559),l=n.n(c),p=n(560),u=n.n(p),d=n(561),v=n.n(d),f=n(562),m=n.n(f),g=n(563),_=n.n(g),w=n(564),h=n.n(w),b=n(565),C=n.n(b),k=n(566),x=n.n(k),y=n(567),O=n.n(y),S=n(568),j=n.n(S),D=n(569),A=n.n(D),E=n(570),M=n.n(E),P=n(571),G=n.n(P),F=n(572),$=n.n(F),H=n(573),B=n.n(H),J=n(574),L=n.n(J),I=n(575),N=n.n(I),K=n(576),Q=n.n(K),R=n(577),T=n.n(R),W=n(378),V=n(379),Z=n(449),q={components:{Swiper:Z.Swiper,SwiperSlide:Z.SwiperSlide,Header:W.a,Footer:V.a},directives:{swiper:Z.directive},data:()=>({faces:[a.a,o.a,l.a,u.a,v.a,m.a,_.a,h.a,C.a,x.a,O.a,j.a,A.a,M.a,G.a,$.a,B.a,L.a,N.a,Q.a,T.a],names:["Jerome Mariner","Edwina Alison","Elbert Edan","Karen Nessia","Medwin Kilby","Farrell Sheridan","Nessia Alison","Dark Falkner","Jerome","Polly","Farrell Griswald","Sheridan Isaiah","Francesca Wilona","Wayne Miles","Zhoujiamin","Ives Forest","Maxwell","Jerome","Dwayne","Nessia Polly","Harley Drucilla"],titles:["CEO","COO","CFO","CTO","Community Manager","Head of Design","Head of Art","Head of Marketing","Lead VoxEdit Developer","Lead Game Developer","Lead Game Developer","Lead Game Developer","Game Developer","Game Developer","Quality Assurance","Game Designer","DevOps","Game Designer","Game Developer","Game Designer","Quality Assurance"],swiperOption:{pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".btn-next",prevEl:".btn-prev"},autoplay:{delay:5e3},loop:!0}}),methods:{toso(t){t&&window.open(t)}}},z=n(99),U=Object(z.a)(q,s,[],!1,null,null,null);U.options.__file="src/main/boradlands/team.vue";e.default=U.exports}}]);