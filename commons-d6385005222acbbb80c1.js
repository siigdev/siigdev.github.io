(self.webpackChunkSiigdev=self.webpackChunkSiigdev||[]).push([[351],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,d,l,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(d=c;0!=d--;)if(!i(e[d],a[d]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(d=u.next()).done;)if(!a.has(d.value[0]))return!1;for(u=e.entries();!(d=u.next()).done;)if(!i(d.value[1],a.get(d.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(d=u.next()).done;)if(!a.has(d.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(d=c;0!=d--;)if(e[d]!==a[d])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(d=c;0!=d--;)if(!Object.prototype.hasOwnProperty.call(a,l[d]))return!1;if(t&&e instanceof Element)return!1;for(d=c;0!=d--;)if(("_owner"!==l[d]&&"__v"!==l[d]&&"__o"!==l[d]||!e.$$typeof)&&!i(e[l[d]],a[l[d]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var d,l=[];function u(){d=e(l.map((function(e){return e.props}))),s.canUseDOM?t(d):n&&(d=n(d))}var s=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return d},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=d;return d=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(s,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(s,"canUseDOM",c),s}}},4852:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),o=n(1597),i=function(e){var t=e.query;return r.createElement("div",{id:"searchBox"},r.createElement("form",{role:"search",method:"GET",onSubmit:function(e){e.preventDefault()}},r.createElement("input",{type:"search",id:"search-input","aria-label":"Search input",name:"keywords",autoComplete:"off",onKeyPress:function(e){"Enter"===e.key&&(0,o.navigate)("/search?keywords="+encodeURIComponent(e.target.value))},value:t,style:{backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTYgMjE2IiB3aWR0aD0iMjE2IiBoZWlnaHQ9IjIxNiI+Cgk8ZGVmcz4KCQk8aW1hZ2Ugd2lkdGg9IjE1OCIgaGVpZ2h0PSIxNTgiIGlkPSJpbWcxIiBocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUo0QUFBQ2VDQU1BQUFEMFcwTkpBQUFBQVhOU1IwSUIyY2tzZndBQUFqZFFURlJGY0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3Y0hCd2NIQndjSEJ3VkhCTm1BQUFBTDEwVWs1VEFCYytaWXl3d2MzYTUvUDlCMENDd3ZELzc0RS9CaWg2dmZmMnZIa25GRzNMeVdzVFM3SDZTUUpXME01VUJHRFkxMTVHUXh1cnFCcDA4bkVESDhqRkhVL3U3VXlRL2dVVklCNHQ1dVFyUFR2MU9xSjhWVFFsR1F5ais0bElDNHJnaElYaHdBR1B0cmpaUmR3SWYvanNIQy9FYzZHbGIvR3ErVmltOUVKYzFWUFdnSzdkRWtwcHVzZkRkN25paHlxL0RXSitWNzQxNWVuR3JRNzhqZEdHaUVmalBFRk5DZCtEckRMUHFWdFpLU3pLRWQ2M2kyaW4yeGdXMU5QU3lpUVQrZ0FBQjFwSlJFRlVlSnp0blBsYlUwY1VoZ2NFZ29EYXE0SzRnSWdJVWNSRVJCRkNRWkVJV0VFckNvaFVYS2hHWEZBRUdxc2k3Z3RhY1ZkcWxkYWRZcXQyY2VzZjEwUktSYzZabTFsT3lPVjUvSDVOempkdmtya3paODdNaERGSmhZV1BpWWlNc2tXUGpZbU5HUnR0aTRxTUdCTWVKbXNTRk1XTkd6L2hDd1BUeEtoSmsrTkR5cFl3SlhFcWlqYW9hZE5uSklXSUxYbG1paW5hb0dhbHpoNTV1TFE1NlVKd2ZxVkhab3dvbTMzdVBHRzJBV1hPdDQ4VVhOWUNoeVNjWDg2RldTTkNseDJ0QU9lWFkxSHc0WElXSzhMNXRTUTN1SEJaUzJNMDZBd2pMOThWUkxxQ0w3WGcvQ29zQ2hyZHN1WGFkSVpSdkNJNGNQRWxCSEErdVNOV0JvR3VWUCtISFZSaE1qbGRtZXB3Z3NsUlRreTM2aXRDT3NOWVhVRktWem1SbE00d2xxK2hwSnRHVEdjWWE3OG1vMXNWOEx0TFQxbFh0WDVEZFUydHE3YW1lc1A2cW8wcGRZRkNsbFA5dm1VQitwMXRVLzAzSUtnMlkzT21lZGhxbXVlajFQU1piZGpDVDRjVHRtNHpDM1ZTcEtueFp1UGQ5dXhHMCtERytna20wWVVFS2RhM2ZQc2RJdDI3Y2lmZllMTTIzVEt1dDJlWG9FVkdFOC9DbmFaSlY4RExBcVpXaVM4U2QrL1p5M0haMTZ4Rmw4WHJlTTVWVWo3N1BSeWZBMXI1WHd2SDlTQWNTY3hWMjhweGF0T2d5OEZ6NDloVUJhODJOK3JWWHFPTzl4M3E2RjJ2WkhiSWk3cDlyMHlYamZyRnFDNjRkaDFHL1k0bzJtV2gwNFZYZlRtNEMvMytuSXBQeHdMTUxGYnRseDNRSWJUL0hWWHlzcU9EZ2NwVDhWRnRtR1dIK2NUSTBWek02cUFXSFdQbytISk14UW1yOG5US2puZkRWWXY5SkRZRm96VEVaNnJjWElGcFB6YS8xY3Y3ekVGc3FyVHBHRHVPK0o2UWRrbEdxb3VlT0FLODNTZWhzZmVVck10TTVFT0tabERtT28wNG41RTFRZXJHTzBqb0dEc0xyYzlKV2lRZ0g1RnE2VGNaOGE2V3M1Z0NIYllUMFRGMkhwcGZrSE5JaEE3WlpIZ1owTHhMeWlBTzdxWTBLRTA5cUJvdkF2ZTFVa1cxY2ZEemJTR2pZK3dTdEsrVWlSOFA0eWszbjM2QTludGs0dUhpV1dWZTVBdk81NWRsd3VFZTR5WlN2QWpnWHl3UkhRYS9mSVZaMjBSSXZpRlIwQTBId2VtNm1kU242b2IxTllsNjVCZ1FuRUpLeDVnTnRIQkZQQmgyalhYRWVEQnJsdWpja1NDWUl0TWJxcXVnQlltY0x3b0U2NnpQTUYwRExWd1hENFk5WXdNeDNnM1FRb3A0TUZ4L1N5WThBWlVFV25DSUI0OEZ3UnFGR2xTNW9JV2I0c0d3TUZWTGpOY05Xc2dURDQ0RndkUzd4QzdRUXF4NGNDaStQYTk0Y0NqNlhveDRjQ2llM0Z2aXdhRVk5NXppd2FHWU5XNkxCNGRpenIwakhnd3psbzNFZURCaktSRVBEa1crbHk4ZWpHVEx0QU5mejQrZ0JZa3pkTWhhZy9ZRUhyTFdLSk1JaDd2eitudWJRM1VYK0xmTEZDSGd5SkpKaXZjVDhFK1VDWjhFdi93RVFyb0thSDlQSmg0cHdXMGx4THNQN1h0bDR1UGd3WlZ0ZEJVcSs4L0FYWElkUFIxK1BybzZBZkxjUnNrNXpOQjJNRkVoTkcrUmM0QUpqMkg4UWtUM0FQR1dUZGhtUVl1ZFJIaEl4NUVldGxLUmowalQreDRpemt0bFRXWWp1MEpOdXdub0hqMkd4blh5YXdXWTgwbFdXRGw2Z3ZnK2xiZkI5cGIyN3RlbWU0WnQyS3ZzLy9jaFBoN2R2S29ITzdEVXArSTBIekV5V2pYeGZzVk0rMVdjN0U3TVN1ZlVEdWRVa1VPdEJMRVE4M0lmMHFEclIwOWlQRmN6eTBLdlpYalZkM1Y3MFFzeWZhb1hUUlpoYnNaaFZiNWUvQlRRT0VVN3hwYWdmbDYxMzdjZnYxeTBXSm1PNWVhaGptNlY1Nk9GY3dKTjU0WkpQbXJwRzE5a3g3OGVkRVF4RkU0UkRKVUxTYzAreUNNM2Z6empIUi90MHN2Qmk0bzV2bnVQaStjSGo1N2dSL2NNb3poSGk0NnhGWGlYOGFucHRLREZReVJIR1pCYi8rWUxMQWY5cjdQaEF2RVBrT3h6VUFTN3NDdDUzYyt2OHhubWZjZWVaaGE5ZytMbVg3THBuYjZMbDM3alJsYmNoeXZHSVVyWDdYZ0RLbDl0MW9oaHpJdEk2d1pCM1N2dXdrckZNQjNvSWVIN1BlQUZzRHBiNjlWck41Snl1MTNkdVVrM3JsMXR0UVc4citIWGk1Y2tmR3ZXaWpTbXJvWUNUVDZLQzNRbWVxekpWeEdnLytucWxTWmZ1Y3FkWEo2UTNPV1Y1dFdjWkxNUlRFNS9OQ05ldW53ci8rVE9iMUp5Mzdlem5oZjBmQ3h0SHdIZHdBM1RsOGdySjNYNWlnNW8wM1g5TjFWZ3I1M1V2YnZyYW12WGdtdi9hOUFKZlZtYmo5WDhyVUczK0dQbWpyOUJuNDhkUVpmbkF1b2J1aWJqdktkSm44OTF0Rk1CenZQOGsvU0o5N1ltdmJ0WEg5UjRMTUQ5UjZDKy9tR1ZDdTQ3S2ZnWXF6L0JXejlBMVQyRkZiS0dJUE94VTJmT0NjRmxMc1ZxbjJWOHZ0YzBmSXhWWCtneVQ3WFNvMXA0TmZjQzdnTEplRTJUUnZzVlg3bm5NcjdZYkUrODEydTIxek15Zkg0bHI3bXk2Y1QxRk1mTnZGaHZ6QzNuN1RzbCtSbGxBUmZZQmErNGZORzBmR295NHd2eW4zc0lxZHpxZk1qVmwxSEM1N0VDWDlFbzVxTSs5NmFpSXU3VmNjdnpPYXpBMXp5SytkNkVHczZuNXRlamxzOXBCYjZjMGN2WGFZVi9Rc3poLzdIS1p6NEI1Zkw1T2l6QngvdG5EeC9mMjFERHNjOTh1cXJoODcyekJCKy9pRzE1dnRKUXd6SHI4NzNoODcyM0JCKy93bWwxdm44c3djY3R3Rm9Dajh0bkRUckd3bEErcTlEaGZOYWg4L0YxV0ptT3NiY2RWcVliem1jMU9oL2ZPeXZURGVXekl0MUhQbXZTTVZiNnpzcDBQcjczVnFiejgxbVp6c2YzS2QyL0JxSGJBdHV1YWNnQUFBQUFTVVZPUks1Q1lJST0iLz4KCTwvZGVmcz4KCTxzdHlsZT4KCQl0c3BhbiB7IHdoaXRlLXNwYWNlOnByZSB9Cgk8L3N0eWxlPgoJPHVzZSBpZD0iQmFja2dyb3VuZCIgaHJlZj0iI2ltZzEiIHg9IjI3IiB5PSIyNyIgLz4KPC9zdmc+)",backgroundSize:"20px 20px",backgroundRepeat:"no-repeat"}}),r.createElement("label",{htmlFor:"search-input",style:{display:"none"}},"Search input")))},a=function(e){return e.isPartiallyCurrent?{className:"has-child active top"}:null},c=function(){return r.createElement("header",null,r.createElement("div",null,r.createElement(o.Link,{to:"/",activeClassName:"active"},"about")),r.createElement("div",null,r.createElement(o.Link,{to:"/blog",getProps:a,activeClassName:"active"},"blog")),r.createElement(i,null))},d=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(c,null),r.createElement("div",{className:"container"},r.createElement("main",null,t)))}},262:function(e,t,n){"use strict";n.d(t,{Z:function(){return ye}});var r,o,i,a,c=n(7294),d=n(5697),l=n.n(d),u=n(4839),s=n.n(u),p=n(2993),f=n.n(p),h=n(6494),E=n.n(h),T="bodyAttributes",m="htmlAttributes",S="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},N=(Object.keys(y).map((function(e){return y[e]})),"charset"),b="cssText",C="href",j="http-equiv",V="innerHTML",R="itemprop",k="name",I="property",W="rel",Z="src",g="target",Y={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Q="defaultTitle",v="defer",U="encodeSpecialCharacters",w="onChangeClientState",J="titleTemplate",F=Object.keys(Y).reduce((function(e,t){return e[Y[t]]=t,e}),{}),M=[y.NOSCRIPT,y.SCRIPT,y.STYLE],O="data-react-helmet",x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},H=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},L=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=_(e,y.TITLE),n=_(e,J);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,Q);return t||r||void 0},G=function(e){return _(e,w)||function(){}},P=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+x(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],d=c.toLowerCase();-1===t.indexOf(d)||n===W&&"canonical"===e[n].toLowerCase()||d===W&&"stylesheet"===e[d].toLowerCase()||(n=d),-1===t.indexOf(c)||c!==V&&c!==b&&c!==R||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],d=E()({},r[c],o[c]);r[c]=d}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,d=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,s=e.title,p=e.titleAttributes;de(y.BODY,r),de(y.HTML,o),ce(s,p);var f={baseTag:le(y.BASE,n),linkTags:le(y.LINK,i),metaTags:le(y.META,a),noscriptTags:le(y.NOSCRIPT,c),scriptTags:le(y.SCRIPT,l),styleTags:le(y.STYLE,u)},h={},E={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(E[e]=f[e].oldTags)})),t&&t(),d(e,h,E)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),de(y.TITLE,t)},de=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(O),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var d=a[c],l=t[d]||"";n.getAttribute(d)!==l&&n.setAttribute(d,l),-1===o.indexOf(d)&&o.push(d);var u=i.indexOf(d);-1!==u&&i.splice(u,1)}for(var s=i.length-1;s>=0;s--)n.removeAttribute(i[s]);o.length===i.length?n.removeAttribute(O):n.getAttribute(O)!==a.join(",")&&n.setAttribute(O,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===V)n.innerHTML=t.innerHTML;else if(r===b)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(O,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Y[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[O]=!0,o=se(n,r),[c.createElement(y.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+L(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+L(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case T:case m:return{toComponent:function(){return se(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[O]=!0,r);return Object.keys(t).forEach((function(e){var n=Y[e]||e;if(n===V||n===b){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===V||e===b)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+L(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===M.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,d=e.scriptTags,l=e.styleTags,u=e.title,s=void 0===u?"":u,p=e.titleAttributes;return{base:pe(y.BASE,t,r),bodyAttributes:pe(T,n,r),htmlAttributes:pe(m,o,r),link:pe(y.LINK,i,r),meta:pe(y.META,a,r),noscript:pe(y.NOSCRIPT,c,r),script:pe(y.SCRIPT,d,r),style:pe(y.STYLE,l,r),title:pe(y.TITLE,{title:s,titleAttributes:p},r)}},he=s()((function(e){return{baseTag:K([C,g],e),bodyAttributes:P(T,e),defer:_(e,v),encode:_(e,U),htmlAttributes:P(m,e),linkTags:q(y.LINK,[W,C],e),metaTags:q(y.META,[k,N,j,I,R],e),noscriptTags:q(y.NOSCRIPT,[V],e),onChangeClientState:G(e),scriptTags:q(y.SCRIPT,[Z,V],e),styleTags:q(y.STYLE,[b],e),title:X(e),titleAttributes:P(S,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),fe)((function(){return null})),Ee=(o=he,a=i=function(e){function t(){return A(this,t),H(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case y.TITLE:return z({},o,((t={})[r.type]=a,t.titleAttributes=z({},i),t));case y.BODY:return z({},o,{bodyAttributes:z({},i)});case y.HTML:return z({},o,{htmlAttributes:z({},i)})}return z({},o,((n={})[r.type]=z({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)}(D(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=D(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},B(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);Ee.renderStatic=Ee.rewind;var Te=Ee,me=n(1597);function Se(e){var t=e.description,n=e.lang,r=e.meta,o=e.title,i=(0,me.useStaticQuery)("63159454").site,a=t||i.siteMetadata.description;return c.createElement(Te,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:o},{property:"og:description",content:a},{property:"og:type",content:"website"}].concat(r)})}Se.defaultProps={lang:"en",meta:[],description:"Personal portfolio and blog by Software Engineer Sebastian, Siigdev."};var ye=Se}}]);
//# sourceMappingURL=commons-d6385005222acbbb80c1.js.map