(this["webpackJsonpsocial-media-dasboard"]=this["webpackJsonpsocial-media-dasboard"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(2),o=t.n(r);t(9),t(10),t(11);var s=function(e){var a=e.children;return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"header-grid"},n.a.createElement("div",null,n.a.createElement("h1",null,"Social Media Dashboard"),n.a.createElement("p",{className:"header-total"},"Total Followers: 23,004")),a)))};t(12);var l=function(e){var a=e.username,t=e.followers,c=e.todayFollowers,r=e.icon,o=e.name,s="card ".concat(o);return n.a.createElement("article",{className:s},n.a.createElement("p",{className:"card-title"},n.a.createElement("img",{src:r,alt:""}),a),n.a.createElement("p",{className:"card-followers"},n.a.createElement("span",{className:"card-followers-number"},t),n.a.createElement("span",{className:"card-followers-title"},"Followers")),n.a.createElement("p",{className:"card-today"},n.a.createElement("img",{src:"images/icon-up.svg",alt:""}),c," today"))},i=(t(13),[{username:"@rsbmk",id:1,followers:"1483",todayFollowers:10,icon:"images/icon-facebook.svg",name:"facebook"},{username:"@rsbmk",id:2,followers:"28k",todayFollowers:-12,icon:"images/icon-twitter.svg",name:"twitter"},{username:"@rsbmk",id:3,followers:"6k",todayFollowers:24,icon:"images/icon-instagram.svg",name:"instagram"},{username:"@rsbmk",id:4,followers:"12k",todayFollowers:15,icon:"images/icon-youtube.svg",name:"youtube"}]);var m=function(){return n.a.createElement("section",{className:"top-cards"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"grid"},i.map((function(e){return n.a.createElement(l,Object.assign({key:e.id},e))})))))};t(14);function d(e){var a=e.icon,t=e.pageView,c=e.growth;return n.a.createElement("div",{className:"card-small"},n.a.createElement("p",{className:"card-small-views"},"Page Views"),n.a.createElement("p",{className:"card-small-icon"},n.a.createElement("img",{src:a,alt:""})),n.a.createElement("p",{className:"card-small-number"},t),n.a.createElement("p",{className:"card-small-percentage"},n.a.createElement("span",null,n.a.createElement("img",{src:"images/icon-up.svg",alt:""}),c)))}t(15);var u=[{icon:"images/icon-facebook.svg",pageView:"87",growth:3,key:1},{icon:"images/icon-twiter.svg",pageView:"52",growth:2257,key:2},{icon:"images/icon-instagram.svg",pageView:"5462",growth:1375,key:3},{icon:"images/icon-youtube.svg",pageView:"117",growth:303,key:4}];function g(){return n.a.createElement("section",{className:"overview"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("h2",null,"Overview - Today"),n.a.createElement("div",{className:"grid"},u.map((function(e){var a=e.icon,t=e.pageView,c=e.growth,r=e.key;return n.a.createElement(d,{icon:a,pageView:t,growth:c,key:r})})))))}var w=t(3);t(16);var v=function(){var e=Object(c.useState)(!1),a=Object(w.a)(e,2),t=a[0],r=a[1],o=Object(c.useRef)(null);function s(e){r(e.matches),e.matches?(document.body.classList.remove("is-light-mode"),document.body.classList.add("is-dark-mode")):(document.body.classList.remove("is-dark-mode"),document.body.classList.add("is-light-mode"))}return Object(c.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");e.addListener(s),r(e.matches)}),[]),n.a.createElement("div",{className:"dark-mode"},n.a.createElement("p",{className:"dark-mode-tittle"}," Dark Mode"),n.a.createElement("input",{ref:o,checked:t,onChange:function(e){r(o.current.checked),o.current.checked?(document.body.classList.remove("is-light-mode"),document.body.classList.add("is-dark-mode")):(document.body.classList.remove("is-dark-mode"),document.body.classList.add("is-light-mode"))},type:"checkbox",className:"checkbox",id:"checkbox"}),n.a.createElement("label",{className:"switch",htmlFor:"checkbox"}))};var h=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(s,null,n.a.createElement(v,null)),n.a.createElement(m,null),n.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.a152d2f9.chunk.js.map