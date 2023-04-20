(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[239],{85595:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/actor/edit/[id]",function(){return r(99864)}])},66263:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(85893),a=r(67933),l=r.n(a),s=r(41664),o=r.n(s),i=r(94184),c=r.n(i),u=r(11163);let d=e=>{let{item:{title:t,link:r}}=e,{asPath:a}=(0,u.useRouter)();return(0,n.jsx)("li",{children:(0,n.jsx)(o(),{legacyBehavior:!0,href:r,children:(0,n.jsx)("a",{className:c()({[l().active]:a===r}),children:t})})})};var m=r(36470);let f=[{title:"Statistics",link:(0,m.wk)()},{title:"Users",link:(0,m.A7)("users")},{title:"Movies",link:(0,m.A7)("movies")},{title:"Actors",link:(0,m.A7)("actors")},{title:"Genres",link:(0,m.A7)("genres")}],p=()=>(0,n.jsx)("nav",{className:l().nav,children:(0,n.jsx)("ul",{children:f.map(e=>(0,n.jsx)(d,{item:e},e.link))})});var _=p},23141:function(e,t,r){"use strict";var n=r(85893),a=r(94184),l=r.n(a),s=r(5130),o=r.n(s);let i=e=>{let{children:t,className:r,...a}=e;return(0,n.jsx)("button",{className:l()(o().button,r),...a,children:t})};t.Z=i},74798:function(e,t,r){"use strict";var n=r(85893),a=r(94184),l=r.n(a),s=r(67294),o=r(5130),i=r.n(o);let c=(0,s.forwardRef)((e,t)=>{var r;let{placeholder:a,error:s,type:o="text",style:c,...u}=e;return(0,n.jsxs)("div",{className:l()(i().common,i().field),style:c,children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:a}),(0,n.jsx)("input",{ref:t,type:o,...u})]}),s&&(0,n.jsx)("div",{className:i().error,children:null===(r=s.message)||void 0===r?void 0:r.toString()})]})});c.displayName="Field",t.Z=c},49926:function(e,t,r){"use strict";var n=r(85893),a=r(74798),l=r(70625),s=r.n(l);let o=e=>{let{generate:t,register:r,error:l}=e;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(a.Z,{...r("slug",{required:"Slug is required!"}),placeholder:"Slug",error:l}),(0,n.jsx)("div",{className:s().badge,onClick:t,children:"generate"})]})};t.Z=o},33314:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(85893),a=r(94184),l=r.n(a),s=r(81759);let o={upload:async(e,t)=>s.ZP.post("/files",e,{params:{folder:t},headers:{"Content-Type":"multipart/form-data"}})};var i=r(44460),c=r(67294),u=r(88767);let d=(e,t)=>{let[r,n]=(0,c.useState)(!1),{mutateAsync:a}=(0,u.useMutation)("upload file",e=>o.upload(e,t),{onSuccess:t=>{let{data:r}=t;e(r[0].url)},onError:e=>{(0,i._)(e,"Upload file")}}),l=(0,c.useCallback)(async e=>{n(!0);let t=e.target.files;if(!(null==t?void 0:t.length))return;let r=new FormData;r.append("file",t[0]),await a(r),setTimeout(()=>{n(!1)})},[a]);return(0,c.useMemo)(()=>({uploadFile:l,isLoading:r}),[l,r])};var m=r(5130),f=r.n(m),p=r(68347),_=r(25675),x=r.n(_);let h=e=>{let{onChange:t,error:r,folder:a,isNoImage:s=!1,placeholder:o,style:i,value:c}=e,{isLoading:u,uploadFile:m}=d(t,a);return(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:l()(f().field,f().uploadField),style:i,children:(0,n.jsxs)("div",{className:f().uploadFlex,children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:o}),(0,n.jsx)("input",{type:"file",onChange:m}),r&&(0,n.jsx)("div",{className:f().error,children:r.message})]}),!s&&(0,n.jsx)("div",{className:f().uploadImageContainer,children:u?(0,n.jsx)(p.Z,{count:1,className:"w-full h-full"}):c&&(0,n.jsx)(x(),{alt:"photo",src:c,fill:!0,unoptimized:!0})})]})})})};var g=h},48135:function(e,t,r){"use strict";var n=r(85893);let a=e=>{let{title:t,className:r}=e;return(0,n.jsx)("h1",{className:"text-white text-opacity-80 font-semibold ".concat((null==r?void 0:r.includes("xl"))?"":"text-3xl"," ").concat(r),children:t})};t.Z=a},18361:function(e,t,r){"use strict";r.d(t,{V:function(){return l}});var n=r(4754),a=r(81759);let l={getAll:async e=>a.vV.get((0,n.bc)(""),{params:e?{searchTerm:e}:{}}),getBySlug:async e=>a.vV.get("actors/by-slug/".concat(e)),update:async(e,t)=>a.ZP.put((0,n.bc)("/".concat(e)),t),getById:async e=>a.ZP.get((0,n.bc)("/".concat(e))),delete:async e=>a.ZP.delete((0,n.bc)("/".concat(e))),create:async()=>a.ZP.post((0,n.bc)(""))}},79671:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(85893),a=r(9008),l=r.n(a),s=r(11163),o=r(28975);let i="Online cinema",c=e=>"".concat(e," | ").concat(i),u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e.replace(/<[^>]+>/g,"").replace(/&[^;]+>./g," ").replace(/([\u2700-\u27BF] | [\uE000-\uF8FF] | \uD83C[\uDC00-\uDFFF] | \uD83D[\uDC00-\uDFFF] | [\u2011-\u26FF] | \uD83E[\uDD10-\uDDFF])/g,"");return t&&(r=r.slice(0,t)+"..."),r};var d=r(83454);let m=e=>{let{title:t,description:r,image:a,children:m}=e,{asPath:f}=(0,s.useRouter)(),p="".concat(d.env.REACT_APP_URL).concat(f);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{itemProp:"headline",children:c(t)}),r?(0,n.jsxs)(l(),{children:[(0,n.jsx)("meta",{itemProp:"description",name:"description",content:u(r,152)}),(0,n.jsx)("link",{rel:"canonical",href:p}),(0,n.jsx)("meta",{property:"og:locale",content:"en"}),(0,n.jsx)("meta",{property:"og:title",content:c(t)}),(0,n.jsx)("meta",{property:"og:url",content:p}),(0,n.jsx)("meta",{property:"og:image",content:a||o.Z}),(0,n.jsx)("meta",{property:"og:site_name",content:i}),(0,n.jsx)("meta",{property:"og:description",content:u(r,197)})]}):(0,n.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]}),m]})};var f=m},54052:function(e,t,r){"use strict";r.d(t,{R:function(){return n}});let n=e=>Object.keys(e)},67725:function(e,t,r){"use strict";r.d(t,{G:function(){return a}});let n=e=>{let t="А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я".split("-"),r="A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya".split("-"),n="";for(let a=0,l=e.length;a<l;a++){let l=e.charAt(a),s=t.indexOf(l);s>=0?n+=r[s]:n+=l}return n},a=e=>{let t=e.replace(/[\s]+/gi,"-");return(t=n(t)).replace(/[^0-9a-z_\-]+/gi,"").replace("---","-").replace("--","-").toLowerCase()}},99864:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(85893);r(36973);var a=r(87536),l=r(66263),s=r(23141),o=r(74798),i=r(49926),c=r(33314),u=r(48135),d=r(68347),m=r(79671),f=r(67725),p=r(77962),_=r.n(p),x=r(36470),h=r(18361),g=r(54052),j=r(44460),v=r(11163),y=r(88767),N=r(16938);let F=e=>{let{push:t,query:r}=(0,v.useRouter)(),n=String(r.id),{isLoading:a}=(0,y.useQuery)(["actor",n],()=>h.V.getById(n),{onSuccess:t=>{let{data:r}=t;(0,g.R)(r).forEach(t=>{e(t,r[t])})},onError:e=>{(0,j._)(e,"Get actor")},enabled:!!r.id}),{mutateAsync:l}=(0,y.useMutation)("update actor",e=>h.V.update(n,e),{onError:e=>{(0,j._)(e,"Update actor")},onSuccess:()=>{N.Rt.success("Update actor","Update was successful"),t((0,x.A7)("actors"))}}),s=async e=>{await l(e)};return{onSubmit:s,isLoading:a}},b=()=>{let{handleSubmit:e,register:t,formState:{errors:r},setValue:p,getValues:x,control:h}=(0,a.cI)({mode:"onChange"}),{isLoading:g,onSubmit:j}=F(p);return(0,n.jsxs)(m.Z,{title:"Edit genre",children:[(0,n.jsx)(l.Z,{}),(0,n.jsx)(u.Z,{title:"Edit genre"}),(0,n.jsx)("form",{onSubmit:e(j),className:_().form,children:g?(0,n.jsx)(d.Z,{count:3}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:_().fields,children:[(0,n.jsx)(o.Z,{...t("name",{required:"Name is required"}),placeholder:"Name",error:r.name,style:{width:"31%"}}),(0,n.jsx)(i.Z,{register:t,error:r.slug,generate:()=>{p("slug",(0,f.G)(x("name")||""))}}),(0,n.jsx)(a.Qr,{control:h,name:"photo",defaultValue:"",render:e=>{let{field:{value:t,onChange:r},fieldState:{error:a}}=e;return(0,n.jsx)(c.Z,{onChange:r,error:a,folder:"actors",placeholder:"Photo",value:t})},rules:{required:"Photo is required"}})]}),(0,n.jsx)(s.Z,{children:"Update"})]})})]})},Z=()=>(0,n.jsx)(b,{});Z.isOnlyAdmin=!0;var S=Z},36973:function(){},67933:function(e){e.exports={nav:"adminNavigation_nav___TpNr",active:"adminNavigation_active__da2_u"}},70625:function(e){e.exports={badge:"slugField_badge__2sZyE"}},77962:function(e){e.exports={form:"admin-form_form__ySSUS",fields:"admin-form_fields__MN7YE"}},5130:function(e){e.exports={button:"form_button__yOLwy",common:"form_common__Y25KB",field:"form_field__MfP1o",uploadField:"form_uploadField__SfNcG",uploadFlex:"form_uploadFlex___EJSQ",uploadImageContainer:"form_uploadImageContainer__WmFzh",fade:"form_fade__luiBw",error:"form_error__sUS7j",editorWrapper:"form_editorWrapper__kd_SU",wrapper:"form_wrapper___Lju1",toolbar:"form_toolbar__nAnM_",editor:"form_editor__uwQTO"}}},function(e){e.O(0,[536,66,774,888,179],function(){return e(e.s=85595)}),_N_E=e.O()}]);