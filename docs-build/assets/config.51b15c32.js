var M=Object.defineProperty;var o=(r,e)=>M(r,"name",{value:e,configurable:!0});import{c as k,a as D,w as T,_ as A}from"./iframe.9562924d.js";import{j as p,r as d,a as h,R as x}from"./jsx-runtime.1ab0229f.js";var j=k,N=D;j("Map",function(r){return o(function(){return r(this,arguments.length?arguments[0]:void 0)},"Map")},N);function w(r){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(r)}o(w,"_typeof");function F(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}o(F,"_classCallCheck");function O(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}o(O,"_defineProperties");function W(r,e,t){return e&&O(r.prototype,e),t&&O(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}o(W,"_createClass");function C(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&b(r,e)}o(C,"_inherits");function b(r,e){return b=Object.setPrototypeOf||o(function(n,a){return n.__proto__=a,n},"_setPrototypeOf"),b(r,e)}o(b,"_setPrototypeOf");function I(r){var e=U();return o(function(){var n=y(r),a;if(e){var i=y(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return $(this,a)},"_createSuperInternal")}o(I,"_createSuper");function $(r,e){if(e&&(w(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return B(r)}o($,"_possibleConstructorReturn");function B(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}o(B,"_assertThisInitialized");function U(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}o(U,"_isNativeReflectConstruct");function y(r){return y=Object.setPrototypeOf?Object.getPrototypeOf:o(function(t){return t.__proto__||Object.getPrototypeOf(t)},"_getPrototypeOf"),y(r)}o(y,"_getPrototypeOf");function _(r,e,t,n,a,i,u){try{var c=r[i](u),s=c.value}catch(l){t(l);return}c.done?e(s):Promise.resolve(s).then(n,a)}o(_,"asyncGeneratorStep");function R(r){return function(){var e=this,t=arguments;return new Promise(function(n,a){var i=r.apply(e,t);function u(s){_(i,n,a,u,c,"next",s)}o(u,"_next");function c(s){_(i,n,a,u,c,"throw",s)}o(c,"_throw"),u(void 0)})}}o(R,"_asyncToGenerator");var f=T.FRAMEWORK_OPTIONS,v=new Map,Z=o(function(e,t){var n=t.id,a=t.component;if(!a)throw new Error("Unable to render story ".concat(n," as the component annotation is missing from the default export"));return p(a,{...e})},"render"),G=o(function(e){var t=e.callback,n=e.children,a=h.exports.useRef();return h.exports.useLayoutEffect(function(){a.current!==t&&(a.current=t,t())},[t]),n},"WithCallback"),K=function(){var r=R(regeneratorRuntime.mark(o(function e(t,n){var a;return regeneratorRuntime.wrap(o(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,q(n);case 2:return a=u.sent,u.abrupt("return",new Promise(function(c){a?a.render(p(G,{callback:o(function(){return c(null)},"callback"),children:t})):x.render(t,n,function(){return c(null)})}));case 4:case"end":return u.stop()}},"_callee$"),e)},"_callee")));return o(function(t,n){return r.apply(this,arguments)},"renderElement")}(),L=d.exports.version&&(d.exports.version.startsWith("18")||d.exports.version.startsWith("0.0.0")),z=(f==null?void 0:f.legacyRootApi)!==!0,P=z&&L,V=o(function(e){var t=v.get(e);t&&P?(t.unmount(),v.delete(e)):x.unmountComponentAtNode(e)},"unmountElement"),q=function(){var r=R(regeneratorRuntime.mark(o(function e(t){var n,a;return regeneratorRuntime.wrap(o(function(u){for(;;)switch(u.prev=u.next){case 0:if(P){u.next=2;break}return u.abrupt("return",null);case 2:if(n=v.get(t),n){u.next=9;break}return u.next=6,A(()=>import("./client.4e94addc.js").then(c=>c.c),["assets/client.4e94addc.js","assets/jsx-runtime.1ab0229f.js","assets/iframe.9562924d.js"]);case 6:a=u.sent.default,n=a.createRoot(t),v.set(t,n);case 9:return u.abrupt("return",n);case 10:case"end":return u.stop()}},"_callee2$"),e)},"_callee2")));return o(function(t){return r.apply(this,arguments)},"getReactRoot")}(),H=function(r){C(t,r);var e=I(t);function t(){var n;F(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return n=e.call.apply(e,[this].concat(i)),n.state={hasError:!1},n}return o(t,"ErrorBoundary"),W(t,[{key:"componentDidMount",value:o(function(){var a=this.state.hasError,i=this.props.showMain;a||i()},"componentDidMount")},{key:"componentDidCatch",value:o(function(a){var i=this.props.showException;i(a)},"componentDidCatch")},{key:"render",value:o(function(){var a=this.state.hasError,i=this.props.children;return a?null:i},"render")}],[{key:"getDerivedStateFromError",value:o(function(){return{hasError:!0}},"getDerivedStateFromError")}]),t}(h.exports.Component),S=f!=null&&f.strictMode?h.exports.StrictMode:h.exports.Fragment;function ee(r,e){return g.apply(this,arguments)}o(ee,"renderToDOM");function g(){return g=R(regeneratorRuntime.mark(o(function r(e,t){var n,a,i,u,c,s,l,E;return regeneratorRuntime.wrap(o(function(m){for(;;)switch(m.prev=m.next){case 0:return n=e.storyContext,a=e.unboundStoryFn,i=e.showMain,u=e.showException,c=e.forceRemount,s=a,l=p(H,{showMain:i,showException:u,children:p(s,{...n})}),E=S?p(S,{children:l}):l,c&&V(t),m.next=7,K(E,t);case 7:case"end":return m.stop()}},"_callee3$"),r)},"_callee3"))),g.apply(this,arguments)}o(g,"_renderToDOM");var re={framework:"react"};export{re as parameters,Z as render,ee as renderToDOM};
//# sourceMappingURL=config.51b15c32.js.map
