(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75133],{37061:function(e,n,a){"use strict";n.Z=function(){for(var e,n,a=0,t="";a<arguments.length;)(e=arguments[a++])&&(n=function r(e){var n,a,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e){if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(a=r(e[n]))&&(t&&(t+=" "),t+=a);else for(n in e)e[n]&&(t&&(t+=" "),t+=n)}return t}(e))&&(t&&(t+=" "),t+=n);return t}},45274:function(e,n,a){"use strict";a.d(n,{Y:function(){return ExampleHeader}});var t,l,i,s,o,c=a(83152),u=a(66150),d=a(66662);let m=(0,d.forwardRef)((e,n)=>{let{children:a,...t}=e;return(0,c.jsx)(u.zx,{...t,onClick:e=>{e.preventDefault();let n=e.target,a=n.getAttribute("popovertarget"),t=a?n.ownerDocument.getElementById(a):null;(null==t?void 0:t.localName)==="dialog"&&(null==t?void 0:t.getAttribute("data-modal"))&&(t.open?t.close():(t.showModal(),null==t||t.addEventListener("click",function(e){let n=t.getBoundingClientRect(),a=n.top<=e.clientY&&e.clientY<=n.top+n.height&&n.left<=e.clientX&&e.clientX<=n.left+n.width;a||t.close()})))},children:a})});m.displayName="PopOverButton";let p=(0,d.forwardRef)((e,n)=>{let{children:a,...t}=e;return(0,c.jsx)("dialog",{...t,children:a})});p.displayName="PopOverDialog";var h=a(81017);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}var searchbar_icon=function(e){return h.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"searchbar-icon_svg__icon searchbar-icon_svg__icon-tabler searchbar-icon_svg__icon-tabler-search"},e),t||(t=h.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"})),l||(l=h.createElement("path",{d:"M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0M21 21l-6-6"})))};function x_bold_extends(){return(x_bold_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}var x_bold=function(e){return h.createElement("svg",x_bold_extends({xmlns:"http://www.w3.org/2000/svg",width:15,height:14,fill:"none"},e),i||(i=h.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m13.5 1-12 12M1.5 1l12 12"})))};function user_icon_extends(){return(user_icon_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}var user_icon=function(e){return h.createElement("svg",user_icon_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"user-icon_svg__icon user-icon_svg__icon-tabler user-icon_svg__icon-tabler-user"},e),s||(s=h.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"})),o||(o=h.createElement("path",{d:"M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"})))},x=a(49390);a(64734),a(64516),a(4538);let ExampleHeader=e=>{let{search:n}=e;return(0,c.jsx)(u.mr,{className:"example--header-home-page",children:(0,c.jsxs)("div",{className:"example-page-header__content",children:[(0,c.jsxs)(m,{"aria-label":"collapse menu navigation",className:"example--header-burger-menu-button",popoverTarget:"popovermenu",children:[(0,c.jsxs)("div",{className:"example--header-burger-bar-container",children:[(0,c.jsx)("span",{className:"example--header-bar"}),(0,c.jsx)("span",{className:"example--header-bar"}),(0,c.jsx)("span",{className:"example--header-bar"})]}),"Menu"]}),(0,c.jsx)("div",{className:"example--logo",children:(0,c.jsx)(x.n,{})}),(0,c.jsxs)("div",{className:"example--header-items",children:[(0,c.jsxs)("div",{className:"example--header-links-container",children:[(0,c.jsx)(u.rU,{className:"example--header-links",href:"/wmebv/",children:"Contact"}),(0,c.jsxs)(u.rU,{className:"example--header-links",href:"/mijn-omgeving/",children:[(0,c.jsx)(user_icon,{className:"example--header-user-icon"})," Mijn omgeving"]})]}),n&&(0,c.jsxs)("div",{className:"example--search-box",children:[(0,c.jsx)(u.fE,{className:"example--header-text-box",placeholder:"Bijvoorbeeld zwembad of grofvuil"}),(0,c.jsxs)(u.zx,{className:"example--header-search-secondary-button",appearance:"secondary-action-button",children:[(0,c.jsx)(searchbar_icon,{})," Zoeken"]}),(0,c.jsxs)(u.zx,{className:"example--header-search-subtle-button",appearance:"subtle-button",children:[(0,c.jsx)(searchbar_icon,{})," Zoeken"]})]})]}),(0,c.jsxs)(p,{"data-modal":"true",id:"popovermenu",className:"example--header-popover-menu",role:"dialog",popover:"auto",children:[(0,c.jsx)("div",{className:"example--header-popover-container-button",children:(0,c.jsxs)(m,{appearance:"subtle-button",className:"example--popover-close",popoverTarget:"popovermenu",popoverTargetAction:"hide",children:[(0,c.jsx)(x_bold,{className:"example--header-xlogo"}),"Sluiten"]})}),(0,c.jsxs)("div",{className:"example--header-popover-container-links",children:[(0,c.jsx)(u.rU,{href:"#",className:"example--header-links",children:"Home"}),(0,c.jsx)(u.rU,{href:"#",className:"example--header-links",children:"About"}),(0,c.jsx)(u.rU,{href:"#",className:"example--header-links",children:"Services"}),(0,c.jsx)(u.rU,{href:"#",className:"example--header-links",children:"Portfolio"})]}),(0,c.jsxs)("div",{className:"example--header-user",children:[(0,c.jsx)(u.rU,{href:"#",className:"example--header-links",children:"Contact"}),(0,c.jsxs)(u.rU,{href:"#",className:"example--header-links",children:[(0,c.jsx)(user_icon,{className:"example--header-user-icon"})," Mijn omgeving"]})]})]})]})})};ExampleHeader.displayName="ExampleHeader"},46109:function(e,n,a){"use strict";a.d(n,{$:function(){return ExampleNavigation}});var t=a(83152);a(66662);var l=a(66150),i=a(98370);a(45282);let NavigationLinkList=e=>{let{children:n,center:a}=e;return(0,t.jsx)("nav",{className:"example-nav-bar__nav",children:(0,t.jsx)("ul",{role:"list",className:(0,i.Z)("example-nav-bar__link-list",{"example-nav-bar__link-list--center":a}),children:n})})},NavigationLink=e=>{let{center:n,children:a,...s}=e;return(0,t.jsx)("li",{className:(0,i.Z)("example-nav-bar__link-list-item",{"example-nav-bar__link-list-item--center":n}),children:(0,t.jsx)(l.rU,{className:"example-nav-bar__link",...s,children:a})})},NavigationLinkButton=e=>{let{center:n,children:a,...s}=e;return(0,t.jsx)("li",{className:(0,i.Z)("example-nav-bar__link-list-item",{"example-nav-bar__link-list-item--center":n}),children:(0,t.jsx)(l.Qj,{className:"example-nav-bar__link",...s,children:a})})},Navigation_Navigation=e=>{let{center:n=!1,children:a}=e;return(0,t.jsx)("div",{className:"example-nav-bar",children:(0,t.jsx)("div",{className:(0,i.Z)("example-nav-bar__content",{"example-nav-bar__content--center":n}),children:a})})};Navigation_Navigation.displayName="Navigation";let useNavigation=e=>{let{links:n=[],center:a}=e;return{children:(0,t.jsx)(NavigationLinkList,{center:a,children:n.map((e,n)=>{let{label:l,href:i}=e;return i?(0,t.jsx)(NavigationLink,{center:a,href:i,children:l},n):(0,t.jsx)(NavigationLinkButton,{className:"example-navbar__link",children:l},n)})})}},ExampleNavigation=()=>(0,t.jsx)(Navigation_Navigation,{...useNavigation({links:[{label:"Home",href:"/"},{label:"Wonen en leven",href:"/wonen-en-leven/"},{label:"Zorg en onderwijs",href:"/zorg-en-onderwijs/"},{label:"Werk en inkomen",href:"/werk-en-inkomen/"},{label:"Contact",href:"/wmebv/"}]})});ExampleNavigation.displayName="ExampleNavigation"},64734:function(){},64516:function(){},4538:function(){},45282:function(){},2351:function(e,n,a){"use strict";function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}a.d(n,{Z:function(){return _extends}})},98634:function(e,n,a){"use strict";function _objectDestructuringEmpty(e){if(null==e)throw TypeError("Cannot destructure "+e)}a.d(n,{Z:function(){return _objectDestructuringEmpty}})},28376:function(e,n,a){"use strict";function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=Array(n);a<n;a++)t[a]=e[a];return t}function _slicedToArray(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var t,l,i,s,o=[],c=!0,u=!1;try{if(i=(a=a.call(e)).next,0===n){if(Object(a)!==a)return;c=!1}else for(;!(c=(t=i.call(a)).done)&&(o.push(t.value),o.length!==n);c=!0);}catch(e){u=!0,l=e}finally{try{if(!c&&null!=a.return&&(s=a.return(),Object(s)!==s))return}finally{if(u)throw l}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(n,{Z:function(){return _slicedToArray}})}}]);