(function(t){function e(e){for(var o,n,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)n=c[l],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&f.push(a[n][0]),a[n]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],o=!0,n=1;n<r.length;n++){var c=r[n];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=r[0]))}return t}var o={},n={app:0},a={app:0},i=[];function c(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0e321804"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r={about:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"e5543dca"}[t]+".css",a=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===o||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete n[t],p.parentNode.removeChild(p),r(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){n[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,r){o=a[t]=[e,r]}));e.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var r=a[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",f.name="ChunkLoadError",f.type=o,f.request=n,r[1](f)}a[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(r,o,function(e){return t[e]}.bind(null,o));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/nemic/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var p=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"4d0c":function(t,e,r){t.exports=r.p+"img/Logo_Nemic-40.9047a60d.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),r("div",{staticClass:"nav"},[r("div",{staticClass:"nav-item explore",on:{click:t.scrollToBottom}},[r("router-link",{attrs:{to:"/explore","exact-active-class":"exact-active-explore"}},[t._v("Explore Music")])],1),r("div",{staticClass:"nav-item your-favorites",on:{click:t.scrollToBottom}},[r("router-link",{attrs:{to:"/your-favorites","exact-active-class":"exact-active-your-favorites"}},[t._v("Your Favorites")])],1),r("div",{staticClass:"nav-item our-favorites",on:{click:t.scrollToBottom}},[r("router-link",{attrs:{to:"/our-favorites","exact-active-class":"exact-active-our-favorites"}},[t._v("Our Favorites")])],1),r("div",{staticClass:"nav-item about",on:{click:t.scrollToBottom}},[r("router-link",{attrs:{to:"/about","exact-active-class":"exact-active-about"}},[t._v("About Nemic")])],1)]),r("router-view")],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"welcome"},[o("img",{staticStyle:{height:"21.5em"},attrs:{src:r("4d0c")}})])}],i={methods:{scrollToBottom:function(){console.log("scrolling"),window.scrollY<614&&window.scrollTo(0,614)}}},c=i,u=(r("5c0b"),r("2877")),s=Object(u["a"])(c,n,a,!1,null,null,null),l=s.exports,f=(r("d3b7"),r("8c4f"));o["a"].use(f["a"]);var p=[{path:"/explore",name:"Explore",title:"Explore",component:function(){return r.e("about").then(r.bind(null,"7797"))}},{path:"/our-favorites",name:"OurFavorites",title:"Our Favorites",component:function(){return r.e("about").then(r.bind(null,"07cb"))}},{path:"/your-favorites",name:"YourFavorites",title:"Your Favorites",component:function(){return r.e("about").then(r.bind(null,"d92f"))}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/",redirect:{name:"OurFavorites"}}],d=new f["a"]({routes:p}),v=d,m=r("2f62");o["a"].use(m["a"]);var h=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}}),b=r("ecee"),g=r("c074"),y=r("b702"),w=r("ad3d");o["a"].config.productionTip=!1,b["c"].add(g["a"],y["a"]),o["a"].component("font-awesome-icon",w["a"]);var x=localStorage.getItem("favoritedSongs");x||(localStorage.favoritedSongs=JSON.stringify([])),new o["a"]({router:v,store:h,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var o=r("9c0c"),n=r.n(o);n.a},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.98583e6a.js.map