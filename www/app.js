(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(0)),l=(u(n(1)),n(18));n(2);function u(e){return e&&e.__esModule?e:{default:e}}n(22);var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selectMenu:0},n.onClickMenu=n.onClickMenu.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"renderToolbar",value:function(){return o.default.createElement(l.Toolbar,null,o.default.createElement("div",{className:"center"},"CSSで見た目を変える"))}},{key:"onClickMenu",value:function(e){this.setState({selectMenu:e})}},{key:"render",value:function(){var e=this,t={color:["red","orange","blue","green"][this.state.selectMenu-1]},n=["item","item","item","item"];return n[this.state.selectMenu-1]="item"+this.state.selectMenu,o.default.createElement(l.Page,{renderToolbar:this.renderToolbar},o.default.createElement("div",{className:"midashi"},"見出しタイトル"),o.default.createElement("p",{style:t},"はろー！"),o.default.createElement("ul",{className:"menu"},o.default.createElement("li",{className:n[0],onClick:function(){return e.onClickMenu(1)}},"メニュー１"),o.default.createElement("li",{className:n[1],onClick:function(){return e.onClickMenu(2)}},"メニュー２"),o.default.createElement("li",{className:n[2],onClick:function(){return e.onClickMenu(3)}},"メニュー３"),o.default.createElement("li",{className:n[3],onClick:function(){return e.onClickMenu(4)}},"メニュー４")))}}]),t}(o.default.Component);t.default=a},22:function(e,t,n){},7:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n(9);var r=n(11),o=c(n(0)),l=c(n(1)),u=c(n(2)),a=c(n(17));function c(e){return e&&e.__esModule?e:{default:e}}n(23),n(24),u.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var i=document.getElementById("app");l.default.render(o.default.createElement(r.AppContainer,null,o.default.createElement(a.default,null)),i)}},[[7,1,2]]]);