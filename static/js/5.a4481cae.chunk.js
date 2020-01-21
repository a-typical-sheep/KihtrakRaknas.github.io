/*! For license information please see 5.a4481cae.chunk.js.LICENSE */
(this["webpackJsonpkihtrak.com"]=this["webpackJsonpkihtrak.com"]||[]).push([[5],{272:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(){return f||(f=(0,p.animation)(u))}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.defaults,t=e.children,r=(e.out,e.timeout),o=e.duration,i=void 0===o?p.defaults.duration:o,c=e.delay,s=void 0===c?p.defaults.delay:c,l=e.count,u=void 0===l?p.defaults.count:l,f=e.forever,h=n(e,["children","out","timeout","duration","delay","count","forever"]),m={make:a,duration:void 0===r?i:r,delay:s,forever:f,count:u,style:{animationFillMode:"both"}};return(0,d.default)(h,m,!1,t,!0)}Object.defineProperty(t,"__esModule",{value:!0});var i,c=r(1),s=r(11),d=(i=s)&&i.__esModule?i:{default:i},p=r(10),l={duration:c.number,timeout:c.number,delay:c.number,count:c.number,forever:c.bool},u="\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n}\n",f=!1;o.propTypes=l,t.default=o,e.exports=t.default},273:function(e,t,r){},274:function(e,t,r){"use strict";var n=r(275),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?i:c[e.$$typeof]||a}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var d=Object.defineProperty,p=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(h){var a=f(r);a&&a!==h&&e(t,a,n)}var i=p(r);l&&(i=i.concat(l(r)));for(var c=s(t),m=s(r),y=0;y<i.length;++y){var g=i[y];if(!o[g]&&(!n||!n[g])&&(!m||!m[g])&&(!c||!c[g])){var b=u(r,g);try{d(t,g,b)}catch(v){}}}return t}return t}},275:function(e,t,r){"use strict";e.exports=r(276)},276:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,d=n?Symbol.for("react.provider"):60109,p=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case l:case u:case i:case s:case c:case h:return e;default:switch(e=e&&e.$$typeof){case p:case f:case d:return e;default:return t}}case g:case y:case o:return t}}}function E(e){return w(e)===u}t.typeOf=w,t.AsyncMode=l,t.ConcurrentMode=u,t.ContextConsumer=p,t.ContextProvider=d,t.Element=a,t.ForwardRef=f,t.Fragment=i,t.Lazy=g,t.Memo=y,t.Portal=o,t.Profiler=s,t.StrictMode=c,t.Suspense=h,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===u||e===s||e===c||e===h||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===y||e.$$typeof===d||e.$$typeof===p||e.$$typeof===f||e.$$typeof===b||e.$$typeof===v)},t.isAsyncMode=function(e){return E(e)||w(e)===l},t.isConcurrentMode=E,t.isContextConsumer=function(e){return w(e)===p},t.isContextProvider=function(e){return w(e)===d},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return w(e)===f},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===y},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===c},t.isSuspense=function(e){return w(e)===h}},277:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(4),o=r(6),i=r(5),c=r(7),s=r(0),d=r.n(s),p=(r(20),r(272)),l=r.n(p),u=(r(273),r(1)),f=r.n(u);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){var t,r;function n(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(m(t)),t.handleErrored=t.handleErrored.bind(m(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(m(t)),t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=n.prototype;return a.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},a.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},a.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},a.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},a.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.props.onChange&&this.props.onChange(null)},a.handleErrored=function(){this.props.onErrored&&this.props.onErrored()},a.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.props.onChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},a.componentDidMount=function(){this.explicitRender()},a.componentDidUpdate=function(){this.explicitRender()},a.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},a.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},a.handleRecaptchaRef=function(e){this.captcha=e},a.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return d.a.createElement("div",h({},t,{ref:this.handleRecaptchaRef}))},n}(d.a.Component);y.displayName="ReCAPTCHA",y.propTypes={sitekey:f.a.string.isRequired,onChange:f.a.func,grecaptcha:f.a.object,theme:f.a.oneOf(["dark","light"]),type:f.a.oneOf(["image","audio"]),tabindex:f.a.number,onExpired:f.a.func,onErrored:f.a.func,size:f.a.oneOf(["compact","normal","invisible"]),stoken:f.a.string,hl:f.a.string,badge:f.a.oneOf(["bottomright","bottomleft","inline"])},y.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var g=r(274),b=r.n(g);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var w={},E=0;var k,S,_=(k=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload=onloadcallback&render=explicit"},S=(S={callbackName:"onloadcallback",globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",r=function(t){var r,n;function a(e,r){var n;return(n=t.call(this,e,r)||this).state={},n.__scriptURL="",n}n=t,(r=a).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var o=a.prototype;return o.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+E++),this.__scriptLoaderID},o.setupScriptURL=function(){return this.__scriptURL="function"===typeof k?k():k,this.__scriptURL},o.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},o.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=w[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[S.callbackName]},o.componentDidMount=function(){var e=this,t=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),n=S,a=n.globalName,o=n.callbackName,i=n.scriptId;if(a&&"undefined"!==typeof window[a]&&(w[t]={loaded:!0,observers:{}}),w[t]){var c=w[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[r]=function(t){return e.asyncScriptLoaderHandleLoad(t)},w[t]={loaded:!1,observers:s};var d=document.createElement("script");d.src=t,d.async=!0,i&&(d.id=i);var p=function(e){if(w[t]){var r=w[t].observers;for(var n in r)e(r[n])&&delete r[n]}};o&&"undefined"!==typeof window&&(window[o]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=w[t];e&&(e.loaded=!0,p((function(t){return!o&&(t(e),!0)})))},d.onerror=function(){var e=w[t];e&&(e.errored=!0,p((function(t){return t(e),!0})))},document.body.appendChild(d)},o.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===S.removeOnUnmount)for(var t=document.getElementsByTagName("script"),r=0;r<t.length;r+=1)t[r].src.indexOf(e)>-1&&t[r].parentNode&&t[r].parentNode.removeChild(t[r]);var n=w[e];n&&(delete n.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===S.removeOnUnmount&&delete w[e])},o.render=function(){var t=S.globalName,r=this.props,n=(r.asyncScriptOnLoad,r.forwardedRef),a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(r,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(a[t]="undefined"!==typeof window[t]?window[t]:void 0),a.ref=n,Object(s.createElement)(e,a)},a}(s.Component),n=Object(s.forwardRef)((function(e,t){return Object(s.createElement)(r,v({},e,{forwardedRef:t}))}));return n.displayName="AsyncScriptLoader("+t+")",n.propTypes={asyncScriptOnLoad:f.a.func},b()(n,e)})(y);r.d(t,"default",(function(){return x}));var x=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={captcha:!1},r}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement("h1",{className:"text-center display-3"},"Karthik Sankar Around The Web"),d.a.createElement("p",{className:"txtAroundWeb text-center"},"Wait, is this the Karthik Sankar that you're looking for? See if any of these help you identify me:"),d.a.createElement("br",null),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-md-4 text-center mb-4"},d.a.createElement("a",{href:"https://www.instagram.com/kihtrakr/"},d.a.createElement("img",{className:"aroundWebImg",alt:"Instagram Logo",loading:"lazy",src:"https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300"}),d.a.createElement("strong",{className:"id ml-4"},"@KihtrakR"))),d.a.createElement("div",{className:"col-md-4 text-center mb-4"},d.a.createElement("a",{href:"https://github.com/kihtrakRaknas"},d.a.createElement("img",{className:"aroundWebImg",alt:"Github Logo",loading:"lazy",src:"https://image.flaticon.com/icons/svg/25/25231.svg"}),d.a.createElement("strong",{className:"id ml-4"},"KihtrakRaknas"))),d.a.createElement("div",{className:"col-md-4 text-center mb-4"},d.a.createElement("a",{href:"https://linkedin.com/in/karthik-sankar-a5a523178"},d.a.createElement("img",{className:"aroundWebImg",alt:"LinkedIn Logo",loading:"lazy",src:"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"}),d.a.createElement("strong",{className:"id ml-4"},"Karthik Sankar")))),d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("h1",{id:"Contact-Me",className:"text-center display-4"},"Contact Me!"),d.a.createElement("br",null),d.a.createElement("p",{className:"txtAroundWeb text-center"},"Please don't hesitate to contact me. As long as you are a real person."),d.a.createElement("br",null),this.state.captcha?null:d.a.createElement("div",{className:"contain"},d.a.createElement(_,{sitekey:"6LfXL7gUAAAAAIdctYLl1yDvN_vS8j2IHqgHbppS",onChange:function(){return e.setState({captcha:!0,email:"contact"})}})),this.state.captcha?d.a.createElement(l.a,null,d.a.createElement("p",{className:"email text-center"},"Email me at: ",d.a.createElement("a",{href:"mailto:"+this.state.email+"@kihtrak.com"},this.state.email,"@kihtrak.com"))):d.a.createElement("p",{className:"email text-center"},"Please complete the captcha to view contact information"))}}]),t}(d.a.Component)}}]);
//# sourceMappingURL=5.a4481cae.chunk.js.map