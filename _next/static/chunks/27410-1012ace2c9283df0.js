(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27410],{81420:function(e,t,n){"use strict";n.d(t,{Z:function(){return createReactComponent}});var r=n(66662),a=n(45608),s=n.n(a),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},o=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,__spreadValues=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&__defNormalProp(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&__defNormalProp(e,n,t[n]);return e},__spreadProps=(e,t)=>l(e,u(t)),__objRest=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))0>t.indexOf(r)&&m.call(e,r)&&(n[r]=e[r]);return n},createReactComponent=(e,t,n)=>{let a=(0,r.forwardRef)((t,a)=>{var{color:s="currentColor",size:o=24,stroke:l=2,children:u}=t,d=__objRest(t,["color","size","stroke","children"]);return(0,r.createElement)("svg",__spreadValues(__spreadProps(__spreadValues({ref:a},i),{width:o,height:o,stroke:s,strokeWidth:l,className:`tabler-icon tabler-icon-${e}`}),d),[...n.map(([e,t])=>(0,r.createElement)(e,t)),...u||[]])});return a.propTypes={color:s().string,size:s().oneOfType([s().string,s().number]),stroke:s().oneOfType([s().string,s().number])},a.displayName=`${t}`,a}},18248:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(81420).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},58321:function(e,t,n){"use strict";n.d(t,{G:function(){return a},j:function(){return useSessionState}});var r=n(66662);let a="wmebv",getSessionStorageJSON=e=>{try{let t=sessionStorage.getItem(e);if("string"==typeof t)return JSON.parse(t)}catch(e){return null}},setSessionStorageJSON=(e,t)=>{try{sessionStorage.setItem(e,JSON.stringify(t))}catch(e){}},reomveSessionStorage=e=>{try{sessionStorage.removeItem(e)}catch(e){}},isObject=e=>"object"==typeof e&&!!e,useSessionState=(e,t)=>{let n=(0,r.useState)(()=>{let n=getSessionStorageJSON(e);console.log(e,n,t);let r=isObject(t)&&isObject(n)?{...t,...n}:n||t;return r}),[a,s]=n;return[a,t=>(s(t),void 0===t?reomveSessionStorage(e):setSessionStorageJSON(e,t),t),t=>{let n=getSessionStorageJSON(e),r=isObject(t)&&isObject(n)?{...n,...t}:t;return setSessionStorageJSON(e,r),r},()=>reomveSessionStorage(e)]}},79227:function(e,t,n){"use strict";n.d(t,{Y:function(){return o}});var r=n(83152),a=n(66150),s=n(98370),i=n(66662);let o=(0,i.forwardRef)((e,t)=>{let{name:n,invalid:o,disabled:l,label:u,errorMessage:d,description:c,readOnly:m,status:g,required:p,type:f,value:h,onChange:v,onInput:b,onFocus:x,onBlur:y,defaultValue:j,buttonLabel:k,...S}=e,_=(0,i.useId)(),O=(0,i.useId)(),N=(0,i.useId)(),w=(0,i.useId)(),I=(0,i.useId)(),R=(0,i.useRef)(null);return(0,r.jsxs)(a.Wi,{invalid:o,...S,children:[(0,r.jsx)("p",{className:"utrecht-form-field__label",children:(0,r.jsx)(a.lX,{id:_,htmlFor:O,children:u})}),c&&(0,r.jsx)(a.ue,{id:N,children:c}),o&&d&&(0,r.jsx)(a.w7,{className:"utrecht-form-field__error-message",id:I,children:d}),(0,r.jsxs)("p",{className:"utrecht-form-field__input",children:[(0,r.jsx)(a.fE,{name:n,tabIndex:-1,"aria-hidden":"true",id:O,"aria-describedby":N,type:"file",className:"sr-only",ref:R}),(0,r.jsx)(a.zx,{"aria-labelledby":_,"aria-describedby":(0,s.Z)({[N]:c,[I]:o,[w]:g})||void 0,"aria-controls":O,appearance:"secondary-action-button",onClick:()=>{var e;null==R||null===(e=R.current)||void 0===e||e.click()},children:k})]}),g&&(0,r.jsx)("div",{className:"utrecht-form-field__status",id:w,children:(0,r.jsx)("div",{className:"utrecht-form-field-description utrecht-form-field-description--status",children:g})})]})});o.displayName="FormFieldFile"},87032:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var r=n(83152),a=n(66150),s=n(98370),i=n(66662);let o=(0,i.forwardRef)((e,t)=>{let{name:n,invalid:o,disabled:l,label:u,autoComplete:d,errorMessage:c,description:m,readOnly:g,status:p,placeholder:f,required:h,type:v,value:b,onChange:x,onInput:y,onFocus:j,onBlur:k,defaultValue:S,..._}=e,O=(0,i.useId)(),N=(0,i.useId)(),w=(0,i.useId)(),I=(0,i.useId)();return(0,r.jsxs)(a.Wi,{invalid:o,..._,children:[(0,r.jsx)(a.lX,{className:"voorbeeld-form-label",htmlFor:O,children:u}),m&&(0,r.jsx)(a.ue,{id:N,children:m}),o&&c&&(0,r.jsx)(a.w7,{className:"voorbeeld-form-field__error-message",id:I,children:c}),(0,r.jsx)(a.gx,{ref:t,id:O,name:n,className:"voorbeeld-form-field__input",autoComplete:d,"aria-describedby":(0,s.Z)({[N]:m,[I]:o,[w]:p})||void 0,invalid:o,dir:"auto",disabled:l,placeholder:f,readOnly:g,"aria-required":h,value:b,onFocus:j,onBlur:k,onInput:y,onChange:x,defaultValue:S}),p&&(0,r.jsx)("div",{className:"voorbeeld-form-field__status",id:w,children:(0,r.jsx)("div",{className:"voorbeeld-form-field-description voorbeeld-form-field-description--status",children:p})})]})});o.displayName="FormFieldTextarea"},6990:function(e,t,n){"use strict";n.d(t,{A:function(){return l},x:function(){return useAlertScroll}});var r=n(83152),a=(0,n(81420).Z)("exclamation-circle","IconExclamationCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 9v4",key:"svg-1"}],["path",{d:"M12 16v.01",key:"svg-2"}]]),s=n(66150),i=n(16185),o=n(66662);let useAlertScroll=()=>{let e=(0,o.useRef)(null),[t,n]=(0,o.useState)();return(0,o.useEffect)(()=>{if(t&&Object.keys(t).length>0){var n,r,a;(null===(n=e.current)||void 0===n?void 0:n.id)?location.href="#".concat(null===(r=e.current)||void 0===r?void 0:r.id):null===(a=e.current)||void 0===a||a.scrollIntoView()}},[t]),{alertRef:e,onInvalid:e=>{n(e)}}},l=(0,o.forwardRef)((e,t)=>{let{errors:n,...o}=e,l=Object.values(n).length>0;return(0,r.jsx)(r.Fragment,{children:l&&(0,r.jsxs)(s.bZ,{ref:t,type:"error",icon:(0,r.jsx)(i.VsD,{children:(0,r.jsx)(a,{})}),role:"alert",...o,children:[(0,r.jsx)(i.Bwn,{children:"Verbeter de fouten voor u verder gaat"}),Object.entries(n).map(e=>{let[t,n]=e;return(null==n?void 0:n.message)&&(0,r.jsx)(i.HhP,{children:(0,r.jsx)(i.hjI,{href:"#field-".concat(t),children:String(null==n?void 0:n.message)})},t)})]})})});l.displayName="OptionalValidationAlert"},61637:function(e,t,n){"use strict";n.d(t,{m:function(){return PageHeader}});var r=n(83152),a=n(46266);n(66662);var s=n(98370);n(45234);let PageHeader=e=>{let{children:t,className:n,...i}=e;return(0,r.jsx)(a.mr,{className:(0,s.Z)("example-page-header",n),...i,children:(0,r.jsx)("div",{className:"example-page-header__content",children:t})})};PageHeader.displayName="PageHeader"},54021:function(e,t,n){"use strict";n.d(t,{G:function(){return ExampleHeaderFunnelWmebv}});var r=n(83152);n(66662),n(43664);var a=n(16185),s=(0,n(81420).Z)("chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]]),i=n(61637),o=n(49390);let ExampleHeaderFunnelWmebv=e=>{let{username:t,userURL:n}=e;return(0,r.jsxs)(i.m,{className:"example--header-home-page",children:[(0,r.jsx)(o.n,{}),(0,r.jsx)("div",{className:"example--header-items",children:t&&(0,r.jsx)("div",{className:"example--search-box",children:(0,r.jsxs)(a.e7T,{href:n,appearance:"subtle-button",className:"voorbeeld-button-link",children:[t,(0,r.jsx)(s,{})]})})})]})};ExampleHeaderFunnelWmebv.displayName="ExampleHeaderFunnelWmebv"},55673:function(e,t,n){"use strict";n.d(t,{$L:function(){return u},C:function(){return l},D6:function(){return c},jj:function(){return i},k8:function(){return m},ps:function(){return a},ut:function(){return o},vX:function(){return d},wD:function(){return s}});let r="[ -\\[\\]_a-z|\xa1-\xa5\xa7\xaa\xab\xb0-\xb3\xb5-\xb7\xba-\xcf\xd1-\xf7\xf9-ēĖ-īĮ-ıĴ-ōŐ-žΩ]+",a={required:"Vul uw vraag in."},s={required:"Vul een naam in.",pattern:{value:new RegExp("^".concat(r,"$")),message:"De ingevulde naam is niet toegestaan. Gebruik geen speciale karakters."},maxLength:{value:200,message:"De ingevulde naam is niet toegestaan. Gebruik niet meer dan 200 tekens."}},i={required:"Vul een straat in.",pattern:{value:new RegExp("^".concat(r,"$")),message:"De ingevulde straat is niet toegestaan. Gebruik geen speciale karakters."},maxLength:{value:200,message:"De ingevulde straat is niet toegestaan. Gebruik niet meer dan 200 tekens."}},o={required:"Vul een huisnummer in.",pattern:{value:/^[0-9]+$/,message:"Het ingevulde huisnummer is niet toegestaan. Gebruik alleen nummers. Tip: Vul letters in onder toevoeging."},maxLength:{value:5,message:"Het ingevulde huisnummer is niet toegestaan. Gebruik niet meer dan 5 tekens."}},l={required:!1,pattern:{value:new RegExp("^".concat(r,"$")),message:"De ingevulde toevoeging is niet toegestaan. Gebruik geen speciale karakters."},maxLength:{value:4,message:"De ingevulde toevoeging is niet toegestaan. Gebruik niet meer dan 4 tekens."}},u={required:"Vul een postcode in.",pattern:{value:/^[0-9]{4}\s*[A-Za-z]{2}$/,message:"De ingevulde postcode is niet toegestaan. Vul een nederlandse postcode in, zoals bijvoorbeeld 1234AB."},maxLength:{value:7,message:"De ingevulde postcode is niet toegestaan. Gebruik niet meer dan 7 tekens."},minLength:{value:6,message:"De ingevulde postcode is niet toegestaan. Gebruik 6 tekens."}},d={required:"Vul een woonplaats in.",pattern:{value:new RegExp("^".concat(r,"$")),message:"De ingevulde woonplaats is niet toegestaan. Gebruik geen speciale karakters."},maxLength:{value:80,message:"De ingevulde woonplaats is niet toegestaan. Gebruik niet meer dan 80 tekens."}},c={required:"Vul een e-mailadres in.",pattern:{value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Het ingevulde e-mailadres is niet toegestaan. Vul een e-mailadres in, zoals bijvoorbeeld hallo@example.com."},maxLength:{value:200,message:"Het ingevulde e-mailadres is niet toegestaan. Gebruik niet meer dan 200 tekens."}},m={required:!1,pattern:{value:/^\+?[0-9]+$/,message:"Het ingevulde telefoonnummer is niet toegestaan. Vul een telefoonnummer in, zoals bijvoorbeeld 06123456789 of +316123456789."},maxLength:{value:15,message:"Het ingevulde telefoonnummer is niet toegestaan. Gebruik niet meer dan 15 tekens."}}},43664:function(){},45234:function(){},58046:function(e,t,n){"use strict";var r=n(60878);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,a,s,i){if(i!==r){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},45608:function(e,t,n){e.exports=n(58046)()},60878:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);