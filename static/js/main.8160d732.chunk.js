(this["webpackJsonpgithub-resume-search"]=this["webpackJsonpgithub-resume-search"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(27),s=n.n(a),u=n(13),o=n(6),i=n(9),l=n(44),j=n(45),b=n(46),h=n(47),d=n(51),O=n(48),f=n(49),p=n(2);function x(){return Object(p.jsx)(l.a,{className:"border-bottom py-3",children:Object(p.jsx)(u.b,{to:"/",children:"\u2190 Back to home"})})}function m(e){var t=e.back,n=e.title,r=e.children;return Object(p.jsxs)("div",{children:[t&&Object(p.jsx)(x,{}),Object(p.jsx)(l.a,{className:"border-bottom py-3",children:Object(p.jsx)("h1",{children:n})}),r&&Object(p.jsx)(l.a,{className:" py-3",children:r})]})}function g(){return Object(p.jsxs)(m,{title:"Home",children:[Object(p.jsx)("h2",{className:"h5",children:"Search for information about any github user"}),Object(p.jsxs)("p",{className:"m-0",children:["This application can show you an information about any github user."," ",Object(p.jsx)("br",{}),'Just enter a username you want and click the "Search" button.']})]})}var v=n(15),w=n.n(v),y=n(20),k=function(){var e=Object(y.a)(w.a.mark((function e(t){var n,r,c,a,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.controller,r=t.username,c=t.history,e.prev=1,e.next=4,fetch("https://api.github.com/users/".concat(r),{signal:n.signal});case 4:return a=e.sent,e.next=7,a.json();case 7:s=e.sent,c.push({pathname:"/".concat(r),state:{userData:s}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();function C(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),s=Object(i.a)(a,2),u=s[0],f=s[1],x=Object(o.f)(),m=function(){f(!0)};return Object(r.useEffect)((function(){var e=new AbortController;return u&&k({controller:e,username:n,history:x}),function(){return null===e||void 0===e?void 0:e.abort()}}),[u]),Object(p.jsx)(l.a,{className:"py-3",children:Object(p.jsx)(j.a,{className:"py-2",children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(h.a,{placeholder:"Enter a username",value:n,onChange:function(e){c(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&m()}}),Object(p.jsx)(d.a,{addonType:"append",children:Object(p.jsx)(O.a,{color:"primary",onClick:m,children:"Search"})})]})})})}function S(){return Object(p.jsxs)(f.a,{children:[Object(p.jsx)(g,{}),Object(p.jsx)(C,{})]})}function N(e){var t=e.userData.name,n=t?"".concat(t,"  \u2014 GitHub resume"):"GitHub resume";return Object(p.jsx)(m,{back:!0,title:n})}function D(e){var t=e.username;return Object(p.jsx)(m,{back:!0,title:"Not Found",children:Object(p.jsxs)("p",{children:["The user ",Object(p.jsx)("strong",{children:t})," is not found."]})})}var E=n(12),L=n(50);function _(e){var t=e.title,n=e.children;return Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row",children:t}),Object(p.jsx)("td",{children:n})]})}var P=n(29),R=n(16),F=n(25),A=function(e){var t=T(e);for(var n in e){var r=Number((e[n]/t*100).toFixed(1));e[n]=r}return e},T=function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)},G=function(){var e=Object(y.a)(w.a.mark((function e(t){var n,r,c,a,s,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.repos,r=t.controller,c=[],a=Object(P.a)(n),e.prev=3,a.s();case 5:if((s=a.n()).done){e.next=11;break}return u=s.value,e.next=9,fetch(u.languages_url,{signal:r.signal}).then((function(e){return e.json()})).then((function(e){return A(e)})).then((function(e){return c.push(e)}));case 9:e.next=5;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),a.e(e.t0);case 16:return e.prev=16,a.f(),e.finish(16);case 19:return e.abrupt("return",c);case 20:case"end":return e.stop()}}),e,null,[[3,13,16,19]])})));return function(t){return e.apply(this,arguments)}}(),H=function(e){var t=e.repos,n=e.controller;return G({repos:t,controller:n}).then((function(e){return function(e){var t={};return t=e.reduce((function(e,t){var n=Object.keys(t)[0],r=e[n]||0,c=Math.round(r+t[n]);return n?Object(E.a)(Object(E.a)({},e),{},Object(R.a)({},n,c)):Object(E.a)({},e)}),{}),t=A(t),Object.keys(t).map((function(e){return Object(R.a)({},e,t[e])}))}(e)}))};function M(e){var t=e.data,n=function(){var e=c.a.useState(null),t=Object(i.a)(e,2),n=t[0],r=t[1];return c.a.useEffect((function(){var e=function(){r({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),r=n&&n.width,a=function(e){var t,n,r=e.userFullName,c=e.website,a=e.amountOfPublicRepos,s=e.dateProfileCreated,u=e.languages,o=e.repos,i=e.width,l=r&&r.split(" ")[0]||"",j=r&&r.split(" ")[1]||"",b=new Date(s).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});return u&&(t={get columns(){return i<700?1:3},get rows(){return u.length<this.columns?1:Math.round(u.length/this.columns)},get arrayOfColumns(){return Object(F.a)(Array(this.columns).keys())},get arrayOfRows(){return Object(F.a)(Array(this.rows).keys())},getCurrentLanguage:function(e,t){return u[e*this.columns+t]}}),o&&(n=o.map((function(e){return["updated_at","svn_url","name"].reduce((function(t,n){return Object(E.a)(Object(E.a)({},t),{},Object(R.a)({},n,e[n]))}),{})})).map((function(e){return Object(E.a)(Object(E.a)({},e),{},{updated_at:new Date(e.updated_at)})})).sort((function(e,t){return new Date(t.date)-new Date(e.date)})).slice(0,5)),{name:l,lastName:j,website:c,amountOfPublicRepos:a,date:b,languagesGrid:t,lastEditedRepos:n}}(Object(E.a)(Object(E.a)({},t),{},{width:r})),s=a.name,u=a.lastName,o=a.website,b=a.amountOfPublicRepos,h=a.date,d=a.languagesGrid,O=a.lastEditedRepos;return Object(p.jsx)(L.a,{children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)(_,{title:"Main info",children:[Object(p.jsx)("span",{children:"Name: "}),Object(p.jsxs)("strong",{children:[s," "]}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"Last name: "}),Object(p.jsx)("strong",{children:u}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"Public repositories: "}),Object(p.jsx)("strong",{children:b}),Object(p.jsx)("br",{}),Object(p.jsx)("span",{children:"Date profile created: "}),Object(p.jsx)("strong",{children:h})]}),Object(p.jsx)(_,{title:"Website",children:Object(p.jsx)("a",{href:o,children:o})}),Object(p.jsx)(_,{title:"Languages",children:d&&d.arrayOfRows.map((function(e,t){return Object(p.jsx)(l.a,{children:d.arrayOfColumns.map((function(e,n){var r=d.getCurrentLanguage(t,n);if(!r)return null;var c=Object(i.a)(Object.entries(r)[0],2),a=c[0],s=c[1];return Object(p.jsxs)(j.a,{children:[Object(p.jsx)("strong",{children:a})," ","(".concat(s,"%)")]},e)}))},e)}))}),Object(p.jsx)(_,{title:"Recently edited repositories",children:O&&O.map((function(e){return Object(p.jsx)(l.a,{children:Object(p.jsx)("a",{href:e.svn_url,children:e.name})},e.name)}))})]})})}function B(e){var t=e.userData,n=Object(r.useState)(null),c=Object(i.a)(n,2),a=c[0],s=c[1],u=Object(r.useState)(null),o=Object(i.a)(u,2),j=o[0],b=o[1],h=t.repos_url,d={userFullName:t.name,amountOfPublicRepos:t.public_repos,dateProfileCreated:t.created_at,website:t.blog,languages:j,repos:a};return Object(r.useEffect)((function(){var e=new AbortController;return function(e){var t=e.repos_url,n=e.controller;return fetch(t,{signal:n.signal}).then((function(e){return e.json()}))}({repos_url:h,controller:e}).then((function(e){return s(e)})),function(){return null===e||void 0===e?void 0:e.abort()}}),[h]),Object(r.useEffect)((function(){var e=new AbortController;return a&&H({repos:a,controller:e}).then((function(e){return b(e)})),function(){return null===e||void 0===e?void 0:e.abort()}}),[a]),Object(p.jsx)(l.a,{children:Object(p.jsx)(M,{data:d})})}function J(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(i.a)(a,2),u=s[0],l=s[1],j=Object(r.useState)(null),b=Object(i.a)(j,2),h=b[0],d=b[1],O=Object(o.f)().location.pathname.slice(1);return Object(r.useEffect)((function(){n&&d(n.id)}),[n]),Object(r.useEffect)((function(){var e=new AbortController;return function(e){var t=e.controller,n=e.username,r=e.setLoading;return r(!0),fetch("https://api.github.com/users/".concat(n),{signal:t.signal}).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).finally(r(!1))}({username:O,controller:e,setLoading:l}).then((function(e){return c(e)})),function(){return null===e||void 0===e?void 0:e.abort()}}),[O]),h?Object(p.jsxs)(f.a,{children:[Object(p.jsx)(N,{userData:n}),u?Object(p.jsx)("p",{children:"Loading..."}):Object(p.jsx)(B,{userData:n})]}):Object(p.jsx)(f.a,{children:Object(p.jsx)(D,{username:O})})}var z=function(){return Object(p.jsx)(u.a,{basename:"/github-resume-search",children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",component:S}),Object(p.jsx)(o.a,{exact:!0,path:"/:username",component:J})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};n(41),n(42);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(z,{})}),document.getElementById("root")),I()}},[[43,1,2]]]);
//# sourceMappingURL=main.8160d732.chunk.js.map