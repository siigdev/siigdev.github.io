"use strict";(self.webpackChunkSiigdev=self.webpackChunkSiigdev||[]).push([[7],{5502:function(e,t,n){n.r(t);var r=n(7294),a=n(4852),o=n(1597),l=n(262),u=function(e){var t=e.post;return r.createElement("div",{className:"blogPosts"},r.createElement(o.Link,{to:"/blog/"+t.fields.slug},t.frontmatter.title),t.frontmatter.date)};t.default=function(e){var t=e.data.allMarkdownRemark.edges.filter((function(e){return!!e.node.frontmatter.date})).sort((function(e,t){return new Date(t.node.frontmatter.date)-new Date(e.node.frontmatter.date)})).map((function(e){return r.createElement(u,{key:e.node.id,post:e.node})}));return r.createElement(a.Z,null,r.createElement("br",null),r.createElement(l.Z,{title:"Blog"}),t)}}}]);
//# sourceMappingURL=component---src-pages-blog-js-5ccd4bfb5ddc60977b4f.js.map