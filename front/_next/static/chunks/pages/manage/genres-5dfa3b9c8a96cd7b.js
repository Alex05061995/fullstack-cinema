(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[557],{12695:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/genres",function(){return n(69499)}])},21124:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(85893),i=n(73025),s=n.n(i),a=n(41664),o=n.n(a),l=n(94184),c=n.n(l),u=n(11163);let d=e=>{let{item:{title:t,link:n}}=e,{asPath:i}=(0,u.useRouter)();return(0,r.jsx)("li",{children:(0,r.jsx)(o(),{legacyBehavior:!0,href:n,children:(0,r.jsx)("a",{className:c()({[s().active]:i===n}),children:t})})})};var m=n(89583);let _=[{title:"Statistics",link:(0,m.wk)()},{title:"Users",link:(0,m.A7)("users")},{title:"Movies",link:(0,m.A7)("movies")},{title:"Actors",link:(0,m.A7)("actors")},{title:"Genres",link:(0,m.A7)("genres")}],x=()=>(0,r.jsx)("nav",{className:s().nav,children:(0,r.jsx)("ul",{children:_.map(e=>(0,r.jsx)(d,{item:e},e.link))})});var f=x},28245:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),i=n(70444),s=n(48869);let a=e=>{let{onClick:t}=e;return(0,r.jsx)(s.Z,{onClick:t,children:"Create new"})};var o=n(95478),l=n.n(o);let c=e=>{let{handleSearch:t,onClick:n,searchTerm:s}=e;return(0,r.jsxs)("div",{className:l().header,children:[(0,r.jsx)(i.Z,{searchTerm:s,handleSearch:t}),n&&(0,r.jsx)(a,{onClick:n})]})};var u=c},15573:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(85893),i=n(4663),s=n(94184),a=n.n(s),o=n(80513),l=n.n(o);a();let c=e=>{let{headerItems:t}=e;return(0,r.jsxs)("div",{className:a()(l().item,l().itemHeader),children:[t.map(e=>(0,r.jsxs)("div",{children:[e," "]},e)),(0,r.jsx)("div",{children:"Actions"})]})};var u=n(37416),d=n(11163);let m=e=>{let{editUrl:t,removeHandler:n}=e,{push:i}=(0,d.useRouter)();return(0,r.jsxs)("div",{className:l().actions,children:[(0,r.jsx)("button",{onClick:()=>i(t),children:(0,r.jsx)(u.O,{name:"MdEdit"})}),(0,r.jsx)("button",{onClick:n,children:(0,r.jsx)(u.O,{name:"MdClose"})})]})},_=e=>{let{removeHandler:t,tableItem:n}=e,i=0;return(0,r.jsxs)("div",{className:l().item,children:[n.items.map(e=>(0,r.jsx)("div",{children:e},e+i++)),(0,r.jsx)(m,{editUrl:n.editUrl,removeHandler:t})]})},x=e=>{let{tableItems:t,headerItems:n,isLoading:s,removeHandler:a}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)(c,{headerItems:n}),s?(0,r.jsx)(i.Z,{count:1,height:48,className:"mt-4"}):t.length?t.map(e=>(0,r.jsx)(_,{removeHandler:()=>a(e._id),tableItem:e},e._id)):(0,r.jsx)("div",{className:l().notFound,children:"Elements not found"})]})};var f=x},48869:function(e,t,n){"use strict";var r=n(85893),i=n(94184),s=n.n(i),a=n(34359),o=n.n(a);let l=e=>{let{children:t,className:n,...i}=e;return(0,r.jsx)("button",{className:s()(o().button,n),...i,children:t})};t.Z=l},40077:function(e,t,n){"use strict";var r=n(85893);let i=e=>{let{title:t,className:n}=e;return(0,r.jsx)("h1",{className:"text-white text-opacity-80 font-semibold ".concat((null==n?void 0:n.includes("xl"))?"":"text-3xl"," ").concat(n),children:t})};t.Z=i},45495:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(85893),i=n(9008),s=n.n(i),a=n(11163),o=n(40865);let l="Online cinema",c=e=>"".concat(e," | ").concat(l),u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e.replace(/<[^>]+>/g,"").replace(/&[^;]+>./g," ").replace(/([\u2700-\u27BF] | [\uE000-\uF8FF] | \uD83C[\uDC00-\uDFFF] | \uD83D[\uDC00-\uDFFF] | [\u2011-\u26FF] | \uD83E[\uDD10-\uDDFF])/g,"");return t&&(n=n.slice(0,t)+"..."),n};var d=n(83454);let m=e=>{let{title:t,description:n,image:i,children:m}=e,{asPath:_}=(0,a.useRouter)(),x="".concat(d.env.REACT_APP_URL).concat(_);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{itemProp:"headline",children:c(t)}),n?(0,r.jsxs)(s(),{children:[(0,r.jsx)("meta",{itemProp:"description",name:"description",content:u(n,152)}),(0,r.jsx)("link",{rel:"canonical",href:x}),(0,r.jsx)("meta",{property:"og:locale",content:"en"}),(0,r.jsx)("meta",{property:"og:title",content:c(t)}),(0,r.jsx)("meta",{property:"og:url",content:x}),(0,r.jsx)("meta",{property:"og:image",content:i||o.Z}),(0,r.jsx)("meta",{property:"og:site_name",content:l}),(0,r.jsx)("meta",{property:"og:description",content:u(n,197)})]}):(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]}),m]})};var _=m},69499:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(85893),i=n(21124),s=n(28245),a=n(15573),o=n(40077),l=n(45495),c=n(89583),u=n(43489),d=n(10538),m=n(88116),_=n(11163),x=n(67294),f=n(88767),h=n(16938);let j=()=>{let[e,t]=(0,x.useState)(""),n=(0,u.N)(e,500),{push:r}=(0,_.useRouter)(),i=(0,f.useQuery)(["genre list",n],()=>d.c.getAll(n),{select:e=>{let{data:t}=e;return t.map(e=>({_id:e._id,editUrl:(0,c.A7)("genre/edit/".concat(e._id)),items:[e.name,e.slug]}))},onError:e=>{(0,m._)(e,"Genre list")}}),s=e=>{t(e.target.value)},{mutateAsync:a}=(0,f.useMutation)("create genre",()=>d.c.create(),{onError:e=>{(0,m._)(e,"Delete Genre")},onSuccess:e=>{let{data:t}=e;h.Rt.success("Create genre","Genre was created successful"),r((0,c.A7)("genre/edit/".concat(t)))}}),{mutateAsync:o}=(0,f.useMutation)("delete genre",e=>d.c.delete(e),{onError:e=>{(0,m._)(e,"Delete Genre")},onSuccess:()=>{h.Rt.success("Delete genre","Genre was deleted successful"),i.refetch()}});return(0,x.useMemo)(()=>({handleSearch:s,...i,searchTerm:e,deleteAsync:o,createAsync:a}),[i,e,o,a])},p=()=>{let{isLoading:e,data:t,deleteAsync:n,searchTerm:c,handleSearch:u,createAsync:d}=j();return(0,r.jsxs)(l.Z,{title:"Genres",children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(o.Z,{title:"Genres"}),(0,r.jsx)(s.Z,{handleSearch:u,searchTerm:c,onClick:d}),(0,r.jsx)(a.Z,{isLoading:e,removeHandler:n,headerItems:["Name","Slug"],tableItems:t||[]})]})},v=()=>(0,r.jsx)(p,{});v.isOnlyAdmin=!0;var g=v},73025:function(e){e.exports={nav:"adminNavigation_nav___TpNr",active:"adminNavigation_active__da2_u"}},95478:function(e){e.exports={header:"adminHeader_header__EVL_f"}},80513:function(e){e.exports={actions:"adminTable_actions__2Z0V9",item:"adminTable_item__GRvwA",itemHeader:"adminTable_itemHeader__UVYFX",notFound:"adminTable_notFound__2tqmS"}},34359:function(e){e.exports={button:"form_button__yOLwy",common:"form_common__Y25KB",field:"form_field__MfP1o",uploadField:"form_uploadField__SfNcG",uploadFlex:"form_uploadFlex___EJSQ",uploadImageContainer:"form_uploadImageContainer__WmFzh",fade:"form_fade__luiBw",error:"form_error__sUS7j",editorWrapper:"form_editorWrapper__kd_SU",wrapper:"form_wrapper___Lju1",toolbar:"form_toolbar__nAnM_",editor:"form_editor__uwQTO"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=12695)}),_N_E=e.O()}]);