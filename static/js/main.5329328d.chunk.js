(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),r=(c(19),c(20),c(2)),s=c(6),i=c.n(s),j=c(0);var o=function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(a.c,{to:"/",className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(j.jsx)(a.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"people",children:"People"})]})})})};c(22);var l=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},b=c(8),h=c(4),d=c(1);function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var u=function(e){var t=e.person;return Object(j.jsx)(a.b,{to:"/people/".concat(t.slug),className:i()({"has-text-danger":"f"===t.sex}),children:t.name})},x=function(e){var t=e.person,c=Object(r.h)().slug;return Object(j.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":c===t.slug}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(u,{person:t})}),Object(j.jsx)("td",{children:t.sex}),Object(j.jsx)("td",{children:t.born}),Object(j.jsx)("td",{children:t.died}),Object(j.jsx)("td",{children:t.mother?Object(j.jsx)(u,{person:t.mother}):t.motherName||"-"}),Object(j.jsx)("td",{children:t.father?Object(j.jsx)(u,{person:t.father}):t.fatherName||"-"})]})},p=(c(23),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),m=function(e){var t=e.people,c=e.isError,n=e.isLoading;return Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[n&&Object(j.jsx)(p,{}),c&&!n&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!c&&!n&&!t.length&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!c&&!n&&t.length>0&&Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(x,{person:e},e.slug)}))})]})]})})},f=function(){var e=Object(d.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(d.useState)(!1),r=Object(h.a)(a,2),s=r[0],i=r[1],o=Object(d.useState)(!1),l=Object(h.a)(o,2),u=l[0],x=l[1],p=function(e){var t=e.map((function(t){return Object(b.a)(Object(b.a)({},t),{},{father:e.find((function(e){return e.name===t.fatherName})),mother:e.find((function(e){return e.name===t.motherName}))})}));n(t)};return Object(d.useEffect)((function(){x(!0),O().then(p).catch((function(){return i(!0)})).finally((function(){x(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)(m,{people:c,isError:s,isLoading:u})]})};var v=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},g=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(o,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{path:"/",element:Object(j.jsx)(l,{})}),Object(j.jsx)(r.b,{path:"home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})}),Object(j.jsxs)(r.b,{path:"people",children:[Object(j.jsx)(r.b,{index:!0,element:Object(j.jsx)(f,{})}),Object(j.jsx)(r.b,{path:":slug",element:Object(j.jsx)(f,{})})]}),Object(j.jsx)(r.b,{path:"*",element:Object(j.jsx)(v,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(g,{})}))}},[[24,1,2]]]);
//# sourceMappingURL=main.5329328d.chunk.js.map