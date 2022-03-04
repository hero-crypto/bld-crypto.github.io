/*!
 * my-metadata v1.0.0 
 * Copyright 2017-present, hero.
 * All rights reserved.
 * Author: hero
 *         
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{371:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"chain-icon",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:t.width+"px",height:t.width+"px",fill:t.fill,mr:"4px"},on:{click:function(e){return t.$emit("click")}}},[n("use",{attrs:{"xlink:href":t.sprite+"#"+t.name}})])};a._withStripped=!0;var s=n.p+"svg/sprite.svg?88c1385",i={data:()=>({sprite:s}),props:{name:String,fill:{type:String,default:"#666"},width:{type:Number,default:15}}},r=n(99),o=Object(r.a)(i,a,[],!1,null,null,null);o.options.__file="src/components/svg.vue";e.a=o.exports},376:function(t,e,n){t.exports=n.p+"img/coin3.png?d2a99ea"},382:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}}),t._v(" "),n("div",{class:["menu",{"menu-box-show":t.showMenu}]},[n("router-link",{class:["link",{active:"/"==t.key}],attrs:{to:"/"}},[t._v("home")]),t._v(" "),n("router-link",{class:["link",{active:"/nft"==t.key}],attrs:{to:"/nft"}},[t._v("nft")]),t._v(" "),n("router-link",{class:["link",{active:"/team"==t.key}],attrs:{to:"/team"}},[t._v("team")]),t._v(" "),n("span",{staticClass:"link"},[t._v("help")]),t._v(" "),n("router-link",{class:["link",{active:"/ido"==t.key}],attrs:{to:"/ido"}},[t._v("ido")]),t._v(" "),n("span",{staticClass:"link-wallet",on:{click:t.getAccount}},[t._v(t._s(t.shortAddress||"Connect wallet"))]),t._v(" "),n("span",{staticClass:"space"}),t._v(" "),n("Space",[n("span",{staticClass:"icon coin1"}),t._v(" "),n("span",{staticClass:"value"},[t._v("0")])]),t._v(" "),n("Space",[n("span",{staticClass:"icon coin2"}),t._v(" "),n("span",{staticClass:"value"},[t._v("0")])]),t._v(" "),n("Space",[n("span",{staticClass:"icon coin3"}),t._v(" "),n("span",{staticClass:"value"},[t._v(t._s(10*t.bdl))])]),t._v(" "),n("span",{staticClass:"spit"}),t._v(" "),n("Button",{staticClass:"btn",on:{click:t.getAccount}},[t._v(t._s(t.shortAddress||"Connect wallet"))])],1),t._v(" "),n("span",{class:["menu-icon",{"menu-icon-active":t.showMenu}],on:{click:function(e){e.stopPropagation(),t.showMenu=!t.showMenu}}})],1)};a._withStripped=!0;var s=n(68);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={data(){return{key:this.$route.path,showMenu:!1}},computed:r({},Object(s.b)(["shortAddress","address","bdl"])),mounted(){document.addEventListener("click",(t=>{this.showMenu&&(t.target.contains(this.$refs.menu)||(this.showMenu=!1))})),this.init()},methods:r(r({},Object(s.c)(["setAddress","getAccount","setBDL"])),{},{init(){void 0!==window.ethereum&&(ethereum.on("disconnect",(t=>{this.setAddress("")})).on("connect",(t=>{})),ethereum.isConnected()&&this.getAccount())}})},c=n(99),u=Object(c.a)(l,a,[],!1,null,null,null);u.options.__file="src/main/boradlands/header.vue";e.a=u.exports},383:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"social"},t._l(t.socials,(function(e,a){return n("SI",{key:a,attrs:{name:a,width:22},on:{click:function(n){return t.toso(e)}}})})),1),t._v(" "),n("div",{staticClass:"copyright"},[t._v("Copyright © 2021 Borderlands All Rights Reserved")])])};a._withStripped=!0;var s={components:{SI:n(371).a},data:()=>({socials:{telegram:"https://t.me/borderlandsOffice",twitter:"https://twitter.com/Borderlands000",facebook:"",reddit:"",medium:"",github:"",discord:""}}),methods:{toso(t){t&&window.open(t)}}},i=n(99),r=Object(i.a)(s,a,[],!1,null,null,null);r.options.__file="src/main/boradlands/footer.vue";e.a=r.exports},600:function(t,e){},602:function(t,e){},605:function(t,e){},609:function(t,e){},610:function(t,e){},634:function(t,e){},636:function(t,e){},651:function(t,e){},653:function(t,e){},667:function(t,e){},685:function(t,e){},687:function(t,e){},703:function(t,e){},706:function(t,e){},771:function(t,e){},773:function(t,e){},779:function(t,e){},781:function(t,e){},793:function(t,e){},796:function(t,e){},801:function(t,e){},879:function(t){t.exports=JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},885:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("Header"),t._v(" "),a("div",{staticClass:"page-ido"},[a("img",{staticClass:"symbol",attrs:{src:n(376)}}),t._v(" "),a("div",{staticClass:"title"},[t._v("IDO")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"description"},[t._v("Link wallets and participate in early financial activities of the project")]),t._v(" "),a("div",{staticClass:"sub-text"},[a("div",{staticClass:"text-item"},[a("div",{staticClass:"text-key"},[t._v("My total BDL")]),t._v(" "),a("div",{staticClass:"text-value"},[t._v(t._s(10*t.bdl)+" BDL")])]),t._v(" "),t._m(1),t._v(" "),a("a",{staticClass:"sub-link"},[t._v("Release Rule")])]),t._v(" "),a("div",{staticClass:"sale-box"},[a("Ido"),t._v(" "),a("Ido",[a("div",{staticClass:"sale-item sale-item-pre",attrs:{slot:"extra"},slot:"extra"},[a("div",{staticClass:"sale-title"},[t._v("Pre-sale")]),t._v(" "),a("div",{staticClass:"sale-sub-title"},[t._v("Pre-sale price")]),t._v(" "),a("img",{staticClass:"sale-symbols",attrs:{src:n(376)}}),t._v(" "),a("div",{staticClass:"sale-tip"},[t._v("Coming Soon")])])]),t._v(" "),a("Ido",[a("div",{staticClass:"sale-item sale-item-pre",attrs:{slot:"extra"},slot:"extra"},[a("div",{staticClass:"sale-title"},[t._v("Pre-sale")]),t._v(" "),a("div",{staticClass:"sale-sub-title"},[t._v("Pre-sale price")]),t._v(" "),a("img",{staticClass:"sale-symbols",attrs:{src:n(376)}}),t._v(" "),a("div",{staticClass:"sale-tip"},[t._v("Coming Soon")])])])],1)]),t._v(" "),a("Footer")],1)};a._withStripped=!0;var s=n(382),i=n(383),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sale-item"},[n("div",{staticClass:"sale-title"},[t._v("Pre-sale")]),t._v(" "),n("div",{staticClass:"sale-sub-title"},[t._v("Pre-sale price")]),t._v(" "),n("div",{staticClass:"sale-price"},[t._v("0.1U")]),t._v(" "),n("div",{staticClass:"sale-symbol",on:{click:t.addsymbol}},[n("SI",{attrs:{name:"tether"}})],1),t._v(" "),n("div",{staticClass:"input-box"},[n("div",{class:["input-inner",{active:1==t.type}],on:{click:function(e){t.type=1}}},[t._v("\n      100USDT\n      "),n("SI",{attrs:{name:"tether"}})],1),t._v(" "),n("div",{class:["input-inner",{active:2==t.type}]},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.other,expression:"other"}],attrs:{placeholder:"Other"},domProps:{value:t.other},on:{focus:function(e){t.type=2},input:function(e){e.target.composing||(t.other=e.target.value)}}}),t._v(" "),n("SI",{attrs:{name:"tether"}})],1)]),t._v(" "),n("div",{staticClass:"progress-title"},[t._v("Pre-sale progress")]),t._v(" "),n("div",{staticClass:"progress-bar"},[n("div",{staticClass:"progress-bar-inner",style:{width:100-t.fm((t.total-10*t.remaining)/t.total*100)+"%"}})]),t._v(" "),n("div",{staticClass:"sub-text"},[n("div",{staticClass:"text-item"},[n("div",{staticClass:"text-key"},[t._v("Total remaining")]),t._v(" "),n("div",{staticClass:"text-value"},[t._v(t._s(t.fm((t.total-10*t.remaining)/t.total*100))+"%")])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"text-item"},[n("div",{staticClass:"text-key"},[t._v("Remaining BDL")]),t._v(" "),n("div",{staticClass:"text-value"},[t._v(t._s(t.total-10*t.remaining))])]),t._v(" "),n("div",{staticClass:"text-item"},[n("div",{staticClass:"text-key"},[t._v("Total pre-sale")]),t._v(" "),n("div",{staticClass:"text-value"},[t._v(t._s(t.remaining)+" USDT")])])]),t._v(" "),n("div",{staticClass:"address"},[t._v(t._s(t.toAddress))]),t._v(" "),n("button",{staticClass:"btn",on:{click:t.buy}},[t._v("BUY")]),t._v(" "),t._t("extra")],2)};r._withStripped=!0;var o=n(371),l=n(68),c=n(879);function u(t,e,n,a,s,i,r){try{var o=t[i](r),l=o.value}catch(t){return void n(t)}o.done?e(l):Promise.resolve(l).then(a,s)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(a,s){var i=t.apply(e,n);function r(t){u(i,a,s,r,o,"next",t)}function o(t){u(i,a,s,r,o,"throw",t)}r(void 0)}))}}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=n(586),f={components:{SI:o.a},computed:v({},Object(l.b)(["address","constract","toAddress","remaining"])),data:()=>({type:1,other:"",total:5e6}),mounted(){},methods:v(v({fm(t){return Math.floor(100*t)/100}},Object(l.c)(["getAccount","setBDL","setRemaining"])),{},{switchEthereumChain:()=>p((function*(){try{yield ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x38"}]})}catch(t){if(4902===t.code)try{yield ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x38",chainName:"BSC Mainnet",rpcUrls:["https://bsc-dataseed.binance.org"]}]})}catch(t){}}}))(),addsymbol(){ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:"0xeC8Dbfccc8137eC064D43625Fc71d0B7F541FD3d",symbol:"BDL",decimals:18,image:"http://"+location.host+"/favicon.png"}}}).then((t=>{if(!t)throw new Error("Something went wrong.")})).catch(console.error)},buy(){var t=this;return p((function*(){if(!t.address)return t.getAccount();var e=100;if(2==t.type){if(""==t.other)return t.$Message.info("Please enter the amount!");if(isNaN(Number(t.other)))return t.$Message.info("The amount is a number!");if(t.other<100||t.other>1e6)return t.$Message.info("The maximum amount is 1000000 and the minimum amount is 100!");e=1*t.other}else e=100;var n=new m(window.ethereum),a=n.utils.toWei(e.toString(),"ether"),s="0x55d398326f99059ff775485246999027b3197955",i=new n.eth.Contract(c,s,{from:t.address}),r={gasPrice:n.utils.toHex(2e10),gas:n.utils.toHex(1e5),to:s,from:t.address,data:i.methods.transfer("0xCBd34241731F2ec6F784eFAa9418c7De1645408a",a).encodeABI()};yield ethereum.request({method:"eth_sendTransaction",params:[r]}).then((n=>{t.$Message.config({type:"success",duration:0,closable:!0,content:"Transaction succeeded, Hash :"+n,close:()=>{}}),t.$http.post("/user/bdl/buy",{hash:n,amount:e},(e=>{t.$http.get("/user/bdl/mytotal",(e=>{t.setBDL(1*e.data.total)})),t.$http.get("/open/wallet/remaining",(e=>{t.setRemaining(1*e.data.remaining)}))}))})).catch((e=>{console.log(e),(e.code=4001)?t.$Message.error("User denied transaction signature."):t.$Message.error(e.message)}))}))()}})},b=n(99),h=Object(b.a)(f,r,[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-item"},[n("div",{staticClass:"text-key"},[t._v("Total BDL")]),t._v(" "),n("div",{staticClass:"text-value"},[t._v("5,000,000.00")])])}],!1,null,null,null);h.options.__file="src/components/ido.vue";var _=h.exports;function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){C(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O={components:{Header:s.a,Footer:i.a,Ido:_},data:()=>({}),computed:w({},Object(l.b)(["bdl","address"])),mounted(){this.getAll()},methods:w(w({},Object(l.c)(["setRemaining","setBDL"])),{},{getAll(){this.$http.get("/open/wallet/remaining",(t=>{this.setRemaining(1*t.data.remaining)})),this.address&&this.$http.get("/user/bdl/mytotal",(t=>{this.setBDL(1*t.data.total)}))}})},x=Object(b.a)(O,a,[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub-title"},[t._v("The first round of "),n("span",[t._v("IDO")]),t._v(" is already started")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-item"},[n("div",{staticClass:"text-key"},[t._v("Releasable")]),t._v(" "),n("div",{staticClass:"text-value"},[t._v("0.00BDL")]),t._v(" "),n("div",{staticClass:"text-value"},[t._v("extract")])])}],!1,null,null,null);x.options.__file="src/main/boradlands/ido.vue";e.default=x.exports}}]);