(function(e){function n(n){for(var r,a,c=n[0],i=n[1],f=n[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(n);while(d.length)d.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-23b9b81b":"4b7c8153","chunk-272139f4":"ba515fc9","chunk-5d925994":"c1b4d55a","chunk-78694a45":"1aefbfe8","chunk-7ae5b6ac":"b3ae5a69","chunk-f22eee6a":"0819af86"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-23b9b81b":1,"chunk-272139f4":1,"chunk-5d925994":1,"chunk-78694a45":1,"chunk-7ae5b6ac":1,"chunk-f22eee6a":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-23b9b81b":"f5643c18","chunk-272139f4":"aff15f44","chunk-5d925994":"e0f46d29","chunk-78694a45":"963b3a80","chunk-7ae5b6ac":"e84cbf01","chunk-f22eee6a":"95a35c86"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var f=u[c],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===o))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){f=d[c],l=f.getAttribute("data-href");if(l===r||l===o)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),t(u)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=u);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(p);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,t[1](d)}o[e]=void 0}};var p=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/TheF2E-Payment/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var d=0;d<f.length;d++)n(f[d]);var p=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("c975"),t("0d03"),t("d3b7"),t("ac1f"),t("25f0"),t("1276"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],u=(t("cf25"),t("2877")),c={},i=Object(u["a"])(c,a,o,!1,null,null,null),f=i.exports,l=t("8c4f");r["a"].use(l["a"]);var d=[{path:"*",redirect:"/order/payment"},{path:"/order",name:"Order",component:function(){return t.e("chunk-78694a45").then(t.bind(null,"cf2a"))},redirect:"/order/paymnet",children:[{path:"payment",name:"OrderPayment",component:function(){return t.e("chunk-f22eee6a").then(t.bind(null,"b177"))}},{path:"card",name:"OrderByCard",component:function(){return t.e("chunk-5d925994").then(t.bind(null,"e09d"))}},{path:"atm",name:"OrderByATM",component:function(){return t.e("chunk-23b9b81b").then(t.bind(null,"1c14"))}},{path:"shop",name:"OrderByShop",component:function(){return t.e("chunk-272139f4").then(t.bind(null,"6a89"))}},{path:"complete",name:"OrderComplete",component:function(){return t.e("chunk-7ae5b6ac").then(t.bind(null,"ca79"))}}]}],p=new l["a"]({routes:d}),h=p,s=t("7bb1"),b=t("427f"),m=t.n(b),v=(t("a9e3"),t("b680"),t("5319"),function(e){var n=Number(e);return"".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var r=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return r})))});r["a"].config.productionTip=!1,r["a"].use(s["b"]),s["a"].localize("zh_TW",m.a),r["a"].filter("currency",v);var g={validate:function(e,n){var t=/^09[0-9]{8}$/;return t.test(e)}},y={validate:function(e,n){var t=e.split("/"),r=t[0],a=t[1],o=["01","02","03","04","05","06","07","08","09","10","11","12"],u=new Date,c=u.getFullYear().toString();return!(o.indexOf(r)<0)&&!(a<c.substring(2,4))}},k={validate:function(e,n){var t=/^\d{4}-\d{4}-\d{4}-\d{4}$/;return t.test(e)}};s["a"].extend("cellphone",g),s["a"].extend("expiry",y),s["a"].extend("creditCard",k),new r["a"]({router:h,render:function(e){return e(f)}}).$mount("#app")},cf25:function(e,n,t){"use strict";var r=t("fea6"),a=t.n(r);a.a},fea6:function(e,n,t){}});
//# sourceMappingURL=app.017e7958.js.map