(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{24:function(e,t,i){},25:function(e,t,i){},33:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),r=i(18),c=i.n(r),o=(i(24),i(25),i(0)),u=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Hello, welcome to my blog!"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})},s=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"About me!"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})},l=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]},{name:"bombo",title:"Bomboclat",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]},{name:"dumebi",title:"Dumbei",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]}],d=i(7),m=function(e){var t=e.articles;return Object(o.jsx)(o.Fragment,{children:t.map((function(e,t){return Object(o.jsxs)(d.b,{to:"/article/".concat(e.name),children:[Object(o.jsx)("h3",{children:e.title}),Object(o.jsxs)("p",{children:[e.content[0].substring(0,20),"..."]})]},t)}))})},p=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Articles"}),Object(o.jsx)(m,{articles:l})]})},j=i(8),b=i.n(j),x=i(10),h=i(12),f=function(){return Object(o.jsx)("h1",{children:"404: Page Not Found"})},O=function(e){var t=e.articleName,i=e.upvotes,n=e.setArticleInfo,a=function(){var e=Object(x.a)(b.a.mark((function e(){var i,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return i=e.sent,e.next=5,i.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"upvotes-section",children:[Object(o.jsx)("button",{onClick:function(){return a()},children:"Add Upvote"}),Object(o.jsxs)("p",{children:["This post has been upvoted ",i," times"]})]})},v=function(e){var t=e.articleName,i=e.setArticleInfo,a=Object(n.useState)(""),r=Object(h.a)(a,2),c=r[0],u=r[1],s=Object(n.useState)(""),l=Object(h.a)(s,2),d=l[0],m=l[1],p=function(){var e=Object(x.a)(b.a.mark((function e(){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:c,text:d}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,i(a),u(""),m("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Add a Comment"}),Object(o.jsxs)("label",{children:["Name:",Object(o.jsx)("input",{type:"text",value:c,onChange:function(e){return u(e.target.value)}})]}),Object(o.jsxs)("label",{children:["Comment:",Object(o.jsx)("textarea",{rows:"4",cols:"50",value:d,onChange:function(e){return m(e.target.value)}})]}),Object(o.jsx)("button",{onClick:function(){return p()},children:"Add comment"})]})},g=function(e){var t=e.match.params.name,i=l.find((function(e){return e.name===t})),a=Object(n.useState)({upvotes:0,comments:[]}),r=Object(h.a)(a,2),c=r[0],u=r[1];if(Object(n.useEffect)((function(){(function(){var e=Object(x.a)(b.a.mark((function e(){var i,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return i=e.sent,e.next=5,i.json();case 5:n=e.sent,u(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),u({upvotes:Math.ceil(10*Math.random())})}),[t]),!i)return Object(o.jsx)(f,{});var s=l.filter((function(e){return e.name!==t}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:i.title}),Object(o.jsx)(O,{articleName:t,upvotes:c.upvotes,setArticleInfo:u}),i.content.map((function(e,t){return Object(o.jsx)("p",{children:e},t)})),Object(o.jsx)(v,{articleName:t,setArticleInfo:u}),Object(o.jsx)("h3",{children:"Other Articles:"}),Object(o.jsx)(m,{articles:s})]})},q=i(2),A=function(){return Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{children:Object(o.jsxs)("li",{children:[Object(o.jsx)(d.b,{to:"/",children:" Home "}),Object(o.jsx)(d.b,{to:"/about",children:" About "}),Object(o.jsx)(d.b,{to:"/articles-list",children:" Articles List "}),Object(o.jsx)(d.b,{to:"/article",children:" Article "})]})})})};var y=function(){return Object(o.jsx)(d.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(A,{}),Object(o.jsx)("div",{id:"page-body",children:Object(o.jsxs)(q.c,{children:[Object(o.jsx)(q.a,{path:"/",component:u,exact:!0}),Object(o.jsx)(q.a,{path:"/about",component:s}),Object(o.jsx)(q.a,{path:"/articles-list",component:p}),Object(o.jsx)(q.a,{path:"/article/:name",component:g}),Object(o.jsx)(q.a,{component:f})]})})]})})},F=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,34)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),n(e),a(e),r(e),c(e)}))};c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),F()}},[[33,1,2]]]);
//# sourceMappingURL=main.6f760c35.chunk.js.map