(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(91429)}])},7793:function(t,e,n){"use strict";var s=n(85893),i=n(73248),r=n(37028),a=n.n(r);let o=t=>{let{items:e}=t;return(0,s.jsx)("div",{className:a().gallery,children:e.map(t=>(0,s.jsx)(i.Z,{item:t,variant:"vertical"},t.link))})};e.Z=o},73248:function(t,e,n){"use strict";var s=n(85893),i=n(41664),r=n.n(i),a=n(37028),o=n.n(a),l=n(94184),c=n.n(l),u=n(25675),p=n.n(u);let d=t=>{let{item:e,variant:n}=t;return(0,s.jsxs)(r(),{href:e.link,className:c()(o().item,{[o().withText]:e.content,[o().horizontal]:"horizontal"===n,[o().vertical]:"vertical"===n}),children:[(0,s.jsx)(p(),{alt:e.name,src:e.posterPath,fill:!0,draggable:"false",priority:!0}),e.content&&(0,s.jsxs)("div",{className:o().content,children:[(0,s.jsx)("div",{className:o().title,children:e.content.title}),e.content.subTitle&&(0,s.jsx)("div",{className:o().subTitle,children:e.content.subTitle})]})]})};e.Z=d},40077:function(t,e,n){"use strict";var s=n(85893);let i=t=>{let{title:e,className:n}=t;return(0,s.jsx)("h1",{className:"text-white text-opacity-80 font-semibold ".concat((null==n?void 0:n.includes("xl"))?"":"text-3xl"," ").concat(n),children:e})};e.Z=i},94061:function(t,e,n){"use strict";var s=n(85893);let i=t=>{let{title:e}=t;return(0,s.jsx)("h2",{className:"text-white text-xl mb-5 font-semibold",children:e})};e.Z=i},45495:function(t,e,n){"use strict";n.d(e,{Z:function(){return x}});var s=n(85893),i=n(9008),r=n.n(i),a=n(11163),o=n(40865);let l="Online cinema",c=t=>"".concat(t," | ").concat(l),u=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t.replace(/<[^>]+>/g,"").replace(/&[^;]+>./g," ").replace(/([\u2700-\u27BF] | [\uE000-\uF8FF] | \uD83C[\uDC00-\uDFFF] | \uD83D[\uDC00-\uDFFF] | [\u2011-\u26FF] | \uD83E[\uDD10-\uDDFF])/g,"");return e&&(n=n.slice(0,e)+"..."),n};var p=n(83454);let d=t=>{let{title:e,description:n,image:i,children:d}=t,{asPath:x}=(0,a.useRouter)(),h="".concat(p.env.REACT_APP_URL).concat(x);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{itemProp:"headline",children:c(e)}),n?(0,s.jsxs)(r(),{children:[(0,s.jsx)("meta",{itemProp:"description",name:"description",content:u(n,152)}),(0,s.jsx)("link",{rel:"canonical",href:h}),(0,s.jsx)("meta",{property:"og:locale",content:"en"}),(0,s.jsx)("meta",{property:"og:title",content:c(e)}),(0,s.jsx)("meta",{property:"og:url",content:h}),(0,s.jsx)("meta",{property:"og:image",content:i||o.Z}),(0,s.jsx)("meta",{property:"og:site_name",content:l}),(0,s.jsx)("meta",{property:"og:description",content:u(n,197)})]}):(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]}),d]})};var x=d},91429:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return R},default:function(){return A}});var s=n(85893),i=n(40077),r=n(45495),a=n(87462),o=n(63366),l=n(94578);function c(t,e){return t.replace(RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var u=n(67294),p=n(98885),d=n(59391),x=function(t,e){return t&&e&&e.split(" ").forEach(function(e){var n;(n=t).classList?n.classList.remove(e):"string"==typeof n.className?n.className=c(n.className,e):n.setAttribute("class",c(n.className&&n.className.baseVal||"",e))})},h=function(t){function e(){for(var e,n=arguments.length,s=Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var s=e.resolveArguments(t,n),i=s[0],r=s[1];e.removeClasses(i,"exit"),e.addClass(i,r?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var s=e.resolveArguments(t,n),i=s[0],r=s[1];e.addClass(i,r?"appear":"enter","active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var s=e.resolveArguments(t,n),i=s[0],r=s[1]?"appear":"enter";e.removeClasses(i,r),e.addClass(i,r,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,s="string"==typeof n,i=s?(s&&n?n+"-":"")+t:n[t],r=s?i+"-active":n[t+"Active"],a=s?i+"-done":n[t+"Done"];return{baseClassName:i,activeClassName:r,doneClassName:a}},e}(0,l.Z)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var s,i=this.getClassNames(e)[n+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&r&&(i+=" "+r),"active"===n&&t&&(0,d.Q)(t),i&&(this.appliedClasses[e][n]=i,s=i,t&&s&&s.split(" ").forEach(function(e){var n,s;return n=t,s=e,void(n.classList?n.classList.add(s):(n.classList?s&&n.classList.contains(s):-1!==(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+s+" "))||("string"==typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)))}))},n.removeClasses=function(t,e){var n=this.appliedClasses[e],s=n.base,i=n.active,r=n.done;this.appliedClasses[e]={},s&&x(t,s),i&&x(t,i),r&&x(t,r)},n.render=function(){var t=this.props,e=(t.classNames,(0,o.Z)(t,["classNames"]));return u.createElement(p.ZP,(0,a.Z)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(u.Component);h.defaultProps={classNames:""},h.propTypes={};var f=n(2848),m=n.n(f),E=n(94184),v=n.n(E),g=n(37416);let _=t=>{let{clickHandler:e,variant:n}=t,i="left"===n;return(0,s.jsx)("button",{className:v()(m().arrow,{[m().left]:i,[m().right]:!i}),onClick:e,children:(0,s.jsx)(g.O,{name:i?"MdChevronLeft":"MdChevronRight"})})};var N=n(11163),b=n(31443),C=n.n(b),j=n(25675),y=n.n(j);let k=t=>{let{slide:e,buttonTitle:n="watch"}=t,{push:i}=(0,N.useRouter)();return(0,s.jsxs)("div",{className:C().slide,children:[e.bigPoster&&(0,s.jsx)(y(),{fill:!0,className:C().image,src:e.bigPoster,alt:e.title,draggable:"false",unoptimized:!0,priority:!0}),(0,s.jsxs)("div",{className:C().content,children:[(0,s.jsx)("div",{className:C().heading,children:e.title}),(0,s.jsx)("div",{className:C().subHeading,children:e.subTitle}),(0,s.jsx)("button",{className:C().button,onClick:()=>i(e.link),children:n})]})]})},S=t=>{let[e,n]=(0,u.useState)(0),[s,i]=(0,u.useState)(!0),r=t=>{let s="next"===t?e+1:e-1;i(!1),setTimeout(()=>{n(s),i(!0)},300)};return{slideIn:s,index:e,isNext:e+1<t,isPrev:!!e&&e-1<t,handleClick:r}},T=t=>{let{slides:e,buttonTitle:n}=t,{slideIn:i,index:r,isNext:a,isPrev:o,handleClick:l}=S(e.length);return(0,s.jsxs)("div",{className:C().slider,children:[(0,s.jsx)(h,{in:i,classNames:"slide-animation",timeout:300,unmountOnExit:!0,children:(0,s.jsx)(k,{slide:e[r],buttonTitle:n})}),o&&(0,s.jsx)(_,{variant:"left",clickHandler:()=>l("prev")}),a&&(0,s.jsx)(_,{variant:"right",clickHandler:()=>l("next")})]})};var w=n(94061),Z=n(7793);let D=t=>{let{slides:e,actors:n,trendingMovies:a}=t;return console.log(n),(0,s.jsxs)(r.Z,{title:"Watch movie online",description:"Stream right now in your browser",children:[(0,s.jsx)(i.Z,{title:"Watch movies online",className:"text-grey-300 mb-8  text-xl"}),e.length&&(0,s.jsx)(T,{slides:e}),(0,s.jsxs)("div",{className:"my-10",children:[(0,s.jsx)(w.Z,{title:"Trending now"}),a.length&&(0,s.jsx)(Z.Z,{items:a})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(w.Z,{title:"Best actors"}),n.length&&(0,s.jsx)(Z.Z,{items:n})]})]})},O=t=>{let{slides:e,actors:n,trendingMovies:i}=t;return(0,s.jsx)(D,{slides:e,actors:n,trendingMovies:i})};var R=!0,A=O},37028:function(t){t.exports={gallery:"gallery_gallery__ul_3m",item:"gallery_item__td6S1",vertical:"gallery_vertical__6F_xa",horizontal:"gallery_horizontal__vbfk3",withText:"gallery_withText__g4Kcw",content:"gallery_content__NN6Z7",title:"gallery_title__9evqb",subTitle:"gallery_subTitle__IG1Sn"}},2848:function(t){t.exports={arrow:"slideArrow_arrow__Ipguh",fade:"slideArrow_fade__k89gK",left:"slideArrow_left__4xSH2",right:"slideArrow_right__7GwOe"}},31443:function(t){t.exports={slider:"slider_slider__7q761",slide:"slider_slide__frq2p",image:"slider_image__1KzGU",content:"slider_content__z_RVn",heading:"slider_heading__SE6ef",subHeading:"slider_subHeading__EEvuH",button:"slider_button__4RBz4"}},98885:function(t,e,n){"use strict";n.d(e,{ZP:function(){return E}});var s=n(63366),i=n(94578),r=n(67294),a=n(73935),o={disabled:!1},l=n(220),c=n(59391),u="unmounted",p="exited",d="entering",x="entered",h="exiting",f=function(t){function e(e,n){s=t.call(this,e,n)||this;var s,i,r=n&&!n.isMounting?e.enter:e.appear;return s.appearStatus=null,e.in?r?(i=p,s.appearStatus=d):i=x:i=e.unmountOnExit||e.mountOnEnter?u:p,s.state={status:i},s.nextCallback=null,s}(0,i.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===u?{status:p}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==x&&(e=d):(n===d||n===x)&&(e=h)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,s=this.props.timeout;return t=e=n=s,null!=s&&"number"!=typeof s&&(t=s.exit,e=s.enter,n=void 0!==s.appear?s.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){if(this.cancelNextCallback(),e===d){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this);n&&(0,c.Q)(n)}this.performEnter(t)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===p&&this.setState({status:u})},n.performEnter=function(t){var e=this,n=this.props.enter,s=this.context?this.context.isMounting:t,i=this.props.nodeRef?[s]:[a.findDOMNode(this),s],r=i[0],l=i[1],c=this.getTimeouts(),u=s?c.appear:c.enter;if(!t&&!n||o.disabled){this.safeSetState({status:x},function(){e.props.onEntered(r)});return}this.props.onEnter(r,l),this.safeSetState({status:d},function(){e.props.onEntering(r,l),e.onTransitionEnd(u,function(){e.safeSetState({status:x},function(){e.props.onEntered(r,l)})})})},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:a.findDOMNode(this);if(!e||o.disabled){this.safeSetState({status:p},function(){t.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:h},function(){t.props.onExiting(s),t.onTransitionEnd(n.exit,function(){t.safeSetState({status:p},function(){t.props.onExited(s)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,e.nextCallback=null,t(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),s=null==t&&!this.props.addEndListener;if(!n||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=i[0],o=i[1];this.props.addEndListener(r,o)}null!=t&&setTimeout(this.nextCallback,t)},n.render=function(){var t=this.state.status;if(t===u)return null;var e=this.props,n=e.children,i=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,s.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(l.Z.Provider,{value:null},"function"==typeof n?n(t,i):r.cloneElement(r.Children.only(n),i))},e}(r.Component);function m(){}f.contextType=l.Z,f.propTypes={},f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},f.UNMOUNTED=u,f.EXITED=p,f.ENTERING=d,f.ENTERED=x,f.EXITING=h;var E=f},220:function(t,e,n){"use strict";var s=n(67294);e.Z=s.createContext(null)},59391:function(t,e,n){"use strict";n.d(e,{Q:function(){return s}});var s=function(t){return t.scrollTop}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=48312)}),_N_E=t.O()}]);