(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{9917:function(e,t,i){"use strict";var n=i(3038),o=i(319),r=i(5318);t.default=function(e){var t=e.src,i=e.sizes,o=e.unoptimized,r=void 0!==o&&o,u=e.priority,g=void 0!==u&&u,h=e.loading,p=e.className,v=e.quality,b=e.width,y=e.height,w=e.objectFit,k=e.objectPosition,S=e.loader,E=void 0===S?z:S,_=e.placeholder,I=void 0===_?"empty":_,j=e.blurDataURL,q=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),R=i?"responsive":"intrinsic";"layout"in q&&(q.layout&&(R=q.layout),delete q.layout);var D="";if(function(e){return"object"===typeof e&&(m(e)||function(e){return void 0!==e.src}(e))}(t)){var M=m(t)?t.default:t;if(!M.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(M)));if(j=j||M.blurDataURL,D=M.src,(!R||"fill"!==R)&&(y=y||M.height,b=b||M.width,!M.height||!M.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(M)))}t="string"===typeof t?t:D;var N=x(b),L=x(y),O=x(v);0;var C=!g&&("lazy"===h||"undefined"===typeof h);t&&t.startsWith("data:")&&(r=!0,C=!1);var W,B,P,U=(0,f.useIntersection)({rootMargin:"200px",disabled:!C}),F=n(U,2),H=F[0],V=F[1],J=!C||V,G=(0,c.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:w,objectPosition:k},"blur"===I?{filter:"blur(20px)",backgroundSize:"cover",backgroundImage:'url("'.concat(j,'")')}:void 0);if("undefined"!==typeof N&&"undefined"!==typeof L&&"fill"!==R){var Q=L/N,T=isNaN(Q)?"100%":"".concat(100*Q,"%");"responsive"===R?(W={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},B={display:"block",boxSizing:"border-box",paddingTop:T}):"intrinsic"===R?(W={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},B={boxSizing:"border-box",display:"block",maxWidth:"100%"},P='<svg width="'.concat(N,'" height="').concat(L,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===R&&(W={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:N,height:L})}else"undefined"===typeof N&&"undefined"===typeof L&&"fill"===R&&(W={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var K={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};J&&(K=A({src:t,unoptimized:r,layout:R,width:N,quality:O,sizes:i,loader:E}));return s.default.createElement("div",{style:W},B?s.default.createElement("div",{style:B},P?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(P))}):null):null,!J&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},q,A({src:t,unoptimized:r,layout:R,width:N,quality:O,sizes:i,loader:E}),{decoding:"async",style:G,className:p}))),s.default.createElement("img",Object.assign({},q,K,{decoding:"async",className:p,ref:function(e){H(e),function(e,t){if("blur"===t&&e){var i=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"}))};e.complete?i():e.onload=i}}(e,I)},style:G})),g?s.default.createElement(d.default,null,s.default.createElement("link",{key:"__nimg-"+K.src+K.srcSet+K.sizes,rel:"preload",as:"image",href:K.srcSet?void 0:K.src,imagesrcset:K.srcSet,imagesizes:K.sizes})):null)};var a=r(i(7316)),c=r(i(7154)),s=r(i(7294)),d=r(i(2775)),l=i(8814),u=i(5655),f=i(7426);var g=new Map([["imgix",function(e){var t=e.root,i=e.src,n=e.width,o=e.quality,r=["auto=format","fit=max","w="+n],a="";o&&r.push("q="+o);r.length&&(a="?"+r.join("&"));return"".concat(t).concat(k(i)).concat(a)}],["cloudinary",function(e){var t=e.root,i=e.src,n=e.width,o=e.quality,r=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(r).concat(k(i))}],["akamai",function(e){var t=e.root,i=e.src,n=e.width;return"".concat(t).concat(k(i),"?imwidth=").concat(n)}],["default",function(e){var t=e.root,i=e.src,n=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}]]);function m(e){return void 0!==e.default}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||u.imageConfigDefault,p=h.deviceSizes,v=h.imageSizes,b=h.loader,y=h.path,w=(h.domains,[].concat(o(p),o(v)));function A(e){var t=e.src,i=e.unoptimized,n=e.layout,r=e.width,a=e.quality,c=e.sizes,s=e.loader;if(i)return{src:t,srcSet:void 0,sizes:void 0};var d=function(e,t,i){if(i&&("fill"===t||"responsive"===t)){for(var n,r=/(^|\s)(1?\d?\d)vw/g,a=[];n=r.exec(i);n)a.push(parseInt(n[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:w.filter((function(e){return e>=p[0]*c})),kind:"w"}}return{widths:w,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:p,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return w.find((function(t){return t>=e}))||w[w.length-1]})))),kind:"x"}}(r,n,c),l=d.widths,u=d.kind,f=l.length-1;return{sizes:c||"w"!==u?c:"100vw",srcSet:l.map((function(e,i){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===u?e:i+1).concat(u)})).join(", "),src:s({src:t,quality:a,width:l[f]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t=g.get(b);if(t)return t((0,c.default)({root:y},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(b))}function k(e){return"/"===e[0]?e.slice(1):e}p.sort((function(e,t){return e-t})),w.sort((function(e,t){return e-t}))},7426:function(e,t,i){"use strict";var n=i(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,i=e.disabled||!a,s=(0,o.useRef)(),d=(0,o.useState)(!1),l=n(d,2),u=l[0],f=l[1],g=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),i||u||e&&e.tagName&&(s.current=function(e,t,i){var n=function(e){var t=e.rootMargin||"",i=c.get(t);if(i)return i;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return c.set(t,i={id:t,observer:o,elements:n}),i}(i),o=n.id,r=n.observer,a=n.elements;return a.set(e,t),r.observe(e),function(){a.delete(e),r.unobserve(e),0===a.size&&(r.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[i,t,u]);return(0,o.useEffect)((function(){if(!a&&!u){var e=(0,r.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[u]),[g,u]};var o=i(7294),r=i(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},8814:function(e,t){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},5655:function(e,t){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1}},5675:function(e,t,i){e.exports=i(9917)}}]);