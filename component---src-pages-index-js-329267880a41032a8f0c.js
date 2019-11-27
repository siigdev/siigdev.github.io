(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(210),l=a(211);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Home"}),r.a.createElement("p",null,"Hello! I'm Sebastian Nørgaard."),r.a.createElement("p",null,"A Master student in Software Engineering at the University of Southern Denmark, Odense. Will be graduating in June 2020. Generally enthusiastic about anything software-related, and very determined to continously improve and learn new and exciting technologies."),r.a.createElement("p",null,"Currently, I'm looking out for a student job while I write my master's thesis. Feel free to reach out to me if you have anything interesting. "),r.a.createElement("p",null,"You can find more information on ",r.a.createElement("a",{href:"https://github.com/siigdev"},"GitHub")," or ",r.a.createElement("a",{href:"https://linkedin.com/in/sebastiannoergaard"},"LinkedIn"),"."),r.a.createElement("p",null,"Or contact me at ",r.a.createElement("a",{href:"mailto:pwnage@live.dk"},"pwnage@live.dk"),"."),r.a.createElement("p",null))}},206:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(71),l=a.n(i);a.d(t,"a",function(){return l.a}),a.d(t,"b",function(){return i.navigate});a(207),a(10).default.enqueue,r.a.createContext({})},207:function(e,t,a){var n;e.exports=(n=a(209))&&n.default||n},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Siigdev"}}}}},209:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),i=a(98);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},210:function(e,t,a){"use strict";var n=a(208),r=a(0),i=a.n(r),l=a(206),o=function(e){var t=e.query;return i.a.createElement("div",{id:"searchBox"},i.a.createElement("form",{role:"search",method:"GET",onSubmit:function(e){e.preventDefault()}},i.a.createElement("span",{role:"img","aria-label":"Search",id:"search-label"},"🔍"),i.a.createElement("input",{type:"search",id:"search-input",name:"keywords",autoComplete:"off","aria-controls":"search-results-count",onKeyPress:function(e){"Enter"===e.key&&Object(l.b)("/search?keywords="+encodeURIComponent(e.target.value))},value:t})))},c=function(e){return e.isPartiallyCurrent?{className:"has-child active top"}:null},s=function(e){e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",null,i.a.createElement(l.a,{to:"/",activeClassName:"active"},"about")),i.a.createElement("div",null,i.a.createElement(l.a,{to:"/blog",getProps:c,activeClassName:"active"},"blog")),i.a.createElement(o,null))};s.defaultProps={siteTitle:""};var u=s;a(213),t.a=function(e){var t=e.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{className:"container"},i.a.createElement("main",null,t)))}},211:function(e,t,a){"use strict";var n=a(212),r=a(0),i=a.n(r),l=a(214),o=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,c=n.data.site,s=t||c.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:"Personal portfolio and blog by Software Engineering Master student Sebastian, Siigdev."},t.a=c},212:function(e){e.exports={data:{site:{siteMetadata:{title:"Siigdev",description:"Personal portfolio and blog by Software Engineering Master student Sebastian, Siigdev.",author:"Sebastian Nørgaard  <pwnage@live.dk>"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-329267880a41032a8f0c.js.map