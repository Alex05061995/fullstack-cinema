(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[436],{33226:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/movie/edit/[id]",function(){return t(19067)}])},21124:function(e,r,t){"use strict";t.d(r,{Z:function(){return _}});var n=t(85893),l=t(73025),i=t.n(l),s=t(41664),a=t.n(s),o=t(94184),u=t.n(o),c=t(11163);let d=e=>{let{item:{title:r,link:t}}=e,{asPath:l}=(0,c.useRouter)();return(0,n.jsx)("li",{children:(0,n.jsx)(a(),{legacyBehavior:!0,href:t,children:(0,n.jsx)("a",{className:u()({[i().active]:l===t}),children:r})})})};var m=t(89583);let p=[{title:"Statistics",link:(0,m.wk)()},{title:"Users",link:(0,m.A7)("users")},{title:"Movies",link:(0,m.A7)("movies")},{title:"Actors",link:(0,m.A7)("actors")},{title:"Genres",link:(0,m.A7)("genres")}],f=()=>(0,n.jsx)("nav",{className:i().nav,children:(0,n.jsx)("ul",{children:p.map(e=>(0,n.jsx)(d,{item:e},e.link))})});var _=f},48869:function(e,r,t){"use strict";var n=t(85893),l=t(94184),i=t.n(l),s=t(34359),a=t.n(s);let o=e=>{let{children:r,className:t,...l}=e;return(0,n.jsx)("button",{className:i()(a().button,t),...l,children:r})};r.Z=o},76376:function(e,r,t){"use strict";var n=t(85893),l=t(94184),i=t.n(l),s=t(67294),a=t(34359),o=t.n(a);let u=(0,s.forwardRef)((e,r)=>{var t;let{placeholder:l,error:s,type:a="text",style:u,...c}=e;return(0,n.jsxs)("div",{className:i()(o().common,o().field),style:u,children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:l}),(0,n.jsx)("input",{ref:r,type:a,...c})]}),s&&(0,n.jsx)("div",{className:o().error,children:null===(t=s.message)||void 0===t?void 0:t.toString()})]})});u.displayName="Field",r.Z=u},92811:function(e,r,t){"use strict";var n=t(85893),l=t(76376),i=t(59574),s=t.n(i);let a=e=>{let{generate:r,register:t,error:i}=e;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(l.Z,{...t("slug",{required:"Slug is required!"}),placeholder:"Slug",error:i}),(0,n.jsx)("div",{className:s().badge,onClick:r,children:"generate"})]})};r.Z=a},21776:function(e,r,t){"use strict";t.d(r,{Z:function(){return g}});var n=t(85893),l=t(94184),i=t.n(l),s=t(68707);let a={upload:async(e,r)=>s.ZP.post("/files",e,{params:{folder:r},headers:{"Content-Type":"multipart/form-data"}})};var o=t(88116),u=t(67294),c=t(88767);let d=(e,r)=>{let[t,n]=(0,u.useState)(!1),{mutateAsync:l}=(0,c.useMutation)("upload file",e=>a.upload(e,r),{onSuccess:r=>{let{data:t}=r;e(t[0].url)},onError:e=>{(0,o._)(e,"Upload file")}}),i=(0,u.useCallback)(async e=>{n(!0);let r=e.target.files;if(!(null==r?void 0:r.length))return;let t=new FormData;t.append("file",r[0]),await l(t),setTimeout(()=>{n(!1)})},[l]);return(0,u.useMemo)(()=>({uploadFile:i,isLoading:t}),[i,t])};var m=t(34359),p=t.n(m),f=t(4663),_=t(25675),x=t.n(_);let v=e=>{let{onChange:r,error:t,folder:l,isNoImage:s=!1,placeholder:a,style:o,value:u}=e,{isLoading:c,uploadFile:m}=d(r,l);return(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:i()(p().field,p().uploadField),style:o,children:(0,n.jsxs)("div",{className:p().uploadFlex,children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:a}),(0,n.jsx)("input",{type:"file",onChange:m}),t&&(0,n.jsx)("div",{className:p().error,children:t.message})]}),!s&&(0,n.jsx)("div",{className:p().uploadImageContainer,children:c?(0,n.jsx)(f.Z,{count:1,className:"w-full h-full"}):u&&(0,n.jsx)(x(),{alt:"photo",src:u,fill:!0,unoptimized:!0})})]})})})};var g=v},40077:function(e,r,t){"use strict";var n=t(85893);let l=e=>{let{title:r,className:t}=e;return(0,n.jsx)("h1",{className:"text-white text-opacity-80 font-semibold ".concat((null==t?void 0:t.includes("xl"))?"":"text-3xl"," ").concat(t),children:r})};r.Z=l},53908:function(e,r,t){"use strict";t.d(r,{V:function(){return i}});var n=t(18016),l=t(68707);let i={getAll:async e=>l.vV.get((0,n.bc)(""),{params:e?{searchTerm:e}:{}}),getBySlug:async e=>l.vV.get((0,n.bc)("/by-slug/".concat(e))),update:async(e,r)=>l.ZP.put((0,n.bc)("/".concat(e)),r),getById:async e=>l.ZP.get((0,n.bc)("/".concat(e))),delete:async e=>l.ZP.delete((0,n.bc)("/".concat(e))),create:async()=>l.ZP.post((0,n.bc)(""))}},45495:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var n=t(85893),l=t(9008),i=t.n(l),s=t(11163),a=t(40865);let o="Online cinema",u=e=>"".concat(e," | ").concat(o),c=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=e.replace(/<[^>]+>/g,"").replace(/&[^;]+>./g," ").replace(/([\u2700-\u27BF] | [\uE000-\uF8FF] | \uD83C[\uDC00-\uDFFF] | \uD83D[\uDC00-\uDFFF] | [\u2011-\u26FF] | \uD83E[\uDD10-\uDDFF])/g,"");return r&&(t=t.slice(0,r)+"..."),t};var d=t(83454);let m=e=>{let{title:r,description:t,image:l,children:m}=e,{asPath:p}=(0,s.useRouter)(),f="".concat(d.env.REACT_APP_URL).concat(p);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{itemProp:"headline",children:u(r)}),t?(0,n.jsxs)(i(),{children:[(0,n.jsx)("meta",{itemProp:"description",name:"description",content:c(t,152)}),(0,n.jsx)("link",{rel:"canonical",href:f}),(0,n.jsx)("meta",{property:"og:locale",content:"en"}),(0,n.jsx)("meta",{property:"og:title",content:u(r)}),(0,n.jsx)("meta",{property:"og:url",content:f}),(0,n.jsx)("meta",{property:"og:image",content:l||a.Z}),(0,n.jsx)("meta",{property:"og:site_name",content:o}),(0,n.jsx)("meta",{property:"og:description",content:c(t,197)})]}):(0,n.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]}),m]})};var p=m},96228:function(e,r,t){"use strict";t.d(r,{R:function(){return n}});let n=e=>Object.keys(e)},85219:function(e,r,t){"use strict";t.d(r,{G:function(){return l}});let n=e=>{let r="А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я".split("-"),t="A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya".split("-"),n="";for(let l=0,i=e.length;l<i;l++){let i=e.charAt(l),s=r.indexOf(i);s>=0?n+=t[s]:n+=i}return n},l=e=>{let r=e.replace(/[\s]+/gi,"-");return(r=n(r)).replace(/[^0-9a-z_\-]+/gi,"").replace("---","-").replace("--","-").toLowerCase()}},19067:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return k}});var n=t(85893),l=t(5152),i=t.n(l);t(27025);var s=t(87536),a=t(21124),o=t(48869),u=t(76376),c=t(92811),d=t(21776),m=t(40077),p=t(4663),f=t(45495),_=t(85219),x=t(44053),v=t.n(x),g=t(53908),h=t(88116),j=t(88767);let y=()=>{let e=(0,j.useQuery)("List of actor",()=>g.V.getAll(),{select:e=>{let{data:r}=e;return r.map(e=>({label:e.name,value:e._id}))},onError:e=>{(0,h._)(e,"Actor list")}});return e};var b=t(10538);let Z=()=>{let e=(0,j.useQuery)("List of genre",()=>b.c.getAll(),{select:e=>{let{data:r}=e;return r.map(e=>({label:e.name,value:e._id}))},onError:e=>{(0,h._)(e,"Actor list")}});return e};var N=t(89583),S=t(76962),F=t(96228),w=t(11163),E=t(16938);let C=e=>{let{push:r,query:t}=(0,w.useRouter)(),n=String(t.id),{isLoading:l}=(0,j.useQuery)(["movie",n],()=>S.u.getById(n),{onSuccess:r=>{let{data:t}=r;(0,F.R)(t).forEach(r=>{e(r,t[r])})},onError:e=>{(0,h._)(e,"Get movie")},enabled:!!t.id}),{mutateAsync:i}=(0,j.useMutation)("update movie",e=>S.u.update(n,e),{onError:e=>{(0,h._)(e,"Update movie")},onSuccess:()=>{E.Rt.success("Update movie","Update was successful"),r((0,N.A7)("movies"))}}),s=async e=>{await i(e)};return{onSubmit:s,isLoading:l}},A=()=>{var e,r;let{handleSubmit:l,register:x,formState:{errors:g},setValue:h,getValues:j,control:b}=(0,s.cI)({mode:"onChange"}),N=i()(()=>Promise.all([t.e(500),t.e(383)]).then(t.bind(t,77383)),{loadableGenerated:{webpack:()=>[77383]},ssr:!1}),{isLoading:S,onSubmit:F}=C(h),{data:w,isLoading:E}=Z(),{data:A,isLoading:P}=y();return(0,n.jsxs)(f.Z,{title:"Edit genre",children:[(0,n.jsx)(a.Z,{}),(0,n.jsx)(m.Z,{title:"Edit genre"}),(0,n.jsx)("form",{onSubmit:l(F),className:v().form,children:S?(0,n.jsx)(p.Z,{count:3}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:v().fields,children:[(0,n.jsx)(u.Z,{...x("title",{required:"Title is required"}),placeholder:"Title",error:g.title,style:{width:"31%"}}),(0,n.jsx)("div",{style:{width:"31%"},children:(0,n.jsx)(c.Z,{register:x,error:g.slug,generate:()=>{h("slug",(0,_.G)(j("title")))}})}),(0,n.jsx)(u.Z,{...x("parametrs.country",{required:"Country is required"}),placeholder:"Country",error:null===(e=g.parametrs)||void 0===e?void 0:e.country,style:{width:"31%"}}),(0,n.jsx)(u.Z,{...x("parametrs.duration",{required:"Duration is required"}),placeholder:"Duration",error:null===(r=g.parametrs)||void 0===r?void 0:r.duration,style:{width:"31%"}})]}),(0,n.jsx)(s.Qr,{control:b,name:"genres",render:e=>{let{field:r,fieldState:{error:t}}=e;return(0,n.jsx)(N,{field:r,options:w||[],isLoading:E,isMulti:!0,placeholder:"Genres",error:t})},rules:{required:":Please select at least one genre"}}),(0,n.jsx)(s.Qr,{name:"actors",control:b,rules:{required:"Please select at least one actor!"},render:e=>{let{field:r,fieldState:{error:t}}=e;return(0,n.jsx)(N,{error:t,field:r,placeholder:"Actors",options:A||[],isLoading:P,isMulti:!0})}}),(0,n.jsx)(s.Qr,{control:b,name:"poster",defaultValue:"",render:e=>{let{field:{value:r,onChange:t},fieldState:{error:l}}=e;return(0,n.jsx)(d.Z,{onChange:t,error:l,folder:"movies",placeholder:"Poster",value:r})},rules:{required:"Poster is required"}}),(0,n.jsx)(s.Qr,{control:b,name:"bigPoster",defaultValue:"",render:e=>{let{field:{value:r,onChange:t},fieldState:{error:l}}=e;return(0,n.jsx)(d.Z,{onChange:t,error:l,folder:"movies",placeholder:"Big poster",value:r})},rules:{required:"Big poster is required"}}),(0,n.jsx)(s.Qr,{control:b,name:"videoUrl",defaultValue:"",render:e=>{let{field:{value:r,onChange:t},fieldState:{error:l}}=e;return(0,n.jsx)(d.Z,{onChange:t,error:l,folder:"movies",placeholder:"Video",value:r,style:{marginTop:"-25px"},isNoImage:!0})},rules:{required:"Video is required"}}),(0,n.jsx)(o.Z,{children:"Update"})]})})]})};t(67294);let P=()=>(0,n.jsx)(A,{});P.isOnlyAdmin=!0;var k=P},27025:function(){},73025:function(e){e.exports={nav:"adminNavigation_nav___TpNr",active:"adminNavigation_active__da2_u"}},59574:function(e){e.exports={badge:"slugField_badge__2sZyE"}},44053:function(e){e.exports={form:"admin-form_form__ySSUS",fields:"admin-form_fields__MN7YE"}},34359:function(e){e.exports={button:"form_button__yOLwy",common:"form_common__Y25KB",field:"form_field__MfP1o",uploadField:"form_uploadField__SfNcG",uploadFlex:"form_uploadFlex___EJSQ",uploadImageContainer:"form_uploadImageContainer__WmFzh",fade:"form_fade__luiBw",error:"form_error__sUS7j",editorWrapper:"form_editorWrapper__kd_SU",wrapper:"form_wrapper___Lju1",toolbar:"form_toolbar__nAnM_",editor:"form_editor__uwQTO"}}},function(e){e.O(0,[536,318,774,888,179],function(){return e(e.s=33226)}),_N_E=e.O()}]);