"use strict";(self.webpackChunkSiigdev=self.webpackChunkSiigdev||[]).push([[7],{5502:function(e,t,a){a.r(t);var n=a(7294),r=a(612),l=a(1883),o=a(8183);const d=e=>{let{post:t}=e;return n.createElement("div",{className:"blogPosts"},n.createElement(l.Link,{to:"/blog/"+t.fields.slug},t.frontmatter.title),t.frontmatter.date)};t.default=e=>{let{data:{allMarkdownRemark:{edges:t}}}=e;const a=t.filter((e=>!!e.node.frontmatter.date)).sort(((e,t)=>new Date(t.node.frontmatter.date)-new Date(e.node.frontmatter.date))).map((e=>n.createElement(d,{key:e.node.id,post:e.node})));return n.createElement(r.Z,null,n.createElement(o.Z,{title:"Blog"}),a)}}}]);
//# sourceMappingURL=component---src-pages-blog-js-7648e6af2b08fcdf493d.js.map