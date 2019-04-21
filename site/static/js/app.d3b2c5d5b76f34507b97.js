!function(e){function n(n){for(var r,o,a=n[0],d=n[1],i=n[2],s=n[3]||[],c=0,u=[];c<a.length;c++)o=a[c],A[o]&&u.push(A[o][0]),A[o]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(q&&q(n),s.forEach(function(e){if(void 0===A[e]){A[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",R.nc&&n.setAttribute("nonce",R.nc),n.rel="prefetch",n.as="script",n.href=I(e),document.head.appendChild(n)}});u.length;)u.shift()();return H.push.apply(H,i||[]),t()}function t(){for(var e,n=0;n<H.length;n++){for(var t=H[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==A[a]&&(r=!1)}r&&(H.splice(n--,1),e=R(R.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!E[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0===--b&&0===y&&x()}(e,n),r&&r(e,n)};var o,a=!0,d="d3b2c5d5b76f34507b97",i=1e4,s={},c=[],u=[];function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:_,apply:P,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:s[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var m,v,g,b=0,y=0,k={},w={},E={};function O(e){return+e+""===e?+e:e}function _(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(n=i,n=n||1e4,new Promise(function(e,t){if("undefined"===typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=R.p+""+d+".hot-update.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(a){return t(a)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(a){return void t(a)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;w={},k={},E=e.c,g=e.h,h("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});for(var t in v={},A)j(t);return"prepare"===f&&0===y&&0===b&&x(),n});var n}function j(e){E[e]?(w[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=R.p+""+e+"."+d+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):k[e]=!0}function x(){h("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then(function(){return P(a)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(O(t));e.resolve(n)}}function P(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var t,r,o,a,i;function u(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),d=o.id,i=o.chain;if((a=D[d])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:d};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:d};for(var s=0;s<a.parents.length;s++){var c=a.parents[s],u=D[c];if(u){if(u.hot._declinedDependencies[d])return{type:"declined",chain:i.concat([c]),moduleId:d,parentId:c};-1===n.indexOf(c)&&(u.hot._acceptedDependencies[d]?(t[c]||(t[c]=[]),l(t[c],[d])):(delete t[c],n.push(c),r.push({chain:i.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var p={},m=[],b={},y=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var k in v)if(Object.prototype.hasOwnProperty.call(v,k)){var w;i=O(k);var _=!1,j=!1,x=!1,P="";switch((w=v[k]?u(i):{type:"disposed",moduleId:k}).chain&&(P="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":n.onDeclined&&n.onDeclined(w),n.ignoreDeclined||(_=new Error("Aborted because of self decline: "+w.moduleId+P));break;case"declined":n.onDeclined&&n.onDeclined(w),n.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+P));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(w),n.ignoreUnaccepted||(_=new Error("Aborted because "+i+" is not accepted"+P));break;case"accepted":n.onAccepted&&n.onAccepted(w),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(w),x=!0;break;default:throw new Error("Unexception type "+w.type)}if(_)return h("abort"),Promise.reject(_);if(j)for(i in b[i]=v[i],l(m,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,i)&&(p[i]||(p[i]=[]),l(p[i],w.outdatedDependencies[i]));x&&(l(m,[w.moduleId]),b[i]=y)}var H,I=[];for(r=0;r<m.length;r++)i=m[r],D[i]&&D[i].hot._selfAccepted&&I.push({module:i,errorHandler:D[i].hot._selfAccepted});h("dispose"),Object.keys(E).forEach(function(e){!1===E[e]&&function(e){delete A[e]}(e)});for(var M,S,C=m.slice();C.length>0;)if(i=C.pop(),a=D[i]){var q={},T=a.hot._disposeHandlers;for(o=0;o<T.length;o++)(t=T[o])(q);for(s[i]=q,a.hot.active=!1,delete D[i],delete p[i],o=0;o<a.children.length;o++){var U=D[a.children[o]];U&&((H=U.parents.indexOf(i))>=0&&U.parents.splice(H,1))}}for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(a=D[i]))for(S=p[i],o=0;o<S.length;o++)M=S[o],(H=a.children.indexOf(M))>=0&&a.children.splice(H,1);for(i in h("apply"),d=g,b)Object.prototype.hasOwnProperty.call(b,i)&&(e[i]=b[i]);var z=null;for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(a=D[i])){S=p[i];var L=[];for(r=0;r<S.length;r++)if(M=S[r],t=a.hot._acceptedDependencies[M]){if(-1!==L.indexOf(t))continue;L.push(t)}for(r=0;r<L.length;r++){t=L[r];try{t(S)}catch(B){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:i,dependencyId:S[r],error:B}),n.ignoreErrored||z||(z=B)}}}for(r=0;r<I.length;r++){var N=I[r];i=N.module,c=[i];try{R(i)}catch(B){if("function"===typeof N.errorHandler)try{N.errorHandler(B)}catch(G){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:G,originalError:B}),n.ignoreErrored||z||(z=G),z||(z=B)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:i,error:B}),n.ignoreErrored||z||(z=B)}}return z?(h("fail"),Promise.reject(z)):(h("idle"),new Promise(function(e){e(m)}))}var D={},A={1:0},H=[];function I(e){return R.p+"static/js/"+({2:"docs-reference-api",3:"docs-usage-advanced-hooks",4:"docs-usage-basic-hooks",5:"readme"}[e]||e)+"."+{2:"08b31792",3:"c946c790",4:"d55c5579",5:"dbf478df"}[e]+".js"}function R(n){if(D[n])return D[n].exports;var t=D[n]={i:n,l:!1,exports:{},hot:l(n),parents:(u=c,c=[],u),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=D[e];if(!n)return R;var t=function(t){return n.hot.active?(D[t]?-1===D[t].parents.indexOf(e)&&D[t].parents.push(e):(c=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),c=[]),R(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return R[e]},set:function(n){R[e]=n}}};for(var a in R)Object.prototype.hasOwnProperty.call(R,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(t,a,r(a));return t.e=function(e){return"ready"===f&&h("prepare"),y++,R.e(e).then(n,function(e){throw n(),e});function n(){y--,"prepare"===f&&(k[e]||j(e),0===y&&0===b&&x())}},t.t=function(e,n){return 1&n&&(e=t(e)),R.t(e,-2&n)},t}(n)),t.l=!0,t.exports}R.e=function(e){var n=[],t=A[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=A[e]=[n,r]});n.push(t[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,R.nc&&a.setAttribute("nonce",R.nc),a.src=I(e),0!==a.src.indexOf(window.location.origin+"/")&&(a.crossOrigin="anonymous"),o=function(n){a.onerror=a.onload=null,clearTimeout(d);var t=A[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,t[1](i)}A[e]=void 0}};var d=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(n)},R.m=e,R.c=D,R.d=function(e,n,t){R.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},R.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R.t=function(e,n){if(1&n&&(e=R(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(R.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)R.d(t,r,function(n){return e[n]}.bind(null,r));return t},R.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return R.d(n,"a",n),n},R.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},R.p="/",R.oe=function(e){throw console.error(e),e},R.h=function(){return d};var M=window.webpackJsonp=window.webpackJsonp||[],S=M.push.bind(M);M.push=n,M=M.slice();for(var C=0;C<M.length;C++)n(M[C]);var q=S;n([[],{},0,[0,2,3,4,5]]),H.push([0,0]),t()}({"./.docz/app/db.json":function(e){e.exports={config:{title:"React Hooks Testing Library",description:"Simple component wrapper for testing React hooks",menu:[{name:"Getting Started"},{name:"Usage",menu:["Basic Hooks","Advanced Hooks","Async Hooks"]},{name:"Examples"},{name:"Reference",menu:["FAQ","Troubleshooting","API"]}],version:"0.5.0",repository:"https://github.com/mpeyper/react-hooks-testing-library",native:!1,codeSandbox:!0,themeConfig:{mode:"dark",logo:{src:"/public/ram.png",margin:"auto",width:128}},separator:"-",files:"**/*.{md,mdx}",dest:"site",public:"./other",ignore:["CODE_OF_CONDUCT.md","CONTRIBUTING.md","LICENSE.md"],htmlContext:{favicon:"/public/ram.png"}},props:[],entries:[{key:"README.md",value:{name:"Getting Started",route:"/",id:"04c6e90faac2675aa89e2176d2eec7d8",filepath:"README.md",link:"https://github.com/mpeyper/react-hooks-testing-library/edit/master/README.md",slug:"readme",menu:"",headings:[{slug:"the-problem",depth:2,value:"The problem"},{slug:"the-solution",depth:2,value:"The solution"},{slug:"when-to-use-this-library",depth:3,value:"When to use this library"},{slug:"when-not-to-use-this-library",depth:3,value:"When not to use this library"},{slug:"example",depth:2,value:"Example"},{slug:"installation",depth:2,value:"Installation"},{slug:"api",depth:2,value:"API"},{slug:"contributors",depth:2,value:"Contributors"},{slug:"issues",depth:2,value:"Issues"},{slug:"-bugs",depth:3,value:"\ud83d\udc1b Bugs"},{slug:"-feature-requests",depth:3,value:"\ud83d\udca1 Feature Requests"},{slug:"-questions",depth:3,value:"\u2753 Questions"},{slug:"license",depth:2,value:"LICENSE"}]}},{key:"docs/reference/api.md",value:{name:"API",menu:"Reference",route:"/reference/api",id:"18b630d80017d203927d6fc66dfa6517",filepath:"docs/reference/api.md",link:"https://github.com/mpeyper/react-hooks-testing-library/edit/master/docs/reference/api.md",slug:"docs-reference-api",headings:[{slug:"api",depth:1,value:"API"},{slug:"renderhookcallback-options",depth:2,value:"renderHook(callback[, options])"},{slug:"arguments",depth:3,value:"Arguments"},{slug:"returns",depth:3,value:"Returns"},{slug:"actcallback",depth:2,value:"act(callback)"}]}},{key:"docs/usage/advanced-hooks.md",value:{name:"Advanced Hooks",menu:"Usage",route:"/usage/advanced-hooks",id:"ea105c48a8e3bb1e3e3ad7979781a855",filepath:"docs/usage/advanced-hooks.md",link:"https://github.com/mpeyper/react-hooks-testing-library/edit/master/docs/usage/advanced-hooks.md",slug:"docs-usage-advanced-hooks",headings:[{slug:"advanced-hooks",depth:1,value:"Advanced Hooks"},{slug:"providing-props",depth:2,value:"Providing Props"},{slug:"changing-props",depth:3,value:"Changing Props"}]}},{key:"docs/usage/basic-hooks.md",value:{name:"Basic Hooks",menu:"Usage",route:"/usage/basic-hooks",id:"a772ef0c2df95f18d1df535625c23380",filepath:"docs/usage/basic-hooks.md",link:"https://github.com/mpeyper/react-hooks-testing-library/edit/master/docs/usage/basic-hooks.md",slug:"docs-usage-basic-hooks",headings:[{slug:"basic-hooks",depth:1,value:"Basic Hooks"},{slug:"rendering",depth:2,value:"Rendering"},{slug:"updates",depth:2,value:"Updates"}]}}]}},"./.docz/app/imports.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.imports=void 0;var r={"README.md":function(){return Promise.all([t.e(0),t.e(5)]).then(t.t.bind(null,"./README.md",7))},"docs/reference/api.md":function(){return Promise.all([t.e(0),t.e(2)]).then(t.t.bind(null,"./docs/reference/api.md",7))},"docs/usage/advanced-hooks.md":function(){return Promise.all([t.e(0),t.e(3)]).then(t.t.bind(null,"./docs/usage/advanced-hooks.md",7))},"docs/usage/basic-hooks.md":function(){return Promise.all([t.e(0),t.e(4)]).then(t.t.bind(null,"./docs/usage/basic-hooks.md",7))}};n.imports=r},"./.docz/app/index.jsx":function(e,n,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault.js"),o=r(t("./node_modules/react/index.js")),a=r(t("./node_modules/react-dom/index.js")),d=r(t("./.docz/app/root.jsx")),i=[],s=[],c=function(){return s.forEach(function(e){return e&&e()})},u=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.default;i.forEach(function(e){return e&&e()}),a.default.render(o.default.createElement(e,null),u,c)}(d.default)},"./.docz/app/root.jsx":function(e,n,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t("./node_modules/react/index.js")),a=t("./node_modules/docz/dist/index.esm.js"),d=r(t("./node_modules/docz-theme-default/dist/index.esm.js")),i=t("./.docz/app/imports.js"),s=r(t("./.docz/app/db.json")),c=function(){return o.default.createElement(d.default,{linkComponent:a.Link,db:s.default},o.default.createElement(a.Routes,{imports:i.imports}))};n.default=c},0:function(e,n,t){e.exports=t("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.d3b2c5d5b76f34507b97.js.map